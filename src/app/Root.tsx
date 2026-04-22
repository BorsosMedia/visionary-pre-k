import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { TopBar } from './components/TopBar';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Root() {
  return (
    <div className="min-h-screen">
      <ScrollToTopOnRouteChange />
      <TopBar />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
