// components/list-piece/VisibilitySection.jsx

import { Eye, FileText } from "lucide-react";

export function VisibilitySection({
  form,
  setForm,
  submit,
  submitted,
  navigate,
}) {
  const options = [
    {
      value: "public",
      title: "Publish now",
      subtitle: "Visible in the shop immediately",
      icon: Eye,
    },
    {
      value: "draft",
      title: "Save as draft",
      subtitle: "Only visible to you for now",
      icon: FileText,
    },
  ];

  const updateVisibility = (value) => {
    setForm((prev) => ({
      ...prev,
      visibility: value,
    }));
  };

  return (
    <section className="rounded-md border border-stone-200 bg-stone-100 p-8">
      {/* Header */}
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-700 bg-white font-serif text-lg italic text-orange-700">
          5
        </div>

        <div>
          <h2 className="font-serif text-3xl text-stone-900">
            Ready to share?
          </h2>

          <p className="mt-1 font-serif text-sm italic text-stone-500">
            Save as a quiet draft, or publish for the world.
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="grid gap-4 md:grid-cols-2">
        {options.map((option) => {
          const Icon = option.icon;
          const active = form.visibility === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => updateVisibility(option.value)}
              className={`rounded-md border p-5 text-left transition-all ${
                active
                  ? "border-orange-700 bg-white"
                  : "border-stone-200 bg-transparent hover:bg-white"
              }`}
            >
              <Icon
                size={18}
                className={active ? "text-orange-700" : "text-stone-500"}
              />

              <h3 className="mt-4 font-serif text-xl text-stone-900">
                {option.title}
              </h3>

              <p className="mt-1 font-serif text-sm italic text-stone-500">
                {option.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Warning */}
      <div className="mt-6 flex gap-3 rounded-md border border-orange-200 bg-orange-50 p-4">
        <div className="mt-0.5 text-orange-700">
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <circle cx="8" cy="8" r="6.5" />
            <path d="M8 5v4" />
            <path d="M8 11v.5" />
          </svg>
        </div>

        <p className="font-serif text-sm italic leading-relaxed text-stone-600">
          By publishing, you confirm this piece is yours to sell and accurately
          described. You can edit or unlist at any time.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => navigate("profile")}
          className="rounded-md border border-stone-300 px-5 py-3 text-sm uppercase tracking-[0.08em] text-stone-700 transition hover:bg-stone-200"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={submit}
          className="rounded-md bg-stone-900 px-6 py-3 text-sm uppercase tracking-[0.08em] text-white transition hover:opacity-90"
        >
          {submitted
            ? "✓ Listing live"
            : form.visibility === "public"
              ? "Publish listing →"
              : "Save draft →"}
        </button>
      </div>
    </section>
  );
}
