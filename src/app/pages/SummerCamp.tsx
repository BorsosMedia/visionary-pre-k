import {
  Sun,
  Palette,
  Droplets,
  Mountain,
  Music,
  Microscope,
  Camera,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SummerCamp() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Summer Adventures Await!
            </h1>
            <p className="text-xl mb-8">
              Weekly Themes, Field Trips, & Hands-On Fun All
              Summer Long
            </p>
            <div className="inline-block bg-[#EB9833] text-white px-8 py-4 rounded-full">
              <h2 className="text-2xl">
                Summer Camp | 5-10 Years | Serving Houston, TX
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Overview */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              An Unforgettable Summer Experience!
            </h2>
            <p className="text-lg max-w-4xl mx-auto">
              Our Summer Camp is packed with exciting weekly
              themes, field trips, special guests, hands-on
              activities, and outdoor fun. Each week brings new
              adventures that keep kids engaged, active, and
              learning throughout the summer break.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Weekly Field Trips</h3>
              <p className="text-sm">
                Explore Houston's best attractions including
                museums, parks, and entertainment venues
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Creative Projects</h3>
              <p className="text-sm">
                Arts, crafts, and hands-on activities that spark
                creativity and imagination
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Water Fun</h3>
              <p className="text-sm">
                Splash days, water games, and pool activities to
                beat the Texas heat
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Outdoor Adventures</h3>
              <p className="text-sm">
                Nature exploration, outdoor games, and active
                play in our shaded playground
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Themes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">Exciting Weekly Themes</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Every week features a new theme with related
              activities, crafts, games, and field trips. Kids
              stay engaged and excited about what's coming next!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸŒŠ Week 1: Ocean Explorers
              </h3>
              <p className="mb-4">
                Dive into marine biology, ocean crafts, and
                aquatic adventures
              </p>
              <p className="text-sm font-bold">
                Field Trip: Houston Aquarium
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸš€ Week 2: Space Cadets
              </h3>
              <p className="mb-4">
                Explore the universe with astronomy, rocket
                building, and space science
              </p>
              <p className="text-sm font-bold">
                Field Trip: Space Center Houston
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸ¦ Week 3: Safari Adventure
              </h3>
              <p className="mb-4">
                Learn about animals, habitats, and wildlife
                conservation
              </p>
              <p className="text-sm font-bold">
                Field Trip: Houston Zoo
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸŽ¨ Week 4: Creative Arts
              </h3>
              <p className="mb-4">
                Painting, sculpture, music, dance, and
                theatrical performance
              </p>
              <p className="text-sm font-bold">
                Field Trip: Children's Museum
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸ”¬ Week 5: Mad Scientists
              </h3>
              <p className="mb-4">
                Exciting experiments, chemistry, physics, and
                STEM challenges
              </p>
              <p className="text-sm font-bold">
                Field Trip: Houston Museum of Natural Science
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸ•ï¸ Week 6: Outdoor Explorers
              </h3>
              <p className="mb-4">
                Nature hikes, camping skills, and environmental
                education
              </p>
              <p className="text-sm font-bold">
                Field Trip: Nature Center
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸŽ­ Week 7: Lights, Camera, Action!
              </h3>
              <p className="mb-4">
                Theater games, movie making, storytelling, and
                drama
              </p>
              <p className="text-sm font-bold">
                Field Trip: Theater Performance
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸ† Week 8: Sports & Games
              </h3>
              <p className="mb-4">
                Team sports, Olympic games, and athletic
                competitions
              </p>
              <p className="text-sm font-bold">
                Field Trip: Sports Complex
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8">
              <h3 className="mb-4 text-[#EB9833]">
                ðŸŒ® Week 9: Around The World
              </h3>
              <p className="mb-4">
                Explore cultures, foods, music, and traditions
                from different countries
              </p>
              <p className="text-sm font-bold">
                Field Trip: Cultural Festival
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              A Typical Day At Summer Camp
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Each day is filled with a balance of structured
              activities, free play, outdoor time, and
              enrichmentâ€”ensuring kids stay engaged and have a
              blast!
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  7:00 - 9:00 AM
                </div>
                <p>Arrival, breakfast, and free play</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  9:00 - 10:00 AM
                </div>
                <p>
                  Morning circle, theme introduction, and group
                  activities
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  10:00 - 12:00 PM
                </div>
                <p>Field trip or special activity/project</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  12:00 - 1:00 PM
                </div>
                <p>Lunch and quiet time</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  1:00 - 3:00 PM
                </div>
                <p>
                  Hands-on projects, arts & crafts, or STEM
                  activities
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  3:00 - 4:00 PM
                </div>
                <p>Outdoor play, water fun, or sports</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EB9833] px-4 py-2 rounded-full text-sm font-bold min-w-[120px] text-center">
                  4:00 - 5:45 PM
                </div>
                <p>
                  Snack, free choice activities, and pick-up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              What Makes Our Summer Camp Special
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <Camera className="w-10 h-10 text-[#EB9833] flex-shrink-0" />
                <div>
                  <h3 className="mb-3">Daily Photo Updates</h3>
                  <p className="text-[#6B6A64]">
                    See your child's summer adventures through
                    daily photos and videos shared via the
                    PlaygroundÂ© app. Never miss a special
                    moment!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <Music className="w-10 h-10 text-[#EB9833] flex-shrink-0" />
                <div>
                  <h3 className="mb-3">
                    Special Guests & Performers
                  </h3>
                  <p className="text-[#6B6A64]">
                    Throughout the summer, we host special
                    guests including musicians, magicians,
                    animal educators, and science demonstrators.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <Droplets className="w-10 h-10 text-[#EB9833] flex-shrink-0" />
                <div>
                  <h3 className="mb-3">Water Play Days</h3>
                  <p className="text-[#6B6A64]">
                    Beat the heat with weekly water play
                    activities including sprinklers, water
                    games, and splash zones (swimwear required).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <Heart className="w-10 h-10 text-[#EB9833] flex-shrink-0" />
                <div>
                  <h3 className="mb-3">Small Group Sizes</h3>
                  <p className="text-[#6B6A64]">
                    Low camper-to-counselor ratios ensure every
                    child receives individual attention and
                    stays safe during all activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Trip Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Field Trip Adventures Every Week!
              </h2>
              <p className="text-lg mb-6">
                One of the highlights of our summer camp is the
                weekly field trips to Houston's best family
                destinations. Children explore museums, nature
                centers, entertainment venues, and more!
              </p>
              <div className="bg-[#EDE3D9] rounded-2xl p-6">
                <h3 className="mb-4 text-[#EB9833]">
                  Popular Destinations:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">â€¢</span>
                    <span>Space Center Houston</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">â€¢</span>
                    <span>Houston Zoo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">â€¢</span>
                    <span>Children's Museum of Houston</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">â€¢</span>
                    <span>
                      Houston Museum of Natural Science
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">â€¢</span>
                    <span>Downtown Aquarium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">â€¢</span>
                    <span>Nature Discovery Center</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Children on field trip"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sun className="w-20 h-20 mx-auto mb-6" />
          <h2 className="mb-6">
            Summer Camp Registration Now Open!
          </h2>
          <p className="text-xl mb-8">
            Spaces fill up quickly! Register today to secure
            your child's spot for an amazing summer of fun,
            learning, and adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black/90 transition">
              Register Now
            </button>
            <button className="bg-white text-[#EB9833] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition">
              View Full Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
