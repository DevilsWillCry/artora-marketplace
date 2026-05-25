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
        title="LAS FOTOS"
        subtitle="Añade 5 fotos de tu pieza."
      >
        <ListingField
          label="FOTOS"
          required
          error={errors.images}
          hint="Luz natural funciona mejor."
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
        title="Los detalles"
        subtitle="Nómbralo y descríbelo."
      >
        <ListingField
          label="Titulo"
          hint="Sé específico: 'Taza de gres hecha a mano, esmalte de avena' es mejor que 'Taza'."
          required
          error={errors.title}
        >
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Jarrón de cerámica hecho a mano"
            className={`
                    w-full rounded-md border 
                    bg-white
                    px-4 py-3 outline-none
                    transition focus:border-stone-500
                    ${errors.title ? "border-red-700" : "border-stone-300"}
                  `}
          />
        </ListingField>

        <div className="grid grid-cols-2 gap-4">
          <ListingField
            label="Categoría"
            hint="¿Qué tipo de pieza es?"
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
            hint="¿Que estado tiene la pieza?"
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
          label="Descripción"
          hint="0 / 600 — ¿Qué lo hace especial? ¿Cómo se fabricó? ¿Tiene alguna imperfección sutil?"
          required
          error={errors.description}
        >
          <textarea
            rows={6}
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Cuentale a la gente que hace especial tu pieza..."
            className={`
                    w-full resize-none rounded-md
                    border
                    bg-white px-4 py-3
                    outline-none transition
                    focus:border-stone-500
                    ${errors.description ? "border-red-700" : "border-stone-300"}
                  `}
          />
        </ListingField>

        <ListingField
          label="Materiales"
          hint="Separados por comas. Por ejemplo: «Arcilla de gres, esmalte mate apto para uso alimentario»."
          required
          error={errors.materials}
        >
          <input
            type="text"
            value={form.materials}
            onChange={(e) => updateField("materials", e.target.value)}
            placeholder="De que esta hecha tu pieza..."
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
