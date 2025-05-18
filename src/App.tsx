import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminServices from './pages/admin/AdminServices';
import AdminPortfolio from './pages/admin/AdminPortfolio';
import AdminTeam from './pages/admin/AdminTeam';
import AdminMetrics from './pages/admin/AdminMetrics';
import AdminTechStack from './pages/admin/AdminTechStack';
import AdminContact from './pages/admin/AdminContact';
import AdminLogin from './pages/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ScrollToTop />
      <Routes location={location}>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                  <Route path="services" element={<AdminServices />} />
                  <Route path="portfolio" element={<AdminPortfolio />} />
                  <Route path="team" element={<AdminTeam />} />
                  <Route path="metrics" element={<AdminMetrics />} />
                  <Route path="tech-stack" element={<AdminTechStack />} />
                  <Route path="contact" element={<AdminContact />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <Layout theme={theme} toggleTheme={toggleTheme}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;