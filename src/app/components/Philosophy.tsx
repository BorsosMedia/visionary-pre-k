import { GraduationCap, BookHeart, Sparkles } from 'lucide-react';
import musicImg from '../../imports/1.png';

export function Philosophy() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="mb-6">
              A Philosophy That Bridges Gaps Through Education
            </h2>
            <p className="text-lg text-[#6B6A64]">
              Loving, dedicated teachers strive to bridge the gap between early infancy and school-age children by
              providing a solid early learning foundation focused on play-based learning.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={musicImg}
              alt="Child learning music with Prelude 2 Music program"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center border border-[#D4C9BA] shadow-sm">
            <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4">Preparing For Kindergarten & Beyond</h3>
            <p className="text-[#6B6A64]">
              Combining fun academics and extracurricular activities prepares your child for success through
              Kindergarten and beyond.
            </p>
          </div>

          <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center border border-[#D4C9BA] shadow-sm">
            <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
              <BookHeart className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4">Play-Based Learning</h3>
            <p className="text-[#6B6A64]">
              Children learn best through play. Our approach encourages exploration, creativity, and natural
              curiosity while building essential skills.
            </p>
          </div>

          <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center border border-[#D4C9BA] shadow-sm">
            <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4">A Mission Dedicated To Bridging The Gap</h3>
            <p className="text-[#6B6A64]">
              We're committed to ensuring every child has access to high-quality early childhood education that
              sets them up for lifelong success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
