// src/components/contact/Field.jsx

function Field({
  label,
  hint,
  error,
  children,
}) {
  return (
    <div>
      <label
        className={`
          mb-2
          flex
          items-center
          justify-between
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.12em]

          ${
            error
              ? "text-[#b8593a]"
              : "text-stone-500"
          }
        `}
      >
        <span>{label}</span>

        {hint && (
          <span
            className="
              normal-case
              tracking-normal
              text-stone-400
            "
          >
            {hint}
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          className="
            mt-2
            font-serif
            text-sm
            italic
            text-[#b8593a]
          "
        >
          — {error}
        </p>
      )}
    </div>
  );
}

export default Field;