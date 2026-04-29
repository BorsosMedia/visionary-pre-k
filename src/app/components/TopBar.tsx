import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function TopBar() {
  return (
    <div className="bg-[#000000] text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-6">
          <div className="bg-[#EB9833] text-white px-4 py-1 rounded-full font-medium">
            Now Enrolling for Fall 2026
          </div>
          <a href="tel:832-662-8566" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="w-4 h-4" />
            <span>(832) 662-8566</span>
          </a>
          <a href="mailto:info@visionaryprek.com" className="hidden sm:flex items-center gap-2 hover:opacity-80">
            <Mail className="w-4 h-4" />
            <span>E-mail</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>2 Locations in Houston Area</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/careers" className="hover:opacity-80">We're Hiring</Link>
        </div>
      </div>
    </div>
  );
}