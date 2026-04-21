import { DoorOpen, BookOpen, Library } from 'lucide-react';
import parentChildImg from '../../imports/Strengthen-The-Parent-Child-Relationship-For-Lasting-Success-1.jpg';

export function ParentEngagement() {
  const features = [
    {
      icon: DoorOpen,
      title: 'Using An Open-Door Policy',
      description: 'Connect with the Parent Engagement Coordinator anytime you need to. Having a dedicated staff member onsite guarantees a speedy response to all your questions & concerns.',
    },
    {
      icon: BookOpen,
      title: 'Helping To Resolve Common Parenting Problems',
      description: 'Discover all the latest research on sleep, teething, nutrition, challenging behavior, how to boost brain growth at home, & more.',
    },
    {
      icon: Library,
      title: 'Providing Plenty Of Resources',
      description: 'The parenting library offers an array of literary resources, and the Parent Engagement Coordinator helps you with everything from housing to sourcing supplies, & more.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={parentChildImg}
              alt="Parent-child relationship strengthening"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6">
              Strengthen The Parent-Child Relationship For Lasting Success
            </h2>
            <p className="text-[#6B6A64]">
              When you participate in your child's education now, you're more likely to see them pursue and succeed in higher education later in life. The Parent Engagement Coordinator helps bridge the gap between home and school by:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#EDE3D9] rounded-2xl p-8 border border-[#D4C9BA] shadow-sm hover:shadow-lg hover:border-[#EB9833] transition-all"
            >
              <div className="w-14 h-14 bg-[#EB9833] rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-[#6B6A64]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}