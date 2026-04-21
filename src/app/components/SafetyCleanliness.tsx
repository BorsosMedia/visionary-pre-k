import { Shield, Lock, FileCheck, Camera, Sparkles, Droplets } from 'lucide-react';
import cleanSpacesImg from '../../imports/Super-Clean-Spaces-Keep-Your-Child-Healthy-And-Safe-1024x745.jpg';
import fingerprintImg from '../../imports/Convenient-Fingerprint-Check-In-And-Check-Out-standard-scale-2_00x-gigapixel.jpg';

export function SafetyCleanliness() {
  const safetyFeatures = [
    { icon: Shield, text: 'Fenced Yard' },
    { icon: Lock, text: 'Restricted Access' },
    { icon: FileCheck, text: 'Procare® Check-In' },
    { icon: Camera, text: 'Security Cameras' },
  ];

  const cleaningFeatures = [
    { icon: Sparkles, text: 'Daily Deep Cleaning' },
    { icon: Droplets, text: 'Sanitization Protocols' },
  ];

  return (
    <section className="bg-[#000000] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Keeping You & Your Family Safe
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            We maintain the highest standards for safety and cleanliness to provide peace of mind and a healthy environment for your child.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Safety Section */}
          <div>
            <h3 className="text-white mb-8">Keeping Your Little One Safe Is A Top Priority</h3>
            <div className="grid grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition border border-white/20"
                >
                  <div className="w-12 h-12 bg-[#EB9833] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold">{feature.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/90">
              Experienced and trusted teachers use a fenced-in yard, restricted access doors, and the Procare® system, which allows for convenient fingerprint check-ins and check-outs. For added peace of mind, your child stays ultra-safe with security cameras throughout the school, inside and out.
            </p>
          </div>

          {/* Safety Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={fingerprintImg}
              alt="Convenient fingerprint check-in system"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cleanliness Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={cleanSpacesImg}
              alt="Super clean and safe classroom spaces"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Cleanliness Section */}
          <div>
            <h3 className="text-white mb-8">Super Clean Spaces Keep Your Child Healthy & Safe</h3>
            <div className="grid grid-cols-2 gap-6">
              {cleaningFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition border border-white/20"
                >
                  <div className="w-12 h-12 bg-[#EB9833] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold">{feature.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/90">
              An onsite housekeeper and an overnight cleaning crew leave no corner unwiped, unpolished, or unmopped. A daily deep-cleaning with extra focus on sanitizing high-touch surfaces, like doorknobs and countertops, keeps everyone healthy and your child's surroundings sparkling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}