import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gsp-navy">404</h1>
        <p className="mt-4 text-lg text-slate-500">Page not found</p>
        <p className="mt-2 text-sm text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-slate-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Link to="/">
            <Button className="bg-gsp-terracotta hover:bg-[#7A5E3F] text-white transition-all duration-300 hover:-translate-y-0.5">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
