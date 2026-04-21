import { Camera, Video, MessageSquare, BarChart3 } from 'lucide-react';

export function PlaygroundApp() {
  const features = [
    { icon: Camera, text: 'Daily Photos' },
    { icon: Video, text: 'Videos' },
    { icon: MessageSquare, text: 'Parent Notes' },
    { icon: BarChart3, text: 'Progress Reports' },
  ];

  return (
    <section className="bg-[#000000] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-[#EB9833] bg-white px-4 py-2 rounded-full inline-block mb-4">
              Receive Cute Pictures, Fun Videos, Parent Notes, & More With The PlaygroundÂ© App!
            </p>
            <h2 className="text-white mb-6">
              Your Child's Day Is Just A Click Away
            </h2>
            <p className="text-white/90 mb-8">
              Caring and thoughtful teachers use the PlaygroundÂ© app to include you in all the milestones that make your child's early learning years so special. You can't wait to receive pictures, videos, notes, and daily reports on your little one's progress and developments!
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-2 border border-white/30"
                >
                  <feature.icon className="w-5 h-5" />
                  <span className="font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
            <a 
              href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu" target="_blank" rel="noopener noreferrer" 
              className="bg-[#EB9833] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition inline-block shadow-lg"
            >
              Learn More
            </a>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] h-[560px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EB9833]/20 to-white/5 rounded-[3rem] backdrop-blur-sm border-2 border-white/30"></div>
              <div className="absolute inset-4 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                  alt="Playground App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
