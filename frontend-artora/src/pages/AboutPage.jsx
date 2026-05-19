import SectionHeader from "@/components/ui/SectionHeader";
import AboutImages from "../components/about/AboutImages";
import AboutSection from "../components/about/AboutSection";

function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center pt-25 bg-cream">
      <SectionHeader
        className="text-center p-5"
        eyebrow="· NUESTRA HISTORIA ·"
        eyebrowClassName="text-xs"
        title={
          <>
            Tres desarrolladores{" "}
            <em className="text-terracotta">Un granero lleno de ideas.</em>
          </>
        }
        titleClassName="animate-fade-up animate-once animate-duration-500 animate-ease-out animate-delay-0 text-center max-w-5xl text-7xl max-md:text-5xl max-md:max-w-xl max-md:p-5"
      />

      <AboutImages />

      <AboutSection />
    </section>
  );
}

export default AboutPage;
