// src/components/profile/Sold/SummaryCard.jsx

export default function SummaryCard({
  label,
  value,
  hint,
  accent = false,
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        p-6
        shadow-xl

        ${
          accent
            ? `
              border-stone-900
              bg-stone-900
              text-white
            `
            : `
              border-stone-200
              bg-white
              text-stone-900
            `
        }
      `}
    >
      <p
        className={`
          text-xs
          uppercase
          tracking-[0.18em]

          ${
            accent
              ? "text-stone-400"
              : "text-stone-400"
          }
        `}
      >
        {label}
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-5xl
          leading-none
        "
      >
        {value}
      </h3>

      <p
        className={`
          mt-3
          font-serif
          text-sm
          italic

          ${
            accent
              ? "text-stone-300"
              : "text-stone-500"
          }
        `}
      >
        {hint}
      </p>
    </div>
  );
}