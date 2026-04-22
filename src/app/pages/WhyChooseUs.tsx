import {
  Award,
  Star,
  Users,
  Heart,
  CheckCircle,
  Baby,
  Clock,
  BookOpen,
  Sparkles,
  Utensils,
  Shield,
} from "lucide-react";
import { Link } from "react-router";
import empowerFamilyImg from '../../imports/Empower-Your-Family-Join-A-Certified-Center-Of-Excellence-1024x756.jpg';

export function WhyChooseUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Your Child's Loving & Nurturing
              Home-Away-From-Home
            </h1>
            <p className="text-xl">
              Where They Learn Everything They Need For
              Guaranteed Kindergarten Readiness
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                A Certified Center Of Excellence
              </h3>
              <p>
                Only schools that ensure Kindergarten readiness
                and academic excellence receive this
                certification.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                Stellar, Research-Based Curriculum
              </h3>
              <p>
                Research-based mixed curricula equip your child
                with lifelong skills for lasting school success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                An Exceptional 4-Star School
              </h3>
              <p>
                The only 4-star school in the entire zip code
                that offers your little one educational
                excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                Texas School Ready™ Teachers
              </h3>
              <p>
                Teachers have the tools & resources to define &
                address your child's strengths & weaknesses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Daily Outdoor Play</h3>
              <p>
                Playing outdoors expends energy, improves
                creativity, & builds motor skills & lasting
                friendships.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                Sparkling Clean Classrooms
              </h3>
              <p>
                Your child stays healthy with onsite
                housekeeping and routine deep cleaning of
                high-touch surfaces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                Fun & Engaging Enrichments
              </h3>
              <p>
                Enrichments like baby signing, music, & yoga
                boost development and keep your child engaged.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">
                Nutritious Meals Included
              </h3>
              <p>
                Your little one enjoys healthy & nutritious
                home-cooked breakfasts, lunches, & snacks every
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={empowerFamilyImg}
                alt="Child at Center of Excellence"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="mb-8 text-[#EB9833]">
                What Makes Us Different
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#EB9833] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      Texas School-Ready Certification™
                    </h3>
                    <p>
                      State-recognized excellence ensuring your
                      child gets the best academic foundation
                      possible.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#EB9833] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      4-Star Texas Rising Star Program
                    </h3>
                    <p>
                      Highest quality rating for early childhood
                      education in Texas, reflecting our
                      commitment to excellence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#EB9833] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      Experienced Teachers (5-16 Years Tenure)
                    </h3>
                    <p>
                      Our dedicated staff includes Child
                      Development Associates who truly care
                      about your child's growth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#EB9833] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      Family-Centered Approach
                    </h3>
                    <p>
                      We treat every family like our own,
                      building lasting relationships and
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Proven Curriculum</h3>
              <p>
                Conscious Discipline©️, Frog Street©️,
                Footsteps2Brilliance®️, and Prelude 2 Music
                create a comprehensive learning foundation.
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">All Ages Welcome</h3>
              <p>
                From 6 weeks old through Pre-K and Summer Camp,
                we support your child through every
                developmental stage.
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Convenient Hours</h3>
              <p>
                Open Monday - Friday, 7:00 AM - 5:45 PM to
                accommodate working families' schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">
            Experience The Visionary Pre K Difference
          </h2>
          <p className="text-xl mb-8">
            See for yourself why families choose us for their
            children's early education
          </p>
          <Link
            to="/schedule-tour"
            className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black/90 transition inline-block"
          >
            Schedule a Tour Today
          </Link>
        </div>
      </section>
    </div>
  );
}