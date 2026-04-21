import { Heart, Hand, Music, TreePine, Users, Palette } from 'lucide-react';
import enrichmentsImg from '../../imports/Daily-Enrichments-Include-Yoga-Music-Baby-Signing-And-More-1024x730.jpg';

export function DailyEnrichments() {
  const enrichments = [
    { icon: Heart, title: 'Yoga', description: 'Mindfulness and body awareness' },
    { icon: Hand, title: 'Baby Sign Language', description: 'Early communication skills' },
    { icon: Music, title: 'Music & Movement', description: 'Rhythm and creative expression' },
    { icon: TreePine, title: 'Outdoor Play', description: 'Physical development and exploration' },
    { icon: Users, title: 'Circle Time', description: 'Social skills and group learning' },
    { icon: Palette, title: 'Creative Arts', description: 'Imagination and fine motor skills' },
  ];

  return (
    <section className="bg-[#EDE3D9] py-20" id="enrichments">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="mb-6">
              Boost Your Child's Development With Fun, Daily Enrichments
            </h2>
            <p className="text-[#6B6A64]">
              Your child benefits from daily enrichments that stimulate brain growth and add excitement to their learning. They explore the mind-body connection with yoga, communicate their needs with baby sign language, wiggle out with music and movement, and more!
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={enrichmentsImg}
              alt="Daily enrichments - Yoga, Music, Baby Signing"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrichments.map((enrichment, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start p-6 rounded-2xl bg-white hover:shadow-lg transition-all border border-[#D4C9BA]"
            >
              <div className="w-12 h-12 bg-[#EB9833] rounded-xl flex items-center justify-center flex-shrink-0">
                <enrichment.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">{enrichment.title}</h4>
                <p className="text-[#6B6A64] text-sm">{enrichment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}