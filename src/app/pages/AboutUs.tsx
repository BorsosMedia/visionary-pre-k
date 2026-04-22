import { Heart, Users, Target, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import journeyImg from '../../imports/additions/A-Journey-Rooted-In-Personal-Experience.jpg';
import adequateRatioImg from '../../imports/additions/An-Adequate-Ratio-Of-Attendance-Ensures-Safety.jpg';
import adequateRatioImgAlt from '../../imports/additions/An-Adequate-Ratio-Of-Attendance-Ensures-Safety (1).jpg';

export function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">About Visionary Pre K</h1>
            <p className="text-xl mb-8">
              A Loving Director With 22 Years Of Experience
            </p>
            <p className="text-lg text-white/90">
              Director Deon Davis began her journey in 2000 when searching for child care for her 2-year-old daughter. After a heartbreaking experience, she opened a place that provides parents with a safe, family-run atmosphere where children love to learn every day.
            </p>
          </div>
        </div>
      </section>

      {/* Director Story */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={journeyImg}
                alt="Director journey and caring classroom environment"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ICARE Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">Core Values That Promise The Very Best</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our ICARE values guide everything we do, from how we interact with children to how we partner with families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">I</span>
              </div>
              <h3 className="mb-3">Integrity</h3>
              <p className="text-sm text-[#6B6A64]">Being honest & ethical in all that we do</p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">C</span>
              </div>
              <h3 className="mb-3">Compassionate</h3>
              <p className="text-sm text-[#6B6A64]">Embracing & nurturing the whole child</p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">A</span>
              </div>
              <h3 className="mb-3">Accountability</h3>
              <p className="text-sm text-[#6B6A64]">Holding ourselves accountable for every action</p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">R</span>
              </div>
              <h3 className="mb-3">Respect</h3>
              <p className="text-sm text-[#6B6A64]">Treating every team member, parent, & child with dignity & respect</p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">E</span>
              </div>
              <h3 className="mb-3">Excellence</h3>
              <p className="text-sm text-[#6B6A64]">Striving to be the best at what we do & a model for other schools to emulate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & ratios (additions asset) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4C9BA]">
              <ImageWithFallback
                src={adequateRatioImg}
                alt="Adequate staff ratios and attentive care in the classroom"
                className="w-full h-[380px] lg:h-[420px] object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4">Safety Starts With The Right Ratios</h2>
              <p className="text-lg text-[#6B6A64]">
                Maintaining an adequate ratio of attendance helps every teacher stay present, responsive, and focused on
                your child—so learning stays joyful and supervision stays consistent all day long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">A Mission Dedicated To Bridging The Gap</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Loving, dedicated teachers strive to bridge the gap between early infancy and school-age children by providing a solid early learning foundation focused on play-based learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4C9BA] order-2 lg:order-1">
              <ImageWithFallback
                src={adequateRatioImgAlt}
                alt="Teachers engaged with children in a safe, supervised setting"
                className="w-full h-[320px] lg:h-full min-h-[280px] object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-lg border border-[#D4C9BA] order-1 lg:order-2">
              <h3 className="mb-6 text-center text-[#EB9833]">A Philosophy That Bridges Gaps Through Education</h3>
              <p className="text-lg text-center mb-6">
                Combining fun academics and extracurricular activities prepares your child for success through Kindergarten and beyond.
              </p>
              <p className="text-center text-[#6B6A64]">
                We're committed to ensuring every child has access to high-quality early childhood education that sets them up for lifelong success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Globe className="w-16 h-16 text-[#EB9833] mx-auto mb-6" />
            <h2 className="mb-6">Learning Through Community Extends Your Child's Education</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Your child participates in field trips around the community to help broaden their skills and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <h3 className="mb-4 text-[#EB9833]">Houston Zoo</h3>
              <p>
                Children enjoy learning about animals and nature through hands-on experiences at the Houston Zoo, fostering curiosity and appreciation for wildlife.
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <h3 className="mb-4 text-[#EB9833]">Children's Museum</h3>
              <p>
                The Children's Museum provides valuable science, history, and math lessons through interactive exhibits that make learning fun and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Ready To Join The Visionary Pre K Family?</h2>
          <p className="text-xl mb-8">
            Experience the difference that quality early childhood education can make in your child's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-tour"
              className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black/90 transition inline-block text-center"
            >
              Schedule a Tour
            </Link>
            <Link
              to="/tuition-support"
              className="bg-white text-[#EB9833] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition inline-block text-center"
            >
              Get Pricing Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

