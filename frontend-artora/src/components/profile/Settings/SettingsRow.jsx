// src/components/profile/Settings/SettingsRow.jsx

const tones = {
  default: {
    button: `
      border-stone-300
      text-stone-800
      hover:bg-stone-100
    `,
  },

  warning: {
    button: `
      border-orange-200
      bg-orange-100
      text-orange-700
      hover:bg-orange-200
    `,
  },

  danger: {
    button: `
      border-red-200
      text-red-600
      hover:bg-red-50
    `,

    value: `
      italic
      text-red-500
    `,
  },
};

export default function SettingsRow({
  label,
  value,
  actionLabel = "Edit",
  tone = "default",
  last = false,
}) {
  const styles =
    tones[tone];

  return (
    <div
      className={`
        flex
        items-center
        justify-between
        gap-6
        py-6

        ${
          !last
            ? "border-b"
            : ""
        }
      `}
    >
      <div className="flex-1">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.18em]
            text-stone-400
          "
        >
          {label}
        </p>

        <p
          className={`
            mt-2
            font-serif
            text-lg
            text-stone-800

            ${
              styles.value || ""
            }
          `}
        >
          {value}
        </p>
      </div>

      <button
        className={`
          rounded-lg
          border
          px-5
          py-2.5
          text-sm
          font-medium
          transition-colors

          ${styles.button}
        `}
      >
        {actionLabel}
      </button>
    </div>
  );
}