import SectionHeader from "@/components/ui/SectionHeader";
import { useInView } from "react-intersection-observer";


function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })
  return (
    <section ref={ref} className={`flex flex-col items-center justify-center gap-3 pt-25 w-full bg-cream  ${inView ? "animate-fade-up animate-once animate-duration-1000 animate-ease-in animate-delay-none" : ""}`}>
      <SectionHeader
        title={
          <>
            <h1>
              {" "}
              <span className="text-terracotta italic">El camino lento</span> es
              el único que conocemos.
            </h1>
          </>
        }
        titleClassName="text-center max-w-5xl text-3xl max-md:text-4xl max-md:max-w-xs"
      />
      <div className="flex flex-col text-ink-soft max-w-3xl gap-5 text-xl text-justify max-md:p-10">
        <div className="flex flex-col gap-3">
          <p>
            Artora es un pequeño taller de objetos elaborados con{" "}
            <em className="text-terracotta font-bold">esmero</em>. Cada pieza de
            la tienda proviene de uno de los ocho artesanos independientes con
            los que hemos cultivado una estrecha relación a lo largo de los
            años: visitando sus talleres, conociendo sus materiales y
            adquiriendo sus creaciones en lotes que suelen ser de menos de una
            docena de piezas.
          </p>
          <p>
            No reponemos la mayoría de nuestros productos. Cuando un artesano
            termina un lote de tazas, ese lote es el{" "}
            <em className="text-terracotta font-bold">único</em>. Cuando llega
            el siguiente lote, el esmalte tendrá un aspecto ligeramente
            diferente; esa es precisamente la clave.
          </p>
        </div>
        <div
          className="
          mt-5
          mb-10
        "
        >
          <blockquote
            className="
            text-center
            font-serif text-[20px]
            leading-tight tracking-[-0.01em]
          text-terracotta
            italic
          "
          >
            "Preferimos que tengas una taza que conserves durante veinte años a diez
            que olvidarás para la primavera."
          </blockquote>

          <p
            className="
            mt-3 text-xs
            uppercase tracking-[0.06em]
            opacity-85
            text-center
          "
          >
            — Miguel Angel, fundador
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
