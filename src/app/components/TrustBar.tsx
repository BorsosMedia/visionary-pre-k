import { Star, Award, GraduationCap, Calendar, Bell } from 'lucide-react';

export function TrustBar() {
  const items = [
    { icon: Star, text: '4-Star Rated' },
    { icon: Award, text: 'Center of Excellence' },
    { icon: GraduationCap, text: 'Texas School Ready™' },
    { icon: Calendar, text: '20+ Years' },
    { icon: Bell, text: 'Enrolling Now' },
  ];

  const curriculumItems = [
    'Social & Emotional Development',
    'Cognitive Development',
    'Language & Literacy Development',
    'Physical Development',
    'Mathematics',
    'Science',
    'Social Studies',
    'Technology',
  ];

  return (
    <>
 

      {/* Infinite Curriculum Slider */}
      <section className="bg-[#EB9833] text-white py-4 overflow-hidden border-t border-white/20">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
          `}
        </style>
        <div className="flex whitespace-nowrap animate-scroll">
          {/* Duplicate the items twice to create seamless loop */}
          {[...curriculumItems, ...curriculumItems, ...curriculumItems].map((item, index) => (
            <div key={index} className="inline-flex items-center mx-4">
              <span className="font-semibold text-lg">{item}</span>
              <span className="mx-4 text-2xl">〰️</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}