import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">Contact Us</h1>
            <p className="text-xl">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Call Us</h3>
              <a href="tel:832-662-8566" className="text-[#EB9833] hover:underline">
                (832) 662-8566
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Email Us</h3>
              <a href="mailto:info@visionaryprek.com" className="text-[#EB9833] hover:underline">
                info@visionaryprek.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Visit Us</h3>
              <p className="text-[#6B6A64] text-sm">
                2 Locations in Houston Area
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="w-16 h-16 bg-[#EB9833] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Hours</h3>
              <p className="text-[#6B6A64] text-sm">
                Mon-Fri: 7:00 AM - 5:45 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Placeholder for iframe */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">Send Us A Message</h2>
            <p className="text-[#6B6A64]">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-[#EDE3D9] rounded-2xl border border-[#D4C9BA] overflow-hidden h-[900px]">
            <iframe
              src="https://app.tryplayground.com/form/nnWMx9xDZerzCyUSMiX9/ejyFZZZwLDfcYl0uxmGu"
              title="Contact Form"
              style={{ width: "100%", border: "none", height: "100%" }}
              frameBorder="0"
              allowFullScreen
              tabIndex={-1}
            />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">Our Locations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <h3 className="mb-4 text-[#EB9833]">Visionary Pre K Academy</h3>
              <div className="space-y-3 text-[#6B6A64]">
                <p>7215 W Fuqua Bldg 7</p>
                <p>Missouri City, TX 77489</p>
                <p className="font-semibold text-[#000000] mt-4">Programs Offered:</p>
                <p>Two's, Pre K 3-4</p>
                <a
                  href="tel:832-662-8566"
                  className="inline-block mt-4 bg-[#EB9833] text-white px-6 py-3 rounded-full font-bold hover:bg-[#d88829] transition"
                >
                  Call Location
                </a>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <h3 className="mb-4 text-[#EB9833]">Visionary Pre K at Regency Lofts</h3>
              <div className="space-y-3 text-[#6B6A64]">
                <p>6308 Bowling Green Bldg 8</p>
                <p>Houston, TX 77021</p>
                <p className="font-semibold text-[#000000] mt-4">Programs Offered:</p>
                <p>Two's, Pre K 3-4, After Schoolers</p>
                <a
                  href="tel:832-662-8566"
                  className="inline-block mt-4 bg-[#EB9833] text-white px-6 py-3 rounded-full font-bold hover:bg-[#d88829] transition"
                >
                  Call Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
