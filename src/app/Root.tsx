import { Outlet } from 'react-router';
import { TopBar } from './components/TopBar';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export function Root() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
