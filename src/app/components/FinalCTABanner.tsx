import { Phone, Sparkles, Calendar, MapPin } from 'lucide-react';

export function FinalCTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-[#EB9833] via-[#d88829] to-[#c67820] text-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Start Your Child's Journey Today</span>
        </div>

        <h2 className="text-white mb-6 text-4xl md:text-5xl">
          Ready To Give Your Child The Best Start?
        </h2>
        <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the Visionary Pre K family and give your child a foundation for lifelong learning and success.
          Our team is ready to answer your questions and welcome you home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-[#EB9833] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#EDE3D9] transition shadow-2xl flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule Your Tour Today
          </a>
          <a
            href="tel:713-520-6633"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#EB9833] transition shadow-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call (713) 520-6633
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <MapPin className="w-8 h-8 mx-auto mb-3" />
            <p className="font-semibold mb-1">2 Convenient Locations</p>
            <p className="text-sm text-white/80">Missouri City & Houston</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Calendar className="w-8 h-8 mx-auto mb-3" />
            <p className="font-semibold mb-1">Tours Available</p>
            <p className="text-sm text-white/80">Mon–Fri, 9 AM – 4 PM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Sparkles className="w-8 h-8 mx-auto mb-3" />
            <p className="font-semibold mb-1">Enrolling Now</p>
            <p className="text-sm text-white/80">Fall 2026 & Beyond</p>
          </div>
        </div>
      </div>
    </section>
  );
}