import { cn }  from "@/lib/utils";

function Eyebrow({ children, className }) {
  return (
    <div className={cn("mb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-terracotta", className)}>
      {children}
    </div>
  );
}

export default Eyebrow