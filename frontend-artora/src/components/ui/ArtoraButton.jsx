import { cn } from "@/lib/utils";

export default function ArtoraButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

/* ───────────────────────────────────────────── */

const baseStyles = `
  inline-flex items-center justify-center
  rounded-md
  transition-all duration-200
  font-medium
  tracking-[0.02em]
  active:scale-[0.98]
  disabled:pointer-events-none
  disabled:opacity-50
`;

/* ───────────────────────────────────────────── */

const variants = {
  primary: `
    bg-ink
    text-paper
    hover:opacity-90
  `,

  secondary: `
    border border-rule
    bg-paper
    text-ink
    hover:bg-cream
  `,

  ghost: `
    text-ink
    hover:bg-black/5
  `,
};

/* ───────────────────────────────────────────── */

const sizes = {
  sm: `
    h-9 px-4
    text-sm
  `,

  md: `
    h-11 px-5
    text-[15px]
  `,

  lg: `
    h-12 px-6
    text-[15px]
  `,
};
