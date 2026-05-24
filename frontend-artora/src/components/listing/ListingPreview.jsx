// components/list-piece/ListingPreview.jsx
import PreviewLine from "@/components/listing/PreviewLine";
import useAuth from "@/hooks/useAuth";
import { load } from "@/storage/storage";

function ListingPreview({ form }) {
  const { user } = useAuth();
  const hasCover = form.photos?.[0]?.url || "";

  const categories = load("categories", []);
  const conditions = load("conditions", []);

  
  const category = categories.find((item) => item.id === form.categoryId);
  const condition = conditions.find((item) => item.id === form.conditionId);
  
  console.log(category, condition);
  return (
    <aside className="sticky top-24">
      {/* Preview Card */}
      <div className="rounded-md border border-stone-200 bg-stone-100 p-6">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-stone-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" />
            <circle cx="8" cy="8" r="2.5" />
          </svg>
          Live preview
        </div>

        {/* Image */}
        <div className="relative mb-4 overflow-hidden rounded bg-stone-200">
          {hasCover ? (
            <div className="aspect-[5/5] w-full overflow-hidden">
              <img
                src={hasCover}
                alt={form.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center bg-stone-200 text-center">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="mx-auto mb-3 text-stone-500"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M3 16l5-5 5 5 4-4 4 4" />
                </svg>

                <p className="text-[10px] uppercase tracking-[0.15em] text-stone-500">
                  Add a cover photo
                </p>
              </div>
            </div>
          )}

          {/* Category */}
          <div className="absolute left-3 top-3 rounded bg-white/80 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-stone-700 backdrop-blur-sm">
            {category.name}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className={`font-serif text-lg leading-tight ${
                form.title ? "text-stone-900" : "italic text-stone-400"
              }`}
            >
              {form.title || "Your piece, named here"}
            </h3>

            <p className="mt-1 text-sm text-stone-500">
              by {user.name || "You"}
            </p>

            <p
              className={`font-serif text-md leading-tight pt-3 ${
                form.description ? "text-stone-600" : "italic text-stone-400"
              }`}
            >
              {form.description || "Your piece, describe it"}
            </p>

            
          </div>

          <div className="font-serif text-lg font-medium text-stone-900">
            ${form.price.toLocaleString("es-CO") || 0}
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-stone-200" />

        {/* Summary */}
        <div className="space-y-3 text-sm">
          <PreviewLine label="Condition" value={condition.name} />

          <PreviewLine label="Ships from" value={form.shippingFrom || "—"} />

          <PreviewLine
            label="Returns"
            value={form.returns === "0" ? "Final sale" : `${form.returns} days`}
          />

          <PreviewLine
            label="Quantity"
            value={
              form.quantity === 1 ? "One of one" : `${form.quantity} available`
            }
            last
          />
        </div>
      </div>

      {/* Tips */}
      <div className="mt-4 rounded-md border border-stone-200 bg-white p-5">
        <div className="mb-4 text-[10px] uppercase tracking-[0.15em] text-orange-700">
          · Listing tips ·
        </div>

        <ul className="space-y-3">
          {[
            "5 photos sell 2× more than 1.",
            "Mention the materials early in the description.",
            "Price for the long shelf — buyers wait.",
            "Tell the maker’s story if you know it.",
          ].map((tip) => (
            <li
              key={tip}
              className="flex gap-2 font-serif text-sm italic leading-relaxed text-stone-600"
            >
              <span className="text-orange-700">·</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default ListingPreview;
