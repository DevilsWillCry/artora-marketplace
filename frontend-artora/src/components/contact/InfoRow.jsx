// src/components/contact/InfoRow.jsx

function InfoRow({
  label,
  value,
  hint,
  last,
}) {
  return (
    <div
      className={`
        py-4

        ${
          !last
            ? "border-b border-stone-200"
            : ""
        }
      `}
    >
      <div
        className="
          mb-1
          text-[10px]
          uppercase
          tracking-[0.12em]
          text-stone-400
        "
      >
        {label}

        {hint && (
          <span
            className="
              ml-1
              normal-case
              tracking-normal
              italic
            "
          >
            · {hint}
          </span>
        )}
      </div>

      <div
        className="
          font-serif
          text-base
          leading-relaxed
          text-stone-800
        "
      >
        {value}
      </div>
    </div>
  );
}

export default InfoRow;