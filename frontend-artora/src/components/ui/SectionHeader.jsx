import { cn } from "@/lib/utils";
import Eyebrow from "./typography/Eyebrow";
import Title from "./typography/Title";

function SectionHeader({
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  actionLabel,
  onAction,
  centered = false,
  className,
}) {


  return (
    <div
      className={cn(
        `
        flex items-end justify-between gap-6
        ${centered ? "flex-col text-center" : ""}
        max-md:gap-5
        max-md:flex-col
        max-md:items-start
      `,
        className,
      )}
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
            <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>
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
          <Title className={titleClassName}>{title}</Title>
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
