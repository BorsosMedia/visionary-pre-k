import { Award, Clock, Users } from 'lucide-react';
import teachersImg from '../../imports/50-Yrs-Combined-Expertise-Shape-Your-Childs-Learning-1024x738.jpg';
import lifeSkillsImg from '../../imports/Your-Child-Gains-Life-Skills-And-Classroom-Basics-Now-1-1024x764.jpg';

export function CurriculumTeachers() {
  const curricula = [
    'Conscious Discipline©',
    'Frog Street©',
    'Footsteps2Brilliance®',
    'Prelude 2 Music',
  ];

  const stats = [
    { icon: Award, value: '50+ Years', label: 'Combined Expertise' },
    { icon: Clock, value: '5–16 Years', label: 'Teacher Tenure' },
    { icon: Users, value: '100%', label: 'CDA Certified' },
  ];

  return (
    <section className="bg-white py-20" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Curriculum Section */}
          <div>
            <h2 className="mb-6">
              Combined Curricula Prepares Your Little One For Excellence
            </h2>
            <p className="text-[#6B6A64] mb-8">
              By combining curricula like Conscious Discipline©️, Frog Street©️, Footsteps2Brilliance®️, and Prelude 2 Music, your little genius conquers various subject areas, practices early learning disciplines, hits important academic milestones, and prepares for ultimate school success.
            </p>
            <div className="flex flex-wrap gap-3">
              {curricula.map((curriculum, index) => (
                <div
                  key={index}
                  className="bg-[#EB9833] text-white px-5 py-2 rounded-full font-semibold shadow-sm"
                >
                  {curriculum}
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={lifeSkillsImg}
              alt="Child learning life skills and classroom basics"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Teachers Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={teachersImg}
              alt="50+ Years Combined Expertise - Our Teaching Staff"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Teachers Section */}
          <div>
            <h2 className="mb-6">
              Certified Teachers Shape Your Child's Development
            </h2>
            <p className="text-[#6B6A64] mb-8">
              All teachers have a Child Development Associate® Certification (CDA) and anywhere from 5 to 16 years of tenure. These experienced and dedicated teachers help with sleep at the baby stage, ensure proper toddler nutrition, and YES, they do toilet-training too!
            </p>
            <p className="text-sm text-[#EB9833] font-bold">
              50+ Yrs Combined Expertise Shape Your Child's Learning
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#EDE3D9] rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[#EB9833]">
                    <stat.icon className="w-6 h-6 text-[#EB9833]" />
                  </div>
                  <div className="font-bold text-[#000000] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#6B6A64]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}