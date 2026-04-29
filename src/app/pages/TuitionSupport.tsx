import {
  DollarSign,
  FileText,
  Briefcase,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TuitionSupport() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Tuition Support For Top-Quality Care
            </h1>
            <p className="text-xl">
              Learn About State & Federal Tax Credits,
              Subsidies, & Employer Benefits
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Check Out The Resources That Are Close At Hand
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Your child's well-being is one of your biggest
              priorities. Ensure your little one receives the
              best care and early childhood education possible
              by learning all available options to help ease
              tuition costs. Everything you need to know is
              right here!
            </p>
          </div>
        </div>
      </section>

      {/* Tuition Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              See What Option Works For You:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-center">
                Child Care Tax Credits
              </h3>
              <p className="text-center mb-6">
                Learn about state and federal tax credits that
                can help offset childcare costs and reduce your
                tax burden.
              </p>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-[#6B6A64]">
                  <strong>
                    Federal Child Care Tax Credit:
                  </strong>{" "}
                  You may be able to claim up to 35% of
                  qualifying expenses on your federal tax
                  return.
                </p>
              </div>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-center">
                Child Care Subsidy Programs
              </h3>
              <p className="text-center mb-6">
                Texas Workforce Commission (TWC) and Child Care
                Services (CCS) subsidies help eligible families
                afford quality care.
              </p>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-[#6B6A64]">
                  <strong>We Accept:</strong> Texas Workforce
                  Commission (TWC), Child Care Services (CCS),
                  and other state assistance programs.
                </p>
              </div>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-8 shadow-lg border border-[#D4C9BA]">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-center">
                Child Care As An Employment Benefit
              </h3>
              <p className="text-center mb-6">
                Check with your employer about dependent care
                flexible spending accounts (FSA) and other
                childcare benefits.
              </p>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-[#6B6A64]">
                  <strong>FSA Benefits:</strong> Set aside
                  pre-tax dollars to pay for childcare expenses,
                  saving you money throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Making Quality Care More Affordable
              </h2>
              <p className="text-lg mb-6">
                Quality early childhood education should be
                accessible to every family. We're proud to
                accept various tuition assistance programs to
                help make our exceptional care more affordable.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="mb-3 text-[#EB9833]">
                    Texas Workforce Commission (TWC)
                  </h3>
                  <p className="text-[#6B6A64]">
                    Childcare subsidies for eligible working
                    families. Apply through your local TWC
                    office or online at WorkInTexas.com.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="mb-3 text-[#EB9833]">
                    Child Care Services (CCS)
                  </h3>
                  <p className="text-[#6B6A64]">
                    Financial assistance programs for qualifying
                    families based on income and family size.
                    We'll help you navigate the application
                    process.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="mb-3 text-[#EB9833]">
                    Flexible Payment Plans
                  </h3>
                  <p className="text-[#6B6A64]">
                    Work with our team to find a payment
                    schedule that fits your budget. We offer
                    weekly and bi-weekly payment options.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
                alt="Family financial support"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#EDE3D9] to-[#F5EFE7] rounded-2xl p-12 border border-[#D4C9BA]">
            <div className="max-w-3xl mx-auto text-center">
              <Phone className="w-16 h-16 text-[#EB9833] mx-auto mb-6" />
              <h2 className="mb-6">
                Drop In Or Give Us A Call To Learn More!
              </h2>
              <p className="text-lg mb-8">
                We're here to help make quality childcare costs
                easier for your family. Our team can answer
                questions about tuition assistance programs,
                help you understand eligibility requirements,
                and guide you through the application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:832-662-8566"
                  className="bg-[#EB9833] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#d88829] transition inline-block"
                >
                  Call (832) 662-8566
                </a>
                <a
                  href="/schedule-tour"
                  className="bg-white text-[#EB9833] border-2 border-[#EB9833] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#EB9833] hover:text-white transition inline-block"
                >
                  Get Pricing & Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">Helpful Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Applying for TWC Assistance
              </h3>
              <p className="mb-4">
                To apply for Texas Workforce Commission
                childcare assistance, you'll need:
              </p>
              <ul className="space-y-2 text-[#6B6A64]">
                <li>
                  • Proof of employment or school enrollment
                </li>
                <li>
                  • Income verification for all household
                  members
                </li>
                <li>
                  • Child's birth certificate and immunization
                  records
                </li>
                <li>
                  • Social Security numbers for household
                  members
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="mb-4 text-[#EB9833]">
                Employer Benefits Questions
              </h3>
              <p className="mb-4">
                Ask your HR department about:
              </p>
              <ul className="space-y-2 text-[#6B6A64]">
                <li>
                  • Dependent Care FSA (Flexible Spending
                  Account)
                </li>
                <li>
                  • Childcare subsidies or reimbursement
                  programs
                </li>
                <li>• Partnership with childcare centers</li>
                <li>• Backup childcare benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
