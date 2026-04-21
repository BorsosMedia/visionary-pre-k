import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import logoImg from '../../imports/logo.png';

export function Footer() {
  const programs = [
    { name: 'Explorer\'s Avenue', href: '#explorer' },
    { name: 'Jr. Kinder Lane', href: '#kinder' },
    { name: 'Crayon Club', href: '#crayon' },
    { name: 'Summer Camp', href: '#summer' },
  ];

  const about = [
    { name: 'Center of Excellence', href: '#excellence' },
    { name: 'Texas Rising Star', href: '#tsr' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Daily Enrichments', href: '#enrichments' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#000000] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4 text-white">Our Locations</h4>
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

          {/* Brand & Contact */}
          <div>
            <div className="mb-6">
              <img
                src={logoImg}
                alt="Visionary Preschool"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <a href="tel:713-520-6633" className="flex items-center gap-2 hover:text-[#EB9833] transition">
                <Phone className="w-4 h-4" />
                <span>713-520-6633</span>
              </a>
              <a href="mailto:info@cradles2crayons.com" className="flex items-center gap-2 hover:text-[#EB9833] transition">
                <Mail className="w-4 h-4" />
                <span>info@visionaryprek.com</span>
              </a>
              <div className="text-white/60 text-xs mt-4">
                7:00 AM - 5:45 PM (Mon - Fri)
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4 text-white">Programs</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {programs.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-[#EB9833] transition">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {about.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-[#EB9833] transition">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/careers" className="hover:text-[#EB9833] transition">Careers</Link></li>
              <li><a href="#tuition" className="hover:text-[#EB9833] transition">Tuition Support</a></li>
              <li><a href="#parent-resources" className="hover:text-[#EB9833] transition">Parent Resources</a></li>
              <li><a href="#calendar" className="hover:text-[#EB9833] transition">Calendar</a></li>
              <li><a href="#contact" className="hover:text-[#EB9833] transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © 2026 Visionary Pre K Early Learning Academy. All Rights Reserved | Privacy Policy | Powered By Grow Your Center
          </p>
          <div className="flex gap-4">
            <a href="#facebook" className="text-white/70 hover:text-[#EB9833] transition" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#instagram" className="text-white/70 hover:text-[#EB9833] transition" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="text-white/70 hover:text-[#EB9833] transition" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}