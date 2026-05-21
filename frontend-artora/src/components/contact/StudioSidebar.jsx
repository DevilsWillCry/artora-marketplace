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
        · The studio ·
      </span>

      <h2
        className="
          mb-8
          font-serif
          text-3xl
        "
      >
        Visit us by appointment
      </h2>

      <div className="space-y-5">
        <InfoRow
          label="Email"
          value="hello@artora.studio"
        />

        <InfoRow
          label="Phone"
          value="+351 21 555 0432"
          hint="Tue–Sat, 10–17"
        />

        <InfoRow
          label="The barn"
          value={
            <>
              Rua das Oliveiras 14
              <br />
              2710 Sintra, Portugal
            </>
          }
        />

        <InfoRow
          label="Hours"
          value={
            <>
              Tue – Sat · 10:00 – 17:00
              <br />
              Sun – Mon · closed
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