import { Users, BookOpen, Heart } from 'lucide-react';
import empowerFamilyImg from '../../imports/Empower-Your-Family-Join-A-Certified-Center-Of-Excellence-1024x756.jpg';

export function CenterOfExcellence() {
  const features = [
    {
      icon: Users,
      title: 'Mentored Teachers Participate In Continuous Professional Development',
      description: 'Mentors guide teachers in evidence-based methods that improve student interaction & teaching, ensuring growth towards school readiness.',
    },
    {
      icon: BookOpen,
      title: 'The Comprehensive Curriculum Develops 21st Century Skills',
      description: 'A 21st Century Learning Framework grounded in a research-based curriculum supports school readiness. Your child prepares for future careers by learning crucial skills like critical thinking, creativity, collaboration, communication, media literacy, information literacy, technology literacy, and flexibility.',
    },
    {
      icon: Heart,
      title: 'Parent Involvement Impacts Long-Term School Success',
      description: 'Using a multi-generation approach, the Parent Engagement Coordinator works with parents & caregivers to strengthen the parent-child relationship and apply the skills & practices that achieve school readiness.',
    },
  ];

  return (
    <section className="bg-[#EDE3D9] py-20" id="excellence">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="mb-6">
              Empower Your Family—Join A Certified Center Of Excellence
            </h2>
            <p className="text-[#6B6A64]">
              This innovative partnership program improves teachers' performance and the quality of instruction your child receives. The sought-after Center of Excellence seal is awarded only to schools that can prove your child is 100% ready for Kindergarten.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={empowerFamilyImg}
              alt="Child learning at Center of Excellence"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-[#EB9833]">3 Ways Your Certified Center Of Excellence Stands Out:</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#D4C9BA] shadow-sm hover:shadow-lg hover:border-[#EB9833] transition-all"
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