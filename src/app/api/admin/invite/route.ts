import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient as createServiceClient } from "@supabase/supabase-js";

/**
 * POST /api/admin/invite
 * Body: { email, fullName?, role, organizationId }
 *
 * Admin-only: invites a user via Supabase, then creates a membership
 * record with status 'invited'.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, fullName, role, organizationId } = body;

    // ── Validate ────────────────────────────────────
    if (!email || !role || !organizationId) {
      return NextResponse.json(
        { error: "email, role, and organizationId are required" },
        { status: 400 },
      );
    }

    const validRoles = ["admin", "hr", "client", "applicant", "contractor", "finance"];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role" },
        { status: 400 },
      );
    }

    // ── Auth: verify caller is admin ────────────────
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll() {},
        },
      },
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check admin role using service client (bypasses RLS for membership check)
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
      return NextResponse.json(
        { error: "Server misconfiguration — missing service role key" },
        { status: 500 },
      );
    }

    const adminClient = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      serviceKey,
    );

    const { data: adminCheck } = await adminClient
      .from("organization_memberships")
      .select("id")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .eq("status", "active")
      .single();

    if (!adminCheck) {
      return NextResponse.json({ error: "Forbidden — admin only" }, { status: 403 });
    }

    // ── Invite user via Supabase Auth ───────────────
    const { data: inviteData, error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(
      email,
      {
        redirectTo: `${request.nextUrl.origin}/onboarding`,
        data: fullName ? { full_name: fullName } : undefined,
      },
    );

    if (inviteError) {
      // Don't reveal whether email exists — but for invite flow, show the error
      return NextResponse.json(
        { error: inviteError.message },
        { status: 400 },
      );
    }

    const invitedUserId = inviteData.user.id;

    // ── Create profile if not exists (trigger may not have fired) ──
    await adminClient
      .from("profiles")
      .upsert({
        id: invitedUserId,
        email,
        full_name: fullName || null,
      })
      .select();

    // ── Create membership ──────────────────────────
    const { error: membershipError } = await adminClient
      .from("organization_memberships")
      .insert({
        user_id: invitedUserId,
        organization_id: organizationId,
        role,
        status: "invited",
      });

    if (membershipError) {
      // User invited but membership failed — admin can manually fix
      return NextResponse.json(
        {
          error: "User invited but membership creation failed: " + membershipError.message,
          invitedUserId,
        },
        { status: 500 },
      );
    }

    // ── Audit event ────────────────────────────────
    await adminClient.from("audit_events").insert({
      actor_id: user.id,
      organization_id: organizationId,
      action: "invitation_sent",
      resource_type: "user",
      resource_id: invitedUserId,
      metadata: { email, role },
    });

    return NextResponse.json({
      success: true,
      message: `Invitation sent to ${email}`,
      userId: invitedUserId,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
