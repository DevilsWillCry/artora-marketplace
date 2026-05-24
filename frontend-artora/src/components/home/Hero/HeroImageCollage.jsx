// components/home/Hero/HeroImageCollage.jsx
import { cn } from "@/lib/utils";

function HeroImageCollage({ dense, className }) {
  return (
    <div
      className={`
        ${cn(dense ? "h-115" : "h-135", "flex relative", className)}
      `}
    >
      {/* Main Image */}
      <div
        className="
          absolute top-0 right-0
          aspect-5/5
          w-[60%]
          overflow-hidden rounded-md
          shadow-[0_20px_60px_rgba(60,40,20,0.18)]
          max-md:w-[80%]
        "
        style={{
          backgroundImage:
            "url('https://image.made-in-china.com/202f0j00RvqlZBDzbckG/Matte-Ceramic-Round-Ball-Vase-Black-Minimalistic-Flower-Vase-Design-Gold-Modern-Luxury-Table-Vases.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Secondary Image */}
      <div
        className="
          absolute bottom-0 left-0
          aspect-5/5
          w-[50%]
          overflow-hidden rounded-md border-4 border-cream
          shadow-[0_16px_40px_rgba(60,40,20,0.14)]
          max-md:w-[80%]
        "
        style={{
          backgroundImage:
            "url('https://ilumina.pe/cdn/shop/files/9_ec44c022-1c6e-46d9-9ef3-5b6d9641f8fd.jpg?v=1768345303&width=1214')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating Tag */}
      <div
        className="
          absolute left-[8%] top-[38%]
          max-w-32.5
          -rotate-3
          rounded
          border border-rule
          bg-paper
          px-3.5 py-2.5
          text-center
          shadow-[0_6px_20px_rgba(60,40,20,0.14)]
        "
      >
        <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-terracotta">
          CREADOR · 03
        </div>

        <div className="font-serif text-[13px] italic text-ink">
          Studio Linnea
        </div>

        <span className="text-[11px] text-inkMute">Ceramista, Sintra</span>
      </div>
    </div>
  );
}

export default HeroImageCollage;
