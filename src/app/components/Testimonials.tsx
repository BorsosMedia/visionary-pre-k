import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "As a mother you want the best for your children. Choosing Cradles 2 Crayons over several other day cares in the area was one of the best decisions I made for my daughter's care and education. Cradles 2 Crayons have excellent, caring, and professional staff.",
      author: "Victoria Luna",
      source: "Google",
      rating: 5,
    },
    {
      text: "Best school ever! So happy to have found you guys! Couldn't have asked for a better school with a more caring staff! I absolutely love the family feel and know my babies are in good hands!",
      author: "Anna Giannakopoulos",
      source: "Google",
      rating: 5,
    },
    {
      text: "My daughter has been attending this daycare/school for a little over a month now, and it was the best decision we could had made as parents. Cradles 2 Crayons has helped my child in so many ways. I would recommend this school/daycare to any and everyone.",
      author: "Jasmine Foley",
      source: "Google",
      rating: 5,
    },
    {
      text: "C2C is the best place for my children to be when they are not in my care. The staff is very family oriented and takes the time to bond with each child, while building relationships and really getting to know the kids on a personal level.",
      author: "Tiffany Green",
      source: "Google",
      rating: 5,
    },
    {
      text: "I absolutely love C2C! After being home everyday, the transition was a little tough, but with much patience, knowledge and tender loving care from the teachers and staff, I've seen a huge improvement in her social and academic skills! I'm forever grateful!",
      author: "Neka Gibson",
      source: "Google",
      rating: 5,
    },
    {
      text: "We are very lucky to have had our children attend Cradles 2 Crayons. Nothing can be more comforting than to know our children are safe. I cannot thank the Cradles 2 Crayons family enough for the love and care they have provided.",
      author: "F. M. L.",
      source: "Google",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#F5EFE7] to-white py-20 overflow-hidden" id="testimonials">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#EB9833] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#EB9833] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EB9833] text-white px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 fill-white" />
            <span className="font-semibold">4.6 Star Rating</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl">
            Hear What Houston Parents Have To Say
          </h2>
          <p className="text-[#6B6A64] max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Read reviews from real families who have experienced
            the Visionary Pre K difference.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 border-2 border-[#D4C9BA] hover:border-[#EB9833] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#EB9833] rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#EB9833] text-[#EB9833]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#000000] mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t-2 border-[#EDE3D9]">
                  <div>
                    <div className="font-bold text-[#000000]">{testimonial.author}</div>
                    <div className="text-sm text-[#6B6A64]">Verified Parent</div>
                  </div>
                  <div className="bg-[#EB9833] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {testimonial.source}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-[#EB9833] hover:bg-[#d88829] text-white rounded-full flex items-center justify-center transition shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-[#EB9833] hover:bg-[#d88829] text-white rounded-full flex items-center justify-center transition shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}