import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import logoImg from '../../imports/logo.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show nav at top of page
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 bg-[#EDE3D9] z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Main Navigation Bar */}
      <div className="border-b border-[#D4C9BA]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-3 items-center">
            {/* Left - Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#000000] hover:text-[#EB9833] transition font-medium">
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[#000000] hover:text-[#EB9833] transition font-medium"
                >
                  Programs <ChevronDown className="w-4 h-4" />
                </button>
                {programsOpen && (
                  <div
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-2xl shadow-lg border border-[#D4C9BA] z-50"
                  >
                    <div className="p-2">
                      <Link to="/explorers-avenue" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Explorer's Avenue</Link>
                      <Link to="/jr-kinder-lane" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Jr. Kinder Lane</Link>
                      <Link to="/crayon-club" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Crayon Club</Link>
                      <Link to="/summer-camp" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Summer Camp</Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[#000000] hover:text-[#EB9833] transition font-medium"
                >
                  About <ChevronDown className="w-4 h-4" />
                </button>
                {aboutOpen && (
                  <div
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-2xl shadow-lg border border-[#D4C9BA] z-50"
                  >
                    <div className="p-2">
                      <Link to="/about" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">About Us</Link>
                      <Link to="/why-choose-us" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Why Choose Us</Link>
                      <Link to="/tuition-support" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Tuition Support</Link>
                      <Link to="/health-safety" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Health & Safety</Link>
                      <Link to="/careers" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Careers</Link>
                      <Link to="/parent-reviews" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Parent Reviews</Link>
                      <Link to="/contact" className="block px-4 py-3 hover:bg-[#EDE3D9] rounded-xl transition">Contact Us</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logoImg}
                  alt="Visionary Preschool"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Right - CTA Button */}
            <div className="hidden md:flex justify-end">
              <a
                href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
                className="bg-[#000000] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a1a1a] transition uppercase tracking-wide text-sm"
              >
                Schedule a Tour
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden col-start-3 flex justify-end">
              <button
                className="text-[#000000]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#D4C9BA] pt-4">
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-[#000000] hover:text-[#EB9833] font-medium">Home</Link>
                <div className="font-semibold text-[#000000] mb-2 mt-2">Programs</div>
                <Link to="/explorers-avenue" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Explorer's Avenue</Link>
                <Link to="/jr-kinder-lane" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Jr. Kinder Lane</Link>
                <Link to="/crayon-club" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Crayon Club</Link>
                <Link to="/summer-camp" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Summer Camp</Link>
                <div className="font-semibold text-[#000000] mb-2 mt-4">About</div>
                <Link to="/about" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">About Us</Link>
                <Link to="/why-choose-us" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Why Choose Us</Link>
                <Link to="/tuition-support" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Tuition Support</Link>
                <Link to="/health-safety" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Health & Safety</Link>
                <Link to="/careers" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Careers</Link>
                <Link to="/parent-reviews" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Parent Reviews</Link>
                <Link to="/contact" className="pl-4 text-[#6B6A64] hover:text-[#EB9833]">Contact Us</Link>
                <a
                  href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
                  className="bg-[#000000] text-white px-6 py-3 rounded-full font-bold text-center mt-4 uppercase tracking-wide text-sm"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}