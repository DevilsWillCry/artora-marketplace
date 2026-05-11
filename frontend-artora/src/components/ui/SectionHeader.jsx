function SectionHeader({
  eyebrow,
  title,
  actionLabel,
  onAction,
  centered = false,
}) {
  return (
    <div
      className={`
        flex items-end justify-between gap-6
        ${centered ? "flex-col text-center" : ""}
        max-md:gap-5
        max-md:flex-col
        max-md:items-start
      `}
    >
      <div>
        {/* Eyebrow */}
        {eyebrow && (
          <div
            className="
              mb-2.5
              font-mono
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-terracotta
            "
          >
            {eyebrow}
          </div>
        )}

        {/* Title */}
        <h2
          className="
            font-serif
            text-[38px]
            font-normal
            tracking-[-0.01em]
            text-ink
          "
        >
          {title}
        </h2>
      </div>

      {/* Action */}
      {actionLabel && (
        <button
          onClick={onAction}
          className="
            border-b border-ink
            pb-1
            text-[13px]
            font-medium
            text-ink
            transition-opacity
            hover:opacity-70
          "
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default SectionHeader;