import {
  GraduationCap,
  BookOpen,
  Calculator,
  Globe,
  Pencil,
  Star,
  Users,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function JrKinderLane() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Kindergarten-Ready Superstars!
            </h1>
            <p className="text-xl mb-8">
              Comprehensive Pre-K Program That Ensures Your
              Child Is 100% Ready For Elementary School
            </p>
            <div className="inline-block bg-[#EB9833] text-white px-8 py-4 rounded-full">
              <h2 className="text-2xl">
                Jr. Kinder Lane | 4-5 Years | Serving Houston,
                TX
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Kindergarten Readiness */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Texas School-Readyâ„¢ Certification Guarantees
              Success
            </h2>
            <p className="text-lg max-w-4xl mx-auto">
              Our Jr. Kinder program is certified by Texas
              School-Readyâ„¢, meaning your child will enter
              Kindergarten with all the academic, social, and
              emotional skills needed to thrive. This is more
              than Pre-Kâ€”it's a proven pathway to school
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Reading Readiness</h3>
              <p>
                Letter recognition, phonics, sight words, and
                comprehension skills that prepare children to
                read.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Math Foundations</h3>
              <p>
                Counting to 100, number recognition, simple
                addition/subtraction, patterns, and shapes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Pencil className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Writing Skills</h3>
              <p>
                Letter formation, name writing, and beginning
                sentence writing with proper pencil grip.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Social Readiness</h3>
              <p>
                Following directions, working independently,
                cooperating with peers, and classroom routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              A Comprehensive Curriculum That Covers It All
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We integrate Frog StreetÂ©, Conscious
              DisciplineÂ©, and Footsteps2BrillianceÂ® to create
              a rich, engaging learning environment that
              addresses every area of development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Literacy */}
            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#EB9833] w-14 h-14 rounded-full flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3>Literacy & Language Arts</h3>
              </div>
              <ul className="space-y-2 text-[#6B6A64]">
                <li>â€¢ Phonemic awareness and letter sounds</li>
                <li>â€¢ Reading simple books and sight words</li>
                <li>â€¢ Story comprehension and retelling</li>
                <li>
                  â€¢ Vocabulary expansion through rich texts
                </li>
                <li>â€¢ Beginning writing and journaling</li>
              </ul>
            </div>

            {/* Math */}
            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#EB9833] w-14 h-14 rounded-full flex items-center justify-center">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <h3>Mathematics</h3>
              </div>
              <ul className="space-y-2 text-[#6B6A64]">
                <li>
                  â€¢ Number recognition and counting to 100
                </li>
                <li>â€¢ Addition and subtraction concepts</li>
                <li>â€¢ Patterns, sorting, and graphing</li>
                <li>â€¢ Measurement and comparison</li>
                <li>â€¢ Geometry and spatial reasoning</li>
              </ul>
            </div>

            {/* Science */}
            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#EB9833] w-14 h-14 rounded-full flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3>Science Exploration</h3>
              </div>
              <ul className="space-y-2 text-[#6B6A64]">
                <li>â€¢ Hands-on experiments and observations</li>
                <li>
                  â€¢ Life science (plants, animals, habitats)
                </li>
                <li>
                  â€¢ Physical science (magnets, weather, matter)
                </li>
                <li>
                  â€¢ Earth science (seasons, recycling, nature)
                </li>
                <li>â€¢ Scientific method and inquiry skills</li>
              </ul>
            </div>

            {/* Social Studies */}
            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#EB9833] w-14 h-14 rounded-full flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3>Social Studies</h3>
              </div>
              <ul className="space-y-2 text-[#6B6A64]">
                <li>â€¢ Community helpers and careers</li>
                <li>â€¢ Maps, globes, and geography basics</li>
                <li>â€¢ Cultural diversity and celebrations</li>
                <li>â€¢ Citizenship and responsibility</li>
                <li>â€¢ History and time concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footsteps2Brilliance */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Footsteps2BrillianceÂ® Technology-Enhanced
                Learning
              </h2>
              <p className="text-lg mb-6">
                This award-winning bilingual literacy program
                uses engaging apps and games to build reading
                skills. Children can continue learning at home,
                creating a seamless bridge between school and
                family.
              </p>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-[#EB9833]">
                  Program Benefits:
                </h3>
                <p className="mb-4">
                  Interactive games, e-books, songs, and videos
                  that make learning to read fun and engaging
                </p>
                <p className="text-sm text-white/80">
                  Available in English and Spanish for dual
                  language learners
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Child using tablet for learning"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social-Emotional Development */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Children playing together"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">
                Social-Emotional Skills For Lifelong Success
              </h2>
              <p className="text-lg mb-6">
                Through Conscious DisciplineÂ©, children learn
                to manage emotions, resolve conflicts, show
                empathy, and build healthy relationshipsâ€”skills
                that are just as important as academics.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="mb-4 text-[#EB9833]">
                  Essential Life Skills:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>
                      Self-regulation and impulse control
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>
                      Conflict resolution and problem-solving
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>Empathy and perspective-taking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">âœ“</span>
                    <span>Confidence and perseverance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              A Structured Day That Prepares For Elementary
              School
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our daily schedule mirrors a Kindergarten
              classroom, helping children adapt to the routines
              and expectations they'll encounter in elementary
              school.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#EDE3D9] rounded-2xl p-8">
            <h3 className="mb-6 text-center text-[#EB9833]">
              Sample Daily Schedule
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <span className="font-bold">
                  Morning Circle
                </span>
                <span className="text-[#6B6A64]">
                  Calendar, weather, letter/number of the day
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <span className="font-bold">
                  Literacy Block
                </span>
                <span className="text-[#6B6A64]">
                  Phonics, reading, and writing activities
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <span className="font-bold">Math Block</span>
                <span className="text-[#6B6A64]">
                  Hands-on math lessons and practice
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <span className="font-bold">Outdoor Play</span>
                <span className="text-[#6B6A64]">
                  Gross motor skills and free play
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <span className="font-bold">
                  Science/Social Studies
                </span>
                <span className="text-[#6B6A64]">
                  Theme-based exploration and projects
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <span className="font-bold">
                  Centers & Enrichments
                </span>
                <span className="text-[#6B6A64]">
                  Art, music, dramatic play, and choice time
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Ready */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h2 className="mb-6">
              Graduating Kindergarten-Ready!
            </h2>
            <p className="text-xl mb-8">
              Our Pre-K graduates leave with the academic
              knowledge, social skills, and confidence to excel
              in Kindergarten. We celebrate their achievements
              with a special graduation ceremony that honors
              their hard work and prepares them for the exciting
              journey ahead.
            </p>
            <a
              href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black/90 transition inline-block"
            >
              Schedule a Tour & See The Difference
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
