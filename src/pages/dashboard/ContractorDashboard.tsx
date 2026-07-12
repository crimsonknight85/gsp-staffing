import DashboardShell from './DashboardShell'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, FileText, CheckCircle2, DollarSign } from 'lucide-react'

export default function ContractorDashboard() {
  return (
    <DashboardShell role="contractor">
      <h1 className="text-2xl font-bold text-gsp-navy mb-6">My Workspace</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Clock} label="Hours Logged" value="32h" />
        <StatCard icon={FileText} label="Pending Timesheet" value="1" />
        <StatCard icon={CheckCircle2} label="Approved" value="4" />
        <StatCard icon={DollarSign} label="Earnings" value="$2,400" />
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-lg font-semibold text-gsp-navy mb-4">Timesheets</h2>
        <p className="text-sm text-slate-500">Submit timesheets and track your hours. Full time tracking coming in Phase 5.</p>
      </div>
    </DashboardShell>
  )
}

function StatCard({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
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
