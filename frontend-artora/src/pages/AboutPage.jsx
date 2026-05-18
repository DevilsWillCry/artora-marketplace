import SectionHeader from "@/components/ui/SectionHeader";
import AboutImages from "../components/about/AboutImages";
import AboutSection from "../components/about/AboutSection";

function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 pt-25 bg-cream">
      <SectionHeader
        className="text-center max-w-xl"
        eyebrow="· NUESTRA HISTORIA ·"
        eyebrowClassName="text-xs"
        title={
          <>
            Tres desarrolladores{" "}
            <em className="text-terracotta">Un granero lleno de ideas.</em>
          </>
        }
        titleClassName="text-center max-w-5xl text-7xl max-md:text-4xl max-md:max-w-xs"
      />

  
      <AboutImages />

      <AboutSection />

      


    </section>
  );
}

export default AboutPage;
