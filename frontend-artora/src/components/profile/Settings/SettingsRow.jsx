// src/components/profile/Settings/SettingsRow.jsx

import { useRef, useEffect } from "react";


const tones = {
  default: {
    button: `
      border
      border-black
      text-stone-800
      hover:bg-terracotta
      hover:text-white
      transition-colors
      duration-300
    `,
  },

  warning: {
    button: `
      border-2
      border-orange-200
      bg-orange-100
      text-orange-700
      hover:bg-orange-200
      transition-colors
      duration-300
    `,
  },

  danger: {
    button: `
      border-2
      border-red-500
      text-red-600
      hover:bg-red-200
      transition-colors
      duration-300

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
  actionLabel = "Editar",
  tone = "default",
  last = false,
  onChange,
  onEditing,
  isEditing,
}) {

  const inputRef = useRef(null);
  useEffect(() => {
    if(isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);


  const styles = tones[tone];
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        gap-6
        py-6

        ${!last ? "border-b" : ""}
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

        <input
          ref={inputRef}
          disabled={!isEditing}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            mt-2
            font-serif
            text-lg
            text-stone-800

            ${styles.value || ""}
          `}
        />
      </div>

      {!isEditing && (
        <button
          onClick={onEditing}
          className={`
          rounded-lg
          px-5
          py-2.5
          text-sm
          font-medium
          transition-colors
          w-1/7
          cursor-pointer

          ${isEditing ? "bg-ink text-white hover:bg-ink/90" : ""}
          

          ${styles.button}
        `}
        >
          {actionLabel}
        </button>
      )}

      {isEditing && (
        <button
          type="submit"
          className={`
          rounded-lg
          px-5
          py-2.5
          text-sm
          font-medium
          transition-colors
          w-1/7
          cursor-pointer
          ${styles.button}

          bg-ink
          text-white
          hover:bg-terracotta/80
        `}
        onClick={onEditing}
        >
          Guardar
        </button>
      )}
    </div>
  );
}
