import { Star } from "lucide-react";
import { Link } from "react-router";

export function ParentReviews() {
  const reviews = [
    {
      name: "Ja M.",
      time: "6 months ago",
      rating: 5,
      text: "My daughter loves this school so much! She wakes up every day excited to go. As a single parent, I couldn't have chosen a better school for my 4 year old. C2C truly makes you feel like family. This is her second year and we're having a ball in pre-K or should I say \"JR KINDER\"….. she's learning so much while also making wonderful friends. The teachers create such a caring, fun, and safe environment, and it really shows in how much she enjoys being there. We couldn't be happier with the experience!",
    },
    {
      name: "Kennedy S.",
      time: "6 months ago",
      rating: 5,
      text: "My baby has been attending C2C for about a month now and we love it! As a first time mom, sending my baby to daycare was a very scary thought but the updates every couple of hours + the staff's warm spirits have made it a smooth transition. My baby is loved, well-fed and happy while my husband and I are at work. The daycare is about mid-range as far as costs goes but there's no amount I wouldn't pay to have peace of mind that my baby is alright.",
    },
    {
      name: "JL I.",
      time: "6 months ago",
      rating: 5,
      text: "Finding a treasure that's as valuable as this daycare is hard to come by, I really appreciate every staff member working there. My daughter loves it there .. they're all nice and treats everyone like family and that's such blessing.",
    },
    {
      name: "Dominique R.",
      time: "6 months ago",
      rating: 5,
      text: "I have 3 children that have been going to C2C for over a year now. I absolutely love them! They are extremely family oriented and each employee is dedicated and polite. I have always been so picky when it comes to daycares and my anxiety is very bad when my children aren't around me.. but I can honestly say I feel good knowing that they are in the care of such amazing people 🩷",
    },
    {
      name: "Simone R.",
      time: "8 months ago",
      rating: 5,
      text: 'My son started going here when he was 9 months old and soon he will be switching to the pre-k 4 classroom! Our experience at C2C has been nothing short of extraordinary. As a first time parent, I was terrified to send my child to daycare after hearing countless "horror stories". However, enrolling my child in this facility is a decision I will never regret. The environment is loving, diverse, clean & up lifting. All of the staff are very hands on and attentive to the children and I never have to worry about my child\'s safety. I recommend this daycare to anyone and everyone!',
    },
    {
      name: "Candace C.",
      time: "8 months ago",
      rating: 5,
      text: "My daughter is 2.5 and has been here for a year. They have been extremely patient and nurturing, allowing her to develop and grow without pressure. They have a great curriculum and amazing staff. My son is in elementary school, but he loves the summer camp program. Lots of activities each week!",
    },
    {
      name: "Jasmine W.",
      time: "8 months ago",
      rating: 5,
      text: "This center has been amazing with my child from After school pick up and care to their amazing summer camp. Everything is thoroughly planned and perfectly executed. They don't just watch the child they pour into them in all areas and aspects of their life.The staff treat you like family.I highly recommend them.",
    },
    {
      name: "Courtney T.",
      time: "11 months ago",
      rating: 5,
      text: "C2C's summer camp is the highlight of our year. My daughter still attends, and my two elementary-aged sons beg to come back every summer—daily activities, swimming, and just enough learning that it never feels like school. The staff treat my kids like family, and we've tried other programs; nothing else matches the fun, care, and community here. We wouldn't send them anywhere else for summer.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">Parent Reviews</h1>
            <p className="text-xl mb-8">
              Hear What Houston Parents Have To Say About Their
              Experience
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#EB9833] text-[#EB9833]"
                  />
                ))}
              </div>
              <div className="border-l border-white/30 pl-4">
                <span className="text-3xl font-bold">4.6</span>
                <span className="text-sm ml-2">
                  (70 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-lg max-w-3xl mx-auto">
              Don't just take our word for it—hear from the
              families who trust us with their most precious
              treasure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#EB9833] text-[#EB9833]"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed flex-grow">
                  {review.text}
                </p>
                <div className="border-t border-[#D4C9BA] pt-4">
                  <p className="font-bold text-[#000000]">
                    {review.name}
                  </p>
                  <p className="text-sm text-[#6B6A64]">
                    {review.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=cradles+2+crayons+houston"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EB9833] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#d88829] transition"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">What Families Love Most</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="mb-3">Family-Like Atmosphere</h3>
              <p className="text-[#6B6A64]">
                "Visionary Pre K truly makes you feel like
                family" - mentioned in countless reviews
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="mb-3">Loving, Attentive Staff</h3>
              <p className="text-[#6B6A64]">
                "The staff treat your children like their own" -
                parents love our dedicated teachers
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="mb-3">Outstanding Curriculum</h3>
              <p className="text-[#6B6A64]">
                "Great curriculum and amazing staff" - education
                that makes a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Join These Happy Families!</h2>
          <p className="text-xl mb-8">
            Experience the care and education that parents are
            raving about
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