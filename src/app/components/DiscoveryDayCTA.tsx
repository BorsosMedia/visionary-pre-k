import { Award, Gift, Coffee, Users, TreePine, Shield, Sparkles } from 'lucide-react';

export function DiscoveryDayCTA() {
  const benefits = [
    { icon: Coffee, text: 'A healthy start with a yummy breakfast' },
    { icon: Sparkles, text: 'Daily discovery & learning during circle time' },
    { icon: Users, text: 'Making friends as they socialize with peers' },
    { icon: TreePine, text: 'Outdoor play to tucker them out by naptime' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB9833] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EB9833] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EB9833] rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, #EB9833 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#EB9833] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
          <Gift className="w-5 h-5" />
          <span className="font-bold">Limited Time Offer</span>
        </div>

        <h2 className="text-white mb-6 text-4xl md:text-6xl">
          FREE Discovery Day!
        </h2>

        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Before Enrolling, Check Us Out For A Half-day Of Play, Which Includes:
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-[#EB9833] hover:bg-white/15 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EB9833] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-left text-white/95 font-medium">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#EB9833]" />
            <p className="font-bold text-2xl text-white">HAPPY FAMILY GUARANTEE</p>
          </div>
          <p className="text-white/80 text-lg">
            Choose confidently knowing we're committed to your family's satisfaction
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="/schedule-tour"
          className="group bg-[#EB9833] text-white px-14 py-6 rounded-full font-bold text-xl hover:bg-[#d88829] transition inline-flex items-center gap-3 shadow-2xl hover:shadow-[#EB9833]/50 hover:scale-105"
        >
          <span>Get Pricing & Details Now</span>
          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <p className="mt-6 text-white/60 text-sm">
          No commitment required • Experience our program risk-free
        </p>
      </div>
    </section>
  );
}