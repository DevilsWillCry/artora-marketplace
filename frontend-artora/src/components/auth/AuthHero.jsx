// components/auth/AuthHero.jsx

export default function AuthHero({
  density,
  ...props
}) {
  const dense = density === "compact";


  return (
    <div
      className="
        relative overflow-hidden
        bg-cover bg-center
      "
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
          From the studio
        </div>

        <blockquote
          className="
            max-w-[380px]
            font-serif text-[30px]
            leading-tight tracking-[-0.01em]
          "
        >
          "Coming back to a name you know feels
          like the right kind of small."
        </blockquote>

        <p
          className="
            mt-3 text-xs
            uppercase tracking-[0.06em]
            opacity-85
          "
        >
          — Linnea Costa, founder
        </p>
      </div>
    </div>
  );
}