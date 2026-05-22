function FeeRow({
  label,
  value,
  muted = false,
  bold = false,
  accent = false,
}) {
  return (
    <div
      className={`
        flex items-center justify-between py-2
        ${
          bold
            ? "text-lg font-medium"
            : "text-sm"
        }
        ${
          accent
            ? "text-orange-700"
            : muted
            ? "text-stone-400"
            : "text-stone-700"
        }
      `}
    >
      <span
        className={`
          ${muted ? "italic" : ""}
        `}
      >
        {label}
      </span>

      <span className="tabular-nums">
        {value}
      </span>
    </div>
  );
}

export default FeeRow;