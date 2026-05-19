// components/auth/AuthHero.jsx
import { cn } from "@/lib/utils";

export default function AuthHero({ density, className, ...props }) {
  const dense = density === "compact";
  console.log(props);
  return (
    <div
      className={cn("relative overflow-hidden bg-cover bg-center", className)}
      style={{
        backgroundImage: `url(${props.image})`,
        minHeight: dense ? 600 : 720,
      }}
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(40,30,20,0.15)]
          to-[rgba(40,30,20,0.5)]
        "
      />

      <div
        className="
          absolute bottom-9 left-9 right-9
          text-cream
          animate-fade-up animate-once animate-duration-1000 animate-delay-300 animate-ease-out animate-fill-backwards
        "
      >
        <div
          className="
            mb-4 flex items-center gap-3
            font-mono text-[11px]
            uppercase tracking-[0.18em]
            opacity-85
          "
        >
          <span className="h-px w-5 bg-current" />
          Desde Artora
        </div>

        <blockquote
          className="
            max-w-[380px]
            font-serif text-[30px]
            leading-tight tracking-[-0.01em]
          "
        >
          {props.text}
        </blockquote>

        <p
          className="
            mt-3 text-xs
            uppercase tracking-[0.06em]
            opacity-85
          "
        >
          — Miguel Angel, fundador
        </p>
      </div>
    </div>
  );
}
