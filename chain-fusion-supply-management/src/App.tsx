
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardOverview from './components/dashboard/DashboardOverview';
import OrdersPage from './pages/OrdersPage';
import TransportationPage from './pages/TransportationPage';
import DistributionPage from './pages/DistributionPage';
import AnalyticsPage from './pages/AnalyticsPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/" element={
            <DashboardLayout>
              <DashboardOverview />
            </DashboardLayout>
          } />
          <Route path="/orders" element={
            <DashboardLayout>
              <OrdersPage />
            </DashboardLayout>
          } />
          <Route path="/transportation" element={
            <DashboardLayout>
              <TransportationPage />
            </DashboardLayout>
          } />
          <Route path="/distribution" element={
            <DashboardLayout>
              <DistributionPage />
            </DashboardLayout>
          } />
          <Route path="/analytics" element={
            <DashboardLayout>
              <AnalyticsPage />
            </DashboardLayout>
          } />
          <Route path="/users" element={
            <DashboardLayout>
              <UsersPage />
            </DashboardLayout>
          } />
          <Route path="/settings" element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
