function PreviewLine({ label, value, last }) {
  return (
    <div
      className={`flex items-center justify-between pb-3 ${
        !last ? "border-b border-stone-200" : ""
      }`}
    >
      <span className="text-xs uppercase tracking-[0.08em] text-stone-500">
        {label}
      </span>

      <span className="font-serif italic text-stone-900">
        {value}
      </span>
    </div>
  );
}

export default PreviewLine;