-- =============================================================
-- GSP Platform — Admin Bootstrap
-- Run this AFTER running schema.sql AND after creating your
-- admin user in Supabase → Authentication → Users.
--
-- This promotes globalstaffingpartners.work@gmail.com to admin
-- in the GSP organization.
-- =============================================================

-- Replace the email below if your admin email is different
INSERT INTO public.organization_memberships (user_id, organization_id, role, status)
SELECT
  u.id,
  o.id,
  'admin',
  'active'
FROM auth.users u, public.organizations o
WHERE u.email = 'globalstaffingpartners.work@gmail.com'
  AND o.slug = 'gsp'
ON CONFLICT (user_id, organization_id) DO UPDATE
  SET role = 'admin', status = 'active', updated_at = now();
