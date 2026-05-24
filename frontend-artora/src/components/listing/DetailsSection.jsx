import ListingSection from "@/components/listing/ListingSection";

import ListingField from "@/components/listing/ListingField";
import PhotoUploader from "@/components/listing/PhotoUploader";
import { load } from "@/storage/storage";

function DetailsSection({ form, setForm, errors, updateField }) {
  const categories = load("categories", []);
  const conditions = load("conditions", []);

  return (
    <div>
      <ListingSection
        num="1"
        title="The photos"
        subtitle="Add up to five images."
      >
        <ListingField
          label="Photos"
          required
          error={errors.images}
          hint="Natural light works best."
        >
          <PhotoUploader
            images={form.images}
            setImages={(images) =>
              setForm((prev) => ({
                ...prev,
                images,
              }))
            }
          />
        </ListingField>
      </ListingSection>

      <ListingSection
        num="2"
        title="The details"
        subtitle="Name it and describe it."
      >
        <ListingField
          label="Title"
          hint="Be specific — 'Hand-thrown stoneware mug, oat glaze' beats 'Mug.'"
          required
          error={errors.title}
        >
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Handmade ceramic vase"
            className="
                    w-full rounded-md border
                    border-stone-300 bg-white
                    px-4 py-3 outline-none
                    transition focus:border-stone-500
                  "
          />
        </ListingField>

        <div className="grid grid-cols-2 gap-4">
          <ListingField
            label="Category"
            hint="What kind of piece is it?"
            required
            error={errors.categoryId}
          >
            <div className="flex flex-row  gap-5 justify-items-center-safe ">
              {categories.map((category) => {
                const active = form.categoryId === category.id;
                return (
                  <button
                    key={category.id}
                    value={category.id}
                    selected={form.categoryId === category.id}
                    onClick={(e) =>
                      updateField("categoryId", parseInt(e.target.value))
                    }
                    className={`
                        cursor-pointer
                        rounded-full
                        border border-stone-300
                        px-4 py-3
                        text-sm font-medium text-stone-700
                        transition
                          ${
                            active
                              ? "border-stone-900 bg-stone-900 text-white"
                              : "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                          }
                      `}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </ListingField>

          <ListingField
            label="Condición"
            hint="What kind of piece is it?"
            required
            error={errors.conditionId}
          >
            <div className="flex flex-row  gap-5  justify-items-center-safe ">
              {conditions.map((condition) => {
                const active = form.conditionId === condition.id;
                return (
                  <button
                    key={condition.id}
                    value={condition.id}
                    selected={form.contditionId === condition.id}
                    onClick={(e) =>
                      updateField("conditionId", parseInt(e.target.value))
                    }
                    className={`
                        cursor-pointer
                        rounded-full
                        border border-stone-300
                        px-4 py-3
                        text-sm font-medium text-stone-700
                        transition
                          ${
                            active
                              ? "border-stone-900 bg-stone-900 text-white"
                              : "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                          }
                      `}
                  >
                    {condition.name}
                  </button>
                );
              })}
            </div>
          </ListingField>
        </div>

        <ListingField
          label="Description"
          hint="0 / 600 — what makes it special, how it was made, any quiet imperfections."
          required
          error={errors.description}
        >
          <textarea
            rows={6}
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Tell buyers about your process..."
            className="
                    w-full resize-none rounded-md
                    border border-stone-300
                    bg-white px-4 py-3
                    outline-none transition
                    focus:border-stone-500
                  "
          />
        </ListingField>

        <ListingField
          label="Materials"
          hint="Comma-separated. e.g. 'Stoneware clay, food-safe matte glaze'"
          required
          error={errors.materials}
        >
          <input
            type="text"
            value={form.materials}
            onChange={(e) => updateField("materials", e.target.value)}
            placeholder="What it's actually made from "
            className="
              w-full rounded-md border
              border-stone-300 bg-white
              px-4 py-3 outline-none
              transition focus:border-stone-500
            "
          />
        </ListingField>
      </ListingSection>
    </div>
  );
}

export default DetailsSection;
