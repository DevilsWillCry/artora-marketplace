// components/home/Hero/HeroSection.jsx

import HeroContent from "./HeroContent";
import HeroImageCollage from "./HeroImageCollage";

function HeroSection({
  density,
  onShop,
  onAbout,
}) {
  const dense = density === "compact";

  return (
    <section
      className={`
        relative overflow-hidden bg-cream px-12
        ${dense ? "py-16" : "py-24"} max-md:px-5
      `}
    >
      <div className="relative grid grid-cols-[1.05fr_1fr] max-md:grid-cols-1 items-center gap-14">
        <HeroContent
          dense={dense}
          onShop={onShop}
          onAbout={onAbout}
        />

        <HeroImageCollage dense={dense} className="max-md:mt-10 mt-25" />
      </div>
    </section>
  );
}

export default HeroSection;