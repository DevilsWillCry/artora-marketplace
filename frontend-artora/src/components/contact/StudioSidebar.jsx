// src/components/contact/StudioSidebar.jsx

import StudioMap from "./StudioMap";

import InfoRow from "./InfoRow";

function StudioSidebar() {
  return (
    <aside
      className="
        h-fit
        rounded-3xl
        border
        bg-[#f4efe8]
        p-6

        lg:p-8

        xl:sticky
        xl:top-24
      "
    >
      <span
        className="
          mb-4
          block
          text-[11px]
          uppercase
          tracking-[0.18em]
          text-stone-500
        "
      >
        · ARTORA ·
      </span>

      <h2
        className="
          mb-8
          font-serif
          text-2xl
          leading-tight
          tracking-widest
        "
      >
        Estamos disponibles <em className="text-terracotta">para ti.</em>
      </h2>

      <div className="space-y-5">
        <InfoRow
          label="Correo Electronico"
          value="artora@studio.com"
        />

        <InfoRow
          label="Telefono"
          value="+57 3178465152"
        />

        <InfoRow
          label="EL GRANERO"
          value={
            <>
              Cra 102B, #30-40
              <br />
              Cali, Colombia
            </>
          }
        />

        <InfoRow
          label="Horarios"
          value={
            <>
              Lunes – Viernes · 09:00 A.M – 05:00 P.M
              <br />
              Sabados – Domingo · Cerrado
            </>
          }
          last
        />
      </div>

      <StudioMap />
    </aside>
  );
}

export default StudioSidebar;