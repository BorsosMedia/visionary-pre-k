import {
  Bus,
  Gamepad2,
  BookOpen,
  Palette,
  Users,
  Clock,
  Home,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CrayonClub() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Before & After School Care That Works For Your
              Family
            </h1>
            <p className="text-xl mb-8">
              A Safe, Fun, & Enriching Program For School-Age
              Children
            </p>
            <div className="inline-block bg-[#EB9833] text-white px-8 py-4 rounded-full">
              <h2 className="text-2xl">
                Crayon Club | 5-10 Years | Before & After School
                | Serving Houston, TX
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Convenient Care When Your Family Needs It Most
            </h2>
            <p className="text-lg max-w-4xl mx-auto">
              The Crayon Club provides reliable before and after
              school care for elementary students. We offer
              homework help, enrichment activities, healthy
              snacks, and a safe environment where kids can
              relax, play, and be themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Transportation</h3>
              <p>
                We pick up and drop off at local elementary
                schools, making mornings and afternoons
                stress-free for parents.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Homework Help</h3>
              <p>
                Dedicated time and support for completing
                assignments in a quiet, focused environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Fun Activities</h3>
              <p>
                Games, sports, arts & crafts, and free play to
                help kids unwind and have fun after school.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Social Time</h3>
              <p>
                Opportunities to build friendships and social
                skills with peers in a supervised setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Flexible Hours To Fit Your Schedule
              </h2>
              <p className="text-lg mb-8">
                We understand that every family's schedule is
                different. The Crayon Club offers morning and
                afternoon sessions to accommodate working
                parents' needs.
              </p>

              <div className="space-y-6">
                <div className="bg-[#EDE3D9] rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Clock className="w-8 h-8 text-[#EB9833]" />
                    <h3>Before School Care</h3>
                  </div>
                  <p className="text-[#6B6A64]">
                    7:00 AM - School Start Time
                    <br />
                    Breakfast, quiet activities, and morning
                    drop-off at school
                  </p>
                </div>

                <div className="bg-[#EDE3D9] rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Home className="w-8 h-8 text-[#EB9833]" />
                    <h3>After School Care</h3>
                  </div>
                  <p className="text-[#6B6A64]">
                    School Dismissal - 5:45 PM
                    <br />
                    Snack, homework time, activities, and
                    supervised play
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/Your-Child-Gains-Life-Skills-And-Classroom-Basics-Now-1.jpg"
                alt="After school activities"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Homework Support */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Children doing homework"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">
                Homework Help & Academic Support
              </h2>
              <p className="text-lg mb-6">
                Every afternoon includes designated homework
                time where children can complete assignments in
                a quiet, focused environment. Our staff is
                available to answer questions and provide
                support.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="mb-4 text-[#EB9833]">
                  What We Provide:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Quiet study space with minimal
                      distractions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Staff support for homework questions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Access to books and learning materials
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Communication with parents about homework
                      completion
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Enrichment Activities Kids Love
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              After homework time, children enjoy a variety of
              structured activities and free play. We rotate
              activities weekly to keep things fresh and
              exciting!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <Palette className="w-12 h-12 text-[#EB9833] mx-auto mb-4" />
              <h3 className="mb-3">Arts & Crafts</h3>
              <p className="text-[#6B6A64]">
                Creative projects, painting, drawing, and
                seasonal crafts
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-[#EB9833] mx-auto mb-4" />
              <h3 className="mb-3">STEM Activities</h3>
              <p className="text-[#6B6A64]">
                Science experiments, building challenges, and
                coding games
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <Gamepad2 className="w-12 h-12 text-[#EB9833] mx-auto mb-4" />
              <h3 className="mb-3">Games & Sports</h3>
              <p className="text-[#6B6A64]">
                Board games, outdoor play, sports, and team
                activities
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <BookOpen className="w-12 h-12 text-[#EB9833] mx-auto mb-4" />
              <h3 className="mb-3">Reading Time</h3>
              <p className="text-[#6B6A64]">
                Independent reading, book clubs, and
                storytelling
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-[#EB9833] mx-auto mb-4" />
              <h3 className="mb-3">Free Play</h3>
              <p className="text-[#6B6A64]">
                Time to relax, socialize, and play with friends
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-[#EB9833] mx-auto mb-4" />
              <h3 className="mb-3">Special Events</h3>
              <p className="text-[#6B6A64]">
                Theme days, celebrations, and seasonal
                activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Day Off Care */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Full-Day Care On School Holidays & Teacher
              Workdays
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              When school is closed but you still need to work,
              the Crayon Club has you covered! We offer full-day
              care on most school holidays and teacher workdays
              with special activities and field trips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-[#EB9833]">
                Holiday Camp Days
              </h3>
              <p className="mb-4">
                Full-day care with themed activities, special
                projects, and extra fun when school is out
              </p>
              <p className="text-sm text-white/80">
                Available on select school holidays (MLK Day,
                Presidents Day, Spring Break, etc.)
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-[#EB9833]">
                Teacher Workdays
              </h3>
              <p className="mb-4">
                Full-day programming when school is closed for
                professional development days
              </p>
              <p className="text-sm text-white/80">
                Keep the same reliable care you trust year-round
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}