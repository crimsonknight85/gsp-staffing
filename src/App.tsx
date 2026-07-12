import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

// Dashboard pages
import AdminDashboard from './pages/dashboard/AdminDashboard'
import HRDashboard from './pages/dashboard/HRDashboard'
import ClientDashboard from './pages/dashboard/ClientDashboard'
import ApplicantDashboard from './pages/dashboard/ApplicantDashboard'
import ContractorDashboard from './pages/dashboard/ContractorDashboard'
import FinanceDashboard from './pages/dashboard/FinanceDashboard'

// Marketing layout wrapper
function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Routes>
        {/* Marketing pages with shared nav/footer */}
        <Route
          path="/"
          element={
            <MarketingLayout>
              <Home />
            </MarketingLayout>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <MarketingLayout>
              <HowItWorks />
            </MarketingLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MarketingLayout>
              <Contact />
            </MarketingLayout>
          }
        />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Role-based dashboards (no marketing nav/footer) */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/applicant" element={<ApplicantDashboard />} />
        <Route path="/contractor" element={<ContractorDashboard />} />
        <Route path="/finance" element={<FinanceDashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
