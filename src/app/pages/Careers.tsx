import {
  Users,
  DollarSign,
  GraduationCap,
  Heart,
  Calendar,
  Briefcase,
  TrendingUp,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Join A Center Of Excellence & An Amazing Team
            </h1>
            <p className="text-xl">
              Be Part Of A Supportive Environment That Goes The
              Extra Mile For You
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Happy teacher with children"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">
                Teachers Have Mentors That Lead Them To Success
              </h2>
              <p className="text-lg mb-8">
                Join a team of educators who want to see you
                win! All teachers have supportive mentors who
                guide them, show them the ropes, and teach them
                everything they need to excel.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="mb-4 text-[#EB9833]">
                  What You'll Experience:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>
                      One-on-one mentorship from experienced
                      educators
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>
                      Ongoing training and professional
                      development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>
                      Support from leadership every step of the
                      way
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>
                      Resources and tools to help you succeed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Family */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Join A Supportive & Caring Work Family
              </h2>
              <p className="text-lg mb-6">
                Be part of a family that laughs, teaches, and
                grows together with endless support you can
                always count on. A team-teaching environment
                encourages sharing and support; your input,
                ideas, and contributions are priceless!
              </p>
              <div className="bg-[#EDE3D9] rounded-2xl p-6">
                <h3 className="mb-4">
                  The Perfect Environment For Passionate Leaders
                </h3>
                <p>
                  If you enjoy working with children and molding
                  young minds in the 21st-century way of
                  learning, this is the place for you!
                  Passionate and energetic teachers are the
                  perfect fit, and training is a joy when
                  everyone has the same vision.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Team working together"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Comprehensive Benefits Package
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We value our team and show it through competitive
              compensation and benefits that support your
              wellbeing and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <DollarSign className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Competitive Pay</h3>
              <p className="mb-4">
                Get paid for the experience, value, education,
                and commitment to childcare you add to the team
                with competitive pay rates.
              </p>
              <p className="text-sm text-[#6B6A64]">
                All employees receive a Chase checking & savings
                account for easy direct deposits.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <GraduationCap className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Career Development</h3>
              <p className="mb-4">
                Paid professional development and continued
                training, learning, and support give you the
                tools to climb the ladder of career success.
              </p>
              <p className="text-sm text-[#6B6A64]">
                Rise to the top of your game by staying
                up-to-date on the latest research on early
                childhood development.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <Heart className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Full Health Benefits</h3>
              <p className="mb-4">
                Take advantage of a comprehensive health plan
                that ensures you stay at your best.
              </p>
              <p className="text-sm text-[#6B6A64]">
                Customize your health package to include
                medical, dental, vision, and even life
                insurance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <Calendar className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Paid Time Off</h3>
              <p className="mb-4">
                Paid time off and paid holidays allow you to
                recharge and catch up on quality time with loved
                ones.
              </p>
              <p className="text-sm text-[#6B6A64]">
                Know that you have what you need even when
                you're not present.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <Briefcase className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Flexible Schedule</h3>
              <p className="mb-4">
                It's easy to balance the great work you do with
                children and all the things you need to take
                care of in your personal life.
              </p>
              <p className="text-sm text-[#6B6A64]">
                Flexibility is always an option with your choice
                of part-time or full-time positions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <Star className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Celebration Culture</h3>
              <p className="mb-4">
                You're Important Tooâ€” So Let's Celebrate You!
              </p>
              <p className="text-sm text-[#6B6A64]">
                Enjoy the perfect balance of work and fun by
                celebrating exciting events like birthdays and
                anniversaries with your work family!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">
              Required Training, Screening, & Certifications
              Include:
            </h2>
            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">
                      âœ“
                    </span>
                  </div>
                  <span>Annual Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">
                      âœ“
                    </span>
                  </div>
                  <span>Orientation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">
                      âœ“
                    </span>
                  </div>
                  <span>CPR & First Aid</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">
                      âœ“
                    </span>
                  </div>
                  <span>Shaken Baby Syndrome</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">
                      âœ“
                    </span>
                  </div>
                  <span>Background Check</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">
                      âœ“
                    </span>
                  </div>
                  <span>Fingerprinting Check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#EB9833] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="mb-6">We're Hiring!</h2>
            <p className="text-xl mb-8">
              Join our team of dedicated early childhood
              educators and start making a difference today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="mb-4">
                Teacher - Childcare/Preschool
              </h3>
              <p className="mb-4">
                (w/ Training, Perks, Benefits)
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>â€¢ Lead classroom instruction</li>
                <li>â€¢ Implement curriculum</li>
                <li>â€¢ Build relationships with families</li>
                <li>â€¢ CDA or equivalent preferred</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="mb-4">
                Assistant Teacher - Childcare/Preschool
              </h3>
              <p className="mb-4">
                (w/ Training, Perks, Benefits)
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>â€¢ Support lead teacher</li>
                <li>â€¢ Assist with daily activities</li>
                <li>â€¢ Supervise children</li>
                <li>â€¢ Experience with children preferred</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
