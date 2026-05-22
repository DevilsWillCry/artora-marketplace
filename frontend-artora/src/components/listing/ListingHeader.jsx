// components/list-piece/ListingHeader.jsx

import { ArrowLeft } from "lucide-react";

function ListingHeader({ completeness, onBack }) {
  return (
    <section className="border-b border-stone-200 bg-stone-100 pt-10 px-10">
      <div className="flex flex-col items-start max-w-7xl  gap-8 px-6 py-14">
        {/* LEFT */}
        <div className="flex-1">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-900"
          >
            <ArrowLeft size={14} />
            Back to your studio
          </button>

          <span className="mb-3 block text-[11px] uppercase tracking-[0.2em] text-orange-700">
            · A new listing ·
          </span>

          <h1 className="max-w-3xl font-serif text-5xl font-normal leading-none tracking-tight text-stone-900">
            List a piece{" "}
            <em className="text-orange-700">for sale.</em>
          </h1>

          <p className="mt-5 max-w-2xl font-serif text-lg italic text-stone-600">
            Tell us about your piece. Good photos and a few honest
            sentences help it find the right home.
          </p>
        </div>

        {/* RIGHT */}
        <div className="min-w-[260px]">
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-[10px] uppercase tracking-[0.15em] text-stone-500">
              Completeness
            </span>

            <span className="font-serif text-2xl font-medium text-stone-900">
              {completeness}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-1 overflow-hidden rounded-full bg-stone-200">
            <div
              className="h-full bg-orange-700 transition-all duration-300"
              style={{ width: `${completeness}%` }}
            />
          </div>

          <p className="mt-3 font-serif text-sm italic text-stone-500">
            {completeness < 50
              ? "Keep going — buyers like complete listings."
              : completeness < 100
              ? "Looking good. Just a few more details."
              : "All set — review and publish when you're ready."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ListingHeader;