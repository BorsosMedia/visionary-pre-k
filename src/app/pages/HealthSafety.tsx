import {
  Shield,
  Droplets,
  Thermometer,
  Hand,
  Camera,
  Users,
  Heart,
  CheckCircle,
  DoorOpen,
  Utensils,
  Palette,
  Home,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import cleanSpacesImg from "../../imports/Super-Clean-Spaces-Keep-Your-Child-Healthy-And-Safe-1024x745.jpg";
import fingerprintImg from "../../imports/Convenient-Fingerprint-Check-In-And-Check-Out-standard-scale-2_00x-gigapixel.jpg";
import teachersImg from "../../imports/50-Yrs-Combined-Expertise-Shape-Your-Childs-Learning-1024x738.jpg";

export function HealthSafety() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              A Commitment To Keeping Your Child Safe
            </h1>
            <p className="text-xl">
              Strict Cleaning & Sanitization Measures That
              Protect Health
            </p>
          </div>
        </div>
      </section>

      {/* Key Safety Features */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Daily Sanitizing</h3>
              <p>
                Daily cleaning and sanitizing keep your child's
                classrooms and bathrooms germ-free
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Health Screenings</h3>
              <p>
                Temperature checks and health screenings ensure
                all who enter are symptom-free
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Hand Washing</h3>
              <p>
                Frequent handwashing throughout the day to kill
                germs and prevent illness
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4C9BA] text-center">
              <div className="bg-[#EB9833] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">24/7 Security</h3>
              <p>
                Monitored cameras and fingerprint check-in/out
                system for complete security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Protocols */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Daily Sanitizing Keeps Germs & Viruses Away
              </h2>
              <p className="text-lg mb-8">
                Daily cleaning and sanitizing keep your child's
                classrooms and bathrooms germ-free. Paying close
                attention to high-traffic and high-touch
                surfaces like doorknobs and light switches
                assures a deep clean that keeps your child
                healthy.
              </p>

              <div className="bg-[#EDE3D9] rounded-2xl p-6">
                <h3 className="mb-4 text-[#EB9833]">
                  Our Cleaning Schedule:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      Classrooms sanitized multiple times daily
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      Toys and learning materials cleaned after
                      each use
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      High-touch surfaces wiped down hourly
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      Bathrooms deep cleaned throughout the day
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833] mt-1 flex-shrink-0" />
                    <span>
                      Overnight deep cleaning of entire facility
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={cleanSpacesImg}
                alt="Bright, clean classroom spaces"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Screenings */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <ImageWithFallback
                src={fingerprintImg}
                alt="Secure fingerprint check-in at arrival"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">
                Temperature & Health Screenings Ensure Wellness
              </h2>
              <p className="text-lg mb-6">
                Every day, your child and the staff get their
                temperatures checked for signs of fever. Health
                screenings also ensure all who enter are
                symptom-free, keeping your child's spaces free
                of possible infection.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="mb-4 text-[#EB9833]">
                  Daily Health Checks Include:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Temperature screening at drop-off
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>Visual assessment for symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Parent questionnaire about health status
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EB9833]">•</span>
                    <span>
                      Staff health monitoring throughout the day
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handwashing Protocol */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Increased Hand-Washing Puts A Stop To Germs
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Your child washes their hands right after drop
              off, before entering any classroom, periodically
              throughout the day, and before you pick them up to
              kill germs and the possibility of contagion.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#EDE3D9] rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-full bg-[#EB9833] flex items-center justify-center">
                  <DoorOpen className="w-7 h-7 text-white" aria-hidden />
                </div>
              </div>
              <h3 className="mb-2">Upon Arrival</h3>
              <p className="text-sm">
                Immediate handwashing when entering the building
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-full bg-[#EB9833] flex items-center justify-center">
                  <Utensils className="w-7 h-7 text-white" aria-hidden />
                </div>
              </div>
              <h3 className="mb-2">Before Meals</h3>
              <p className="text-sm">
                Thorough handwashing before every meal and snack
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-full bg-[#EB9833] flex items-center justify-center">
                  <Palette className="w-7 h-7 text-white" aria-hidden />
                </div>
              </div>
              <h3 className="mb-2">After Activities</h3>
              <p className="text-sm">
                Hands washed after messy play and outdoor time
              </p>
            </div>

            <div className="bg-[#EDE3D9] rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-full bg-[#EB9833] flex items-center justify-center">
                  <Home className="w-7 h-7 text-white" aria-hidden />
                </div>
              </div>
              <h3 className="mb-2">Before Pickup</h3>
              <p className="text-sm">
                Clean hands before going home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Safe & Effective Drop Off & Pick Up Measures
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Cleaning and safety measures like hygiene stations
              before your child enters, a greeter to receive
              your child, and a designated, trusted person for
              pick-ups and drop-offs help reduce everyone's
              exposure to viruses and germs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Camera className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">24/7 Security Cameras</h3>
              <p>
                Monitored surveillance cameras inside and
                outside the facility for complete oversight and
                safety.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Shield className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Fingerprint Check-In/Out</h3>
              <p>
                Procare® system ensures only authorized
                individuals can pick up your child with secure
                fingerprint verification.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Users className="w-12 h-12 text-[#EB9833] mb-4" />
              <h3 className="mb-4">Adequate Staff Ratios</h3>
              <p>
                Low teacher-to-child ratios ensure every child
                receives individual attention and close
                supervision at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#EDE3D9] to-[#F5EFE7] rounded-2xl p-12 border border-[#D4C9BA]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Heart className="w-16 h-16 text-[#EB9833] mb-6" />
                <h2 className="mb-6">
                  Highly Trained & Certified Staff
                </h2>
                <p className="text-lg mb-6">
                  All teachers and staff are trained in
                  pediatric CPR and first aid to respond to any
                  emergency situation. Our team completes
                  ongoing training in health, safety, and child
                  development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833]" />
                    <span>CPR & First Aid Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833]" />
                    <span>
                      Background checks & fingerprinting
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833]" />
                    <span>Annual safety training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EB9833]" />
                    <span>State licensed & inspected</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={teachersImg}
                  alt="Experienced teachers guiding young learners"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#EB9833] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">
            Your Child's Safety Is Our Top Priority
          </h2>
          <p className="text-xl mb-8">
            See our safety protocols in action and get peace of
            mind knowing your child is in good hands
          </p>
          <Link
            to="/schedule-tour"
            className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black/90 transition inline-block"
          >
            Schedule a Tour & See For Yourself
          </Link>
        </div>
      </section>
    </div>
  );
}
