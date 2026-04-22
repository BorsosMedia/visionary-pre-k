import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { MessageCircle, HelpCircle, Phone } from 'lucide-react';

export function FAQAccordion() {
  const faqs = [
    {
      question: "What are your hours of operation?",
      answer: "We are open from 7:00 am to 5:45 pm Monday-Friday."
    },
    {
      question: "What is your dress code?",
      answer: "We are a uniformed school (for 2 years and older)."
    },
    {
      question: "Do you have an open-door policy?",
      answer: "Yes, you're welcome and encouraged to connect with us if, and anytime you need to."
    },
    {
      question: "How do you manage teacher-parent communication?",
      answer: "We are a paper-free school and are happy to receive parent emails and text messages. Each class has an IPad for Tadpoles© daily reports, pictures, videos, parent notes, and more. There is a constant two-way communication channel between you and your child's teacher, so you never miss a beat."
    },
    {
      question: "Do you use technology in the classroom?",
      answer: "Yes, when children are developmentally ready, they use age-appropriate technology, such as tablets. Digital literacy is one of the 21st century skills that help prepare your little student for school and life."
    },
    {
      question: "What are pick-ups and drop-offs like?",
      answer: 'We have a "Kiss and Drive" lane for easy drop-offs and pick-ups. You can also call ahead, and we\'ll safely bring your child out to your car!'
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#EDE3D9] via-[#F5EFE7] to-[#EDE3D9] py-20 overflow-hidden" id="faq">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#EB9833] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#EB9833] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#EB9833] text-white px-5 py-2 rounded-full mb-6 w-fit">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Got Questions?</span>
            </div>

            <h2 className="mb-6 text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B6A64] mb-8 text-lg">
              Have questions? We've got answers. If you don't see your question here, please don't hesitate to reach out to our team.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#D4C9BA] shadow-sm">
                <div className="w-12 h-12 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Call Us</p>
                  <a href="tel:713-520-6633" className="text-[#EB9833] hover:underline">713-520-6633</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#D4C9BA] shadow-sm">
                <div className="w-12 h-12 bg-[#EB9833] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Send a Message</p>
                  <a href="mailto:info@visionaryprek.com" className="text-[#EB9833] hover:underline">info@visionaryprek.com</a>
                </div>
              </div>
            </div>

            <a
              href="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZwLDfcYl0uxmGu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EB9833] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition inline-block shadow-lg w-fit"
            >
              Schedule a Tour
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-2 border-[#D4C9BA] px-6 hover:border-[#EB9833] hover:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#000000] hover:no-underline hover:text-[#EB9833] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B6A64] text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}