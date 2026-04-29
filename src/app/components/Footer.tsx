import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import logoImg from '../../imports/logo.png';

export function Footer() {
  const programs = [
    { name: "Explorer's Avenue", to: '/explorers-avenue' },
    { name: 'Jr. Kinder Lane', to: '/jr-kinder-lane' },
    { name: 'Crayon Club', to: '/crayon-club' },
    { name: 'Summer Camp', to: '/summer-camp' },
  ];

  const about = [
    { name: 'Center of Excellence', to: '/about#excellence' },
    { name: 'Texas Rising Star', to: '/about#tsr' },
    { name: 'Curriculum', to: '/about#curriculum' },
    { name: 'Daily Enrichments', to: '/about#enrichments' },
    { name: 'Testimonials', to: '/about#testimonials' },
    { name: 'FAQ', to: '/about#faq' },
  ];

  return (
    <footer className="bg-[#000000] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Contact (left) */}
          <div className="lg:col-span-1 flex flex-col lg:h-full lg:min-h-0">
            <div className="mb-6">
              <img
                src={logoImg}
                alt="Visionary Preschool"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <a href="tel:832-662-8566" className="flex items-center gap-2 hover:text-[#EB9833] transition">
                <Phone className="w-4 h-4" />
                <span>(832) 662-8566</span>
              </a>
              <a href="mailto:info@cradles2crayons.com" className="flex items-center gap-2 hover:text-[#EB9833] transition">
                <Mail className="w-4 h-4" />
                <span>info@visionaryprek.com</span>
              </a>
            </div>
            <div className="text-white/60 text-xs mt-4 lg:mt-auto lg:pt-4">
              7:00 AM - 5:45 PM (Mon - Fri)
            </div>
          </div>

          {/* Locations: on lg, title + grid sit at bottom (with hours) so no large gap above the heading */}
          <div className="lg:col-span-3 flex flex-col lg:h-full lg:min-h-0 lg:justify-end">
            <h4 className="font-bold mb-2 text-white shrink-0">Our Locations</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Location 1 */}
              <div className="space-y-2 text-sm text-white/80">
                <div className="font-semibold text-white">Visionary Pre K Academy</div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>7215 W Fuqua, Bldg 7<br />Missouri City, TX 77489</span>
                </div>
                <div className="text-white/60 text-xs">Two's, Pre K 3-4</div>
              </div>

              {/* Location 2 */}
              <div className="space-y-2 text-sm text-white/80">
                <div className="font-semibold text-white">Visionary Pre K at Regency Lofts</div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>6308 Bowling Green, Bldg 8<br />Houston, TX 77021</span>
                </div>
                <div className="text-white/60 text-xs">Two's, Pre K 3-4, After Schoolers</div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {about.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-[#EB9833] transition">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/careers" className="hover:text-[#EB9833] transition">Careers</Link></li>
              <li><Link to="/tuition-support" className="hover:text-[#EB9833] transition">Tuition Support</Link></li>
              <li><Link to="/parent-reviews" className="hover:text-[#EB9833] transition">Parent Resources</Link></li>
              <li><Link to="/schedule-tour" className="hover:text-[#EB9833] transition">Calendar</Link></li>
              <li><Link to="/contact" className="hover:text-[#EB9833] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs (same row as About & Resources on desktop) */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-4 text-white">Programs</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {programs.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-[#EB9833] transition">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm text-white/70 space-y-1">
            <p>
              © 2026 Visionary Pre K Early Learning Academy. All Rights Reserved |{' '}
              <Link to="/privacy-policy" className="hover:text-[#EB9833] transition hover:underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>
            <p>
              Design and Development by{' '}
              <a
                href="https://www.borsosmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EB9833] transition"
              >
                Borsos Media
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/C2CSchool/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EB9833] transition" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/cradles2crayonshtx" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EB9833] transition" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}