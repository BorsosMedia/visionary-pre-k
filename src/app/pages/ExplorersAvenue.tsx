import {
  Telescope,
  Palette,
  Users,
  Brain,
  Leaf,
  Music,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router";
import lifeSkillsImg from '../../imports/Your-Child-Gains-Life-Skills-And-Classroom-Basics-Now-1-1024x764.jpg';
import nutritiousImg from '../../imports/Nutritious-Meals-With-Vegan-Options-At-No-Extra-Cost-1-1024x731.jpg';
import musicImg from '../../imports/1.png';

export function ExplorersAvenue() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Where Young Minds Explore & Discover
            </h1>
            <p className="text-xl mb-8">
              Encouraging Creativity, Problem-Solving, & School
              Readiness Skills
            </p>
            <div className="inline-block bg-[#EB9833] text-white px-8 py-4 rounded-full">
              <h2 className="text-2xl">
                Explorer's Avenue | 3 Years | Serving Houston,
                TX
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-K Preparation */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Building The Foundation For Pre-K Success
            </h2>
            <p className="text-lg max-w-4xl mx-auto">
              Three-year-olds are natural explorers! Our
              Explorer's Avenue program harnesses their
              curiosity to build critical thinking skills,
              creativity, and social-emotional development that
              prepares them for Pre-K and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Critical Thinking</h3>
              <p>
                Asking questions, solving problems, and making
                predictions through hands-on exploration.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Creative Expression</h3>
              <p>
                Exploring art, music, dramatic play, and
                creative movement to build confidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Social Skills</h3>
              <p>
                Learning cooperation, empathy, conflict
                resolution, and friendship building.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Early Literacy</h3>
              <p>
                Building pre-reading and pre-writing skills
                through stories, songs, and activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Research-Based Curriculum For Growing Minds
              </h2>
              <p className="text-lg mb-6">
                We use Frog Street© and Conscious Discipline©
                curricula to create engaging, age-appropriate
                learning experiences that address all
                developmental domains.
              </p>
              <div className="bg-[#EDE3D9] rounded-2xl p-6">
                <h3 className="mb-4 text-[#EB9833]">
                  Learning Areas:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      <strong>Math & Science:</strong> Counting,
                      patterns, shapes, sorting, and simple
                      experiments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      <strong>Literacy:</strong> Letter
                      recognition, phonics, story comprehension,
                      and writing readiness
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      <strong>Social Studies:</strong> Community
                      helpers, cultures, families, and the world
                      around us
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      <strong>Arts:</strong> Painting, drawing,
                      music, dance, and dramatic play
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={lifeSkillsImg}
                alt="Children gaining life skills and classroom basics"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Learning */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Hands-On Learning Centers Spark Discovery
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our classroom features intentionally designed
              learning centers where children can explore
              interests, practice skills, and learn through
              play.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Science & Discovery
              </h3>
              <p>
                Magnifying glasses, nature items, simple
                experiments, and exploration tools that
                encourage scientific thinking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Dramatic Play
              </h3>
              <p>
                Costumes, props, and themed play areas (kitchen,
                doctor's office, store) that build imagination
                and social skills.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Art Studio
              </h3>
              <p>
                Open-ended art materials that promote
                creativity, fine motor development, and
                self-expression.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Block Building
              </h3>
              <p>
                Blocks, building toys, and construction
                materials that develop spatial reasoning and
                engineering skills.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Reading Nook
              </h3>
              <p>
                Cozy book corner with diverse literature that
                inspires a love of reading and storytelling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Sensory Table
              </h3>
              <p>
                Sand, water, and various textures that provide
                calming sensory experiences and hands-on
                exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Learning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src={nutritiousImg}
                alt="Children enjoying outdoor activities"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">
                Daily Outdoor Play For Healthy Development
              </h2>
              <p className="text-lg mb-6">
                Outdoor play is essential for three-year-olds!
                Children build gross motor skills, burn energy,
                connect with nature, and practice social skills
                on our safe, age-appropriate playground.
              </p>
              <div className="flex items-start gap-4 bg-[#EDE3D9] rounded-2xl p-6">
                <Leaf className="w-12 h-12 text-[#EB9833] flex-shrink-0" />
                <div>
                  <h3 className="mb-2">Nature Exploration</h3>
                  <p>
                    Children observe seasons, collect natural
                    items, and learn about the environment
                    through outdoor experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social-Emotional Learning */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-white">
              Social-Emotional Learning Through Conscious
              Discipline©
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We use Conscious Discipline© to teach children
              how to manage emotions, solve conflicts
              peacefully, and build positive
              relationships—essential skills for school and
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-[#EB9833]">
                Self-Regulation
              </h3>
              <p>
                Learning to calm down, manage big feelings, and
                make good choices
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-[#EB9833]">Empathy</h3>
              <p>
                Understanding others' feelings and showing
                kindness and compassion
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-[#EB9833]">
                Problem-Solving
              </h3>
              <p>
                Using words to resolve conflicts and work
                together cooperatively
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Music & Movement */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Music & Movement Enrichment
              </h2>
              <p className="text-lg mb-6">
                Through Prelude 2 Music, children experience the
                joy of music while developing rhythm,
                coordination, and creative expression. Music
                activities enhance brain development and support
                early literacy skills.
              </p>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg">
                <Music className="w-12 h-12 text-[#EB9833]" />
                <div>
                  <p className="font-bold mb-2">
                    Daily Music Activities
                  </p>
                  <p className="text-sm text-[#6B6A64]">
                    Songs, instruments, dancing, and rhythmic
                    movement
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={musicImg}
                alt="Child learning music with Prelude 2 Music program"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Explore Explorer's Avenue!</h2>
          <p className="text-xl mb-8">
            See how we inspire young learners to discover their
            world
          </p>
          <Link
            to="/schedule-tour"
            className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black/90 transition inline-block"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </div>
  );
}