// components/home/Hero/HeroContent.jsx

import ArtoraButton from "@/components/ui/ArtoraButton";
import HeroPill from "./HeroPill";

function HeroContent({ dense, onShop, onAbout }) {
  return (
    <div>
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-2.5 uppercase tracking-[0.18em] text-terracotta">
        <span className="h-px w-4.5 bg-current" />
        <span className="font-mono text-[11px]">
          EST. 2026 · UN ESTUDIO PEQUEÑO
        </span>
      </div>

      {/* Title */}
      <h1
        className={`
          font-serif font-normal leading-none tracking-[-0.02em] text-ink
          ${dense ? "text-[56px]" : "text-[68px]"}
        `}
      >
        Objetos hechos a mano
        <br />
        <em className="font-light text-terracotta">para los momentos cotidianos.</em>
      </h1>

      {/* Description */}
      <p className="mt-6 mb-8 max-w-110 font-serif text-[18px] italic leading-[1.55] text-inkSoft">
        Cerámica, textiles y pequeños artículos para el hogar, hechos uno a la vez por un pequeño círculo de artesanos que conocemos por su nombre.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3.5 max-md:flex-col max-md:w-full">
        <ArtoraButton  className="p-3 max-md:w-full  max-md:text-xs bg-terracotta hover:bg-ink cursor-pointer" size="lg" onClick={onShop}>
          Ve a comprar →
        </ArtoraButton>

        <button
          onClick={onAbout}
          className="
            border-b border-ink
            px-1 py-3.5
            text-[13px] font-medium tracking-[0.04em]
            text-ink
            transition-opacity
            cursor-pointer
            hover:opacity-70
            max-md:p-3
            max-md:text-xs
            max-md:w-full
          "
        >
          Conoce a los creadores
        </button>
      </div>

      {/* Pills */}
      <div className="mt-12 flex gap-7 text-[12px] text-inkSoft max-md:grid max-md:grid-cols-1 max-md:text-xs">
        <HeroPill icon="leaf">Recursos naturales</HeroPill>

        <HeroPill icon="hand">Terminados a mano</HeroPill>

        <HeroPill icon="ship">Envío gratis en compras mayores a 60 Mil. COP</HeroPill>
      </div>
    </div>
  );
}

export default HeroContent;