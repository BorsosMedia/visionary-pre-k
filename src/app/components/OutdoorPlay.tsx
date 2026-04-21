export function OutdoorPlay() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://c2cpreschool.org/wp-content/uploads/2021/02/C2C-Hero-1.jpg"
          alt="Children playing outdoors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-white mb-6">
            Outdoor Play Strengthens Minds & Builds Muscles
          </h2>
          <p className="text-white/90 text-xl mb-6">
            Your little one spends time outdoors daily to build strong minds and muscles. They have plenty of room on the playground to run, jump, play, explore the play structure, and tend to gardens that your child helps plant, nurture, and grow.
          </p>
        </div>
      </div>
    </section>
  );
}
