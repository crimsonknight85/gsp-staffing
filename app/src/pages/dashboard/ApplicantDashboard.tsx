import DashboardShell from './DashboardShell'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Clock, CheckCircle2 } from 'lucide-react'

export default function ApplicantDashboard() {
  return (
    <DashboardShell role="applicant">
      <h1 className="text-2xl font-bold text-gsp-navy mb-6">My Applications</h1>
      <div className="grid gap-6 sm:grid-cols-3">
        <StatCard icon={FileText} label="Applications" value="2" />
        <StatCard icon={Clock} label="In Review" value="1" />
        <StatCard icon={CheckCircle2} label="Completed" value="1" />
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-lg font-semibold text-gsp-navy mb-4">Application Status</h2>
        <p className="text-sm text-slate-500">Track your applications and update your profile. Full applicant portal coming in Phase 4.</p>
      </div>
    </DashboardShell>
  )
}

function StatCard({ icon: Icon, label, value }: { icon: typeof FileText; label: string; value: string }) {
  return (
    <Card className="border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gsp-navy/5">
            <Icon className="h-5 w-5 text-gsp-navy" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gsp-navy">{value}</p>
            <p className="text-xs text-slate-500">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
