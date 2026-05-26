// src/components/form/ArtoraInput.jsx
import { cn } from "@/lib/utils";

export default function ArtoraInput({
  label,
  error,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      {label && <label className="text-sm text-ink font-medium">{label}</label>}

      {/* Input */}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          `
          h-11 w-full rounded-md
          border border-rule bg-paper
          px-4 text-[15px] text-ink
          outline-none
          transition-all duration-150

          focus:border-terracotta focus:ring-2
          focus:ring-terracotta/20

          placeholder:text-inkSoft
        `,
          error && "border-red-400 focus:border-red-500 focus:ring-red-300/30",
          className,
        )}
        {...props}
      />

      {/* Error */}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
