import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import heroBackgroundImg from '../../imports/hero-background-apr21.png';

export function Hero() {
  return (
    <section className="relative bg-[#000000] text-white overflow-hidden min-h-[800px] flex items-end justify-center pt-72">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImg}
          alt="Happy child"
          className="w-full h-full object-cover object-[center_12%]"
        />
        {/* Gradient overlay to ensure text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-2 md:pb-4 relative z-10 w-full text-center translate-y-8 md:translate-y-12">
        {/* Badge */}
       

        {/* Main Heading */}
        <h1 className="text-white mb-3 text-5xl md:text-7xl leading-tight">
          BE A <span className="text-[#EB9833]">VISIONARY</span>
        </h1>

        <p className="text-white/90 text-xl mb-8 mx-auto max-w-2xl">
          Academic Excellence in Early Learning - Nurturing Children Who Love To Learn Since 2004
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#EB9833] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#d88829] transition shadow-2xl flex items-center justify-center gap-3"
          >
            <Calendar className="w-6 h-6" />
            Schedule a Tour
          </a>
          <a
            href="tel:713-520-6633"
            className="group bg-white text-[#000000] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#EB9833] hover:text-white transition shadow-2xl flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Talk to Us
          </a>
        </div>

        <p className="text-white/60 text-sm">
          Preschool & Daycare Center Serving Houston, TX
        </p>
      </div>
    </section>
  );
}