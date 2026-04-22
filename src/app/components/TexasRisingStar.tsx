import { Check } from 'lucide-react';
import fourStarImg from '../../imports/The-Only-4-Star-School-In-The-Entire-Zip-Code-1.jpg';
import texasSchoolReadyImg from '../../imports/Texas-School-Ready™-Teachers-Are-A-Cut-Above-1024x745.jpg';

export function TexasRisingStar() {
  const impacts = [
    {
      title: 'They Shape Your Child\'s Growth & Development By Responding To Their Needs',
      description: 'Backed by continuous training, teachers evaluate & address your child\'s individual needs. This allows your little one to feel seen, heard, & valued as they dive into exciting personalized learning experiences.'
    },
    {
      title: 'They Boost Your Child\'s Pre-Reading Skills',
      description: 'Teachers focus on the "building blocks" of early language development that directly impact pre-reading & pre-writing. Early literacy strategies & instruction means your child improves the quality of their book reading, participates in group conversation more frequently, and receives more verbal instruction to build their skills.'
    },
    {
      title: 'They Organize Classrooms & Lesson Plans To Optimize Learning',
      description: 'Your child\'s teachers put extra attention & care into preparing lesson plans, materials, & the classroom environment—this makes a crucial difference in your tot\'s natural ability to take the next step in their learning.'
    }
  ];

  return (
    <section className="bg-white py-20" id="tsr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EB9833] text-white px-5 py-2 rounded-full mb-6">
              <span className="text-xl">⭐</span>
              <span className="font-semibold">4-Star Rating</span>
            </div>
            <h2 className="mb-6">
              The Only 4-Star School In The Entire Zip Code
            </h2>
            <p className="text-sm text-[#EB9833] font-bold mb-4">
              Texas Rising Star Rating For The Best Education
            </p>
            <p className="text-[#6B6A64] mb-8">
              Texas Rising Star Schools must prove they are in a better position to contribute to your child's early education. Parent engagement, Director and teacher qualifications, and educational excellence have earned Visionary Pre K the highest Texas Rising Star level rating possible—4-stars!
            </p>
            <a
              href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EB9833] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition inline-block shadow-md"
            >
              Learn More About Our Programs
            </a>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={fourStarImg}
              alt="4-Star School - Child learning"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={texasSchoolReadyImg}
              alt="Texas School Ready Teachers"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="mb-4">
              Being Texas School Ready™ Ensures Kindergarten Success
            </h3>
            <p className="text-[#6B6A64] mb-8">
              Teachers enrolled in the TSR 3-year program have the resources and tools to define your child's specific needs and tailor playful lessons that build your little learner's strengths and address any weaknesses to guarantee Kindergarten readiness.
            </p>
            <p className="font-bold text-[#EB9833] mb-6">
              How Texas School Ready™ Teachers Positively Impact Your Child:
            </p>
            <div className="space-y-6">
              {impacts.map((impact, index) => (
                <div key={index}>
                  <h4 className="mb-2 font-bold text-[#000000]">{impact.title}</h4>
                  <p className="text-[#6B6A64] text-sm">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}