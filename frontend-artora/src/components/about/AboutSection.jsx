import SectionHeader from "@/components/ui/SectionHeader";

function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 pt-25 bg-cream max-w-3xl">
      <SectionHeader
        title={
          <>
            <h1> <span className="text-terracotta italic">El camino lento</span> es el único que conocemos.</h1>
          </>
        }
        titleClassName="text-center max-w-5xl text-3xl max-md:text-4xl max-md:max-w-xs"
      />
      <div className="flex flex-col text-ink-soft gap-3 text-base/relaxed text-md text-justify">
        <p>
          Artora es un pequeño taller de objetos elaborados con esmero. Cada
          pieza de la tienda proviene de uno de los ocho artesanos
          independientes con los que hemos cultivado una estrecha relación a lo
          largo de los años: visitando sus talleres, conociendo sus materiales y
          adquiriendo sus creaciones en lotes que suelen ser de menos de una
          docena de piezas.
        </p>
        <p>
          No reponemos la mayoría de nuestros productos. Cuando un artesano
          termina un lote de tazas, ese lote es el único. Cuando llega el
          siguiente lote, el esmalte tendrá un aspecto ligeramente diferente;
          esa es precisamente la clave.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
