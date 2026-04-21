import { Heart, Users, Target } from 'lucide-react';
import familyOwnedImg from '../../imports/A-Family-Owned-Environment-That-Feels-Just-Like-Home.jpg';

export function DirectorStory() {
  return (
    <section className="bg-[#EDE3D9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EB9833] text-white px-5 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">A Journey Rooted In Personal Experience</span>
            </div>
            <h2 className="mb-6">
              A Loving Director With 22 Years Of Experience
            </h2>
            <p className="text-[#6B6A64] mb-6">
              Director Deon Davis began her journey in 2000 when searching for child care for her 2-year-old daughter.
              After a heartbreaking experience, she opened a place that provides parents with a safe, family-run
              atmosphere where children love to learn every day.
            </p>
            <p className="text-[#6B6A64] mb-8">
              Director Deon Davis has credentials in Early Childhood Education, and her passion for nurturing young
              minds has created a warm, family-centered environment where every child thrives.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#D4C9BA] shadow-sm">
                <div className="w-12 h-12 bg-[#EB9833] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Family-Centered</h3>
                <p className="text-sm text-[#6B6A64]">Every family is treated like our own</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#D4C9BA] shadow-sm">
                <div className="w-12 h-12 bg-[#EB9833] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Mission-Driven</h3>
                <p className="text-sm text-[#6B6A64]">Bridging gaps through quality education</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={familyOwnedImg}
              alt="Family-owned environment at Visionary Pre K"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
