import { Heart, Apple } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import socialEmotionalImg from '../../imports/Strengthen-The-Parent-Child-Relationship-For-Lasting-Success-1.jpg';
import nutritiousMealsImg from '../../imports/Nutritious-Meals-With-Vegan-Options-At-No-Extra-Cost-1-1024x731.jpg';

export function SocialEmotionalNutrition() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Social-Emotional Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={socialEmotionalImg}
              alt="Children sitting together on grass"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Social-Emotional Learning */}
          <div className="bg-[#EDE3D9] rounded-2xl p-10 border border-[#D4C9BA] flex flex-col justify-center">
            <div className="w-14 h-14 bg-[#EB9833] rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-4">Strong Social-Emotional Skills Build Better Relationships</h3>
            <p className="text-[#6B6A64]">
              Beyond the ABCs and 123s, your child learns to manage feelings, follow instructions, and engage in polite, pleasant social interactions. Life skills such as taking responsibility for themselves and their belongings are a regular part of your tot's learning journey!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Nutrition */}
          <div className="bg-[#EDE3D9] rounded-2xl p-10 border border-[#D4C9BA] flex flex-col justify-center">
            <div className="w-14 h-14 bg-[#EB9833] rounded-2xl flex items-center justify-center mb-6">
              <Apple className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-4">Nutritious Meals With Vegan Options At No Extra Cost</h3>
            <p className="text-[#6B6A64]">
              Start your child's healthy eating now with hearty, home-cooked meals. Their kid-friendly menu is customizable to meet dietary restrictions and adhere to state guidelines, so they always receive a balanced diet. Vegan options are available, and the school is entirely nut-free.
            </p>
          </div>

          {/* Nutrition Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={nutritiousMealsImg}
              alt="Mother and daughter preparing healthy food"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
