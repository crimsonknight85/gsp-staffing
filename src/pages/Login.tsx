import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, LogIn } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

function getOAuthUrl() {
  const appId = import.meta.env.VITE_APP_ID
  const authUrl = import.meta.env.VITE_KIMI_AUTH_URL
  const redirectUri = `${window.location.origin}/api/oauth/callback`
  const state = btoa(redirectUri)

  const url = new URL(`${authUrl}/api/oauth/authorize`)
  url.searchParams.set('client_id', appId)
  url.searchParams.set('redirect_uri', redirectUri)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', 'profile')
  url.searchParams.set('state', state)

  return url.toString()
}

export default function Login() {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  // Redirect if already logged in
  useEffect(() => {
    if (user && !isLoading) {
      const roleRedirects: Record<string, string> = {
        admin: '/admin',
        hr: '/hr',
        client: '/client',
        applicant: '/applicant',
        contractor: '/contractor',
        finance: '/finance',
      }
      const redirect = roleRedirects[user.role] || '/'
      navigate(redirect, { replace: true })
    }
  }, [user, isLoading, navigate])

  if (isLoading) {
    return (
      <section className="flex flex-1 items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gsp-terracotta border-t-transparent" />
      </section>
    )
  }

  return (
    <section className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gsp-navy">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold leading-tight tracking-tight text-gsp-navy">
                Global Staffing
              </span>
              <span className="text-[10px] font-medium leading-tight tracking-widest uppercase text-gsp-terracotta">
                Partners
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Sign in to access your dashboard
          </p>
        </div>

        <Card className="border-slate-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gsp-navy">
              Welcome back
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full bg-gsp-navy hover:bg-gsp-navy/90 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              size="lg"
              onClick={() => {
                window.location.href = getOAuthUrl()
              }}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign in with Kimi
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400">
                  Secure OAuth 2.0
                </span>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400">
              Don't have access?{' '}
              <a href="/contact" className="text-gsp-terracotta hover:underline">
                Contact us
              </a>{' '}
              to get started.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
