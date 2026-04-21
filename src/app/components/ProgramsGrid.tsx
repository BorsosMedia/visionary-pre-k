import { Telescope, GraduationCap, Sparkles, Sun } from 'lucide-react';

export function ProgramsGrid() {
  const programs = [
    {
      icon: Telescope,
      title: 'Explorer\'s Avenue',
      age: '2 years',
      description: 'Fostering curiosity, social skills, and early literacy in a structured environment.',
    },
    {
      icon: GraduationCap,
      title: 'Jr. Kinder Lane',
      age: '3 – 4 years',
      description: 'Pre-kindergarten readiness with focus on literacy, math concepts, and problem-solving.',
    },
    {
      icon: Sparkles,
      title: 'Crayon Club',
      age: '4 – 5 years',
      description: 'School-readiness program building confidence and academic skills for kindergarten success.',
    },
    {
      icon: Sun,
      title: 'Summer Camp',
      age: '5 – 12 years',
      description: 'Fun-filled summer adventures with STEM, arts, outdoor activities, and field trips.',
    },
  ];

  return (
    <section className="bg-[#EDE3D9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Programs For Every Stage Of Early Childhood
          </h2>
          <p className="text-[#6B6A64] max-w-3xl mx-auto">
            From infancy through school age, we provide age-appropriate curriculum and care 
            that grows with your child.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#D4C9BA] shadow-sm hover:shadow-lg hover:border-[#EB9833] transition-all"
            >
              <div className="w-14 h-14 bg-[#EB9833] rounded-2xl flex items-center justify-center mb-6">
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-2">{program.title}</h3>
              <div className="text-[#EB9833] font-semibold mb-4">{program.age}</div>
              <p className="text-[#6B6A64]">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}