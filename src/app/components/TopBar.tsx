import { Phone, Mail, MapPin } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-[#000000] text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-6">
          <div className="bg-[#EB9833] text-white px-4 py-1 rounded-full font-medium">
            Now Enrolling for Fall 2026
          </div>
          <a href="tel:713-520-6633" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="w-4 h-4" />
            <span>713-520-6633</span>
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
          <a href="#careers" className="hover:opacity-80">We're Hiring</a>
          <a
            href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EB9833] text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            Schedule a Tour
          </a>
        </div>
      </div>
    </div>
  );
}