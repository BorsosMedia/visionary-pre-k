import { DollarSign } from 'lucide-react';

export function TuitionSupportBanner() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-[#EDE3D9] to-[#F5EFE7] rounded-2xl p-10 border border-[#D4C9BA]">
          <h3 className="mb-6">
            Yes, We Offer Tuition Support Options
          </h3>
          <a
            href="#pricing"
            className="bg-[#EB9833] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition inline-block shadow-md"
          >
            Check Out Tuition Support Options Now
          </a>
        </div>
      </div>
    </section>
  );
}