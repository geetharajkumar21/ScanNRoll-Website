import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Platforms from './components/Platforms.jsx';
import Solutions from './components/Solutions.jsx';
import Industries from './components/Industries.jsx';
import Footer from './components/Footer.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfUsePage from './pages/TermsOfUsePage.jsx';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

function getCurrentPath() {
  return window.location.pathname.replace(/\/$/, '') || '/';
}

function App() {
  const [pathname, setPathname] = useState(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useMemo(
    () => (nextPath) => {
      if (nextPath === pathname) {
        return;
      }

      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [pathname],
  );

  const pageKey = pathname === '/' ? 'home' : pathname;

  return (
    <div className="page">
      <Header currentPath={pageKey} onNavigate={navigate} />
      <main>
        {pageKey === 'home' && (
          <>
            <Hero />
            <div className="content-panel">
              <Platforms />
              <Solutions />
              <Industries />
            </div>
          </>
        )}
        {pageKey === '/privacy-policy' && <PrivacyPolicyPage onNavigate={navigate} />}
        {pageKey === '/terms-of-use' && <TermsOfUsePage onNavigate={navigate} />}
        {pageKey === '/contact-us' && <ContactUsPage onNavigate={navigate} />}
        {pageKey === '/about-us' && <AboutUsPage onNavigate={navigate} />}
      </main>
      <Footer currentPath={pageKey} onNavigate={navigate} />
    </div>
  );
}

export default App;

