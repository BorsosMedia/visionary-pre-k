import { useMemo, useState } from "react";

export function ScheduleTour() {
  const [location, setLocation] = useState<"visionary" | "cradles">("visionary");

  const booking = useMemo(() => {
    if (location === "cradles") {
      return {
        label: "Cradles 2 Crayons Early Learning Academy",
        src: "https://app.tryplayground.com/nnWMx9xDZerzCyUSMiX9/book/gRD8cFqZaCy1GRJQi8AY",
      };
    }

    return {
      label: "Visionary Academy",
      src: "https://app.tryplayground.com/nnWMx9xDZerzCyUSMiX9/book/xkq4aFIWPKhHM2McoCsv",
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-[#EDE3D9] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center mb-8">Schedule a Tour</h1>

        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="text-[#6B6A64] text-sm font-medium">Select a location</div>
          <div
            className="inline-flex gap-2 bg-white rounded-full border border-[#D4C9BA] p-1 shadow-sm"
            role="tablist"
            aria-label="Tour locations"
          >
            <button
              type="button"
              role="tab"
              aria-selected={location === "visionary"}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition ${
                location === "visionary"
                  ? "bg-[#000000] text-white"
                  : "text-[#000000] hover:bg-[#EDE3D9]"
              }`}
              onClick={() => setLocation("visionary")}
            >
              Visionary Academy
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={location === "cradles"}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition ${
                location === "cradles"
                  ? "bg-[#000000] text-white"
                  : "text-[#000000] hover:bg-[#EDE3D9]"
              }`}
              onClick={() => setLocation("cradles")}
            >
              Cradles 2 Crayons
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#D4C9BA] overflow-hidden h-[600px] sm:h-[660px] md:h-[720px] lg:h-[780px]">
          <iframe
            key={booking.src}
            src={booking.src}
            title={`Schedule a Tour - ${booking.label}`}
            className="w-full h-[1040px] sm:h-[1120px] md:h-[1200px] lg:h-[1280px] -mt-40 sm:-mt-48 md:-mt-52 lg:-mt-56"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
