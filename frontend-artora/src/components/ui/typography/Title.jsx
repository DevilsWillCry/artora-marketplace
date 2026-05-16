import { cn } from "@/lib/utils";

function Title({ children, className }) {
  return (
    <div
      className={cn(
        "font-serif text-[38px] font-normal tracking-[-0.01em] text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Title;
