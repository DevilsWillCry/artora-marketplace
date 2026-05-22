// pages/ArtoraListPiecePage.jsx

import { useState } from "react";

import ListingSection from "@/components/listing/ListingSection";

import ListingField from "@/components/listing/ListingField";
import PhotoUploader from "@/components/listing/PhotoUploader";
import PriceSection from "../components/listing/PriceSection";
import ShippingSection from "../components/listing/ShippingSection";
import ListingHeader from "../components/listing/ListingHeader";
import ListingPreview from "../components/listing/ListingPreview";
import { VisibilitySection } from "../components/listing/VisibilitySection";

export default function ArtoraListPiecePage() {
  // TOMAR COMO REFERENCIA ESTE OBJETO AL ENVIAR EL PRODUCTO,
  // NECESITAMOS categoryId, productId, artisanId, etc..
  /*

    const newProduct = {
    id: crypto.randomUUID(),

    name: form.title,
    category: form.category,
    maker: form.maker || "Independent Studio",

    price: Number(form.price),

    desc: form.description,

    materials: form.materials,

    condition: form.condition,

    quantity: form.quantity,

    shippingFrom: form.shippingFrom,

    shippingMethod: form.shippingMethod,

    returns: form.returns,

    year: form.year,

    dimensions: form.dimensions,

    photos: form.photos,

    createdAt: new Date().toISOString(),
  };
   */
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    materials: "",
    condition: "Excellent", //Añadir condiciones
    quantity: 1,
    shippingFrom: "Cali, Colombia",
    shippingMethod: "standard",
    returns: "30",
    year: "",
    dimensions: { w: "", h: "", d: "" },
    photos: [null, null, null, null, null],
    created_at: new Date().toISOString(),
  });

  console.log(form);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    const er = {};

    if (form.title.trim().length < 3) {
      er.title = "Give your piece a name";
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      setSubmitted(true);
    }
  };

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#faf6ee]">
      <ListingHeader completeness={1} />

      <section className="px-12 py-12">
        <div
          className="
            grid grid-cols-[1fr_360px]
            gap-8
          "
        >
          {/* LEFT - PHOTOS SECTION*/}
          <div>
            <ListingSection
              num="1"
              title="The photos"
              subtitle="Add up to five images."
            >
              <ListingField
                label="Photos"
                required
                error={errors.photos}
                hint="Natural light works best."
              >
                <PhotoUploader
                  photos={form.photos}
                  setPhotos={(photos) =>
                    setForm((prev) => ({
                      ...prev,
                      photos,
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
              <ListingField label="Title" required error={errors.title}>
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

              <ListingField
                label="Description"
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
            </ListingSection>
          </div>

          {/* RIGHT - PREVIEW */}
          <ListingPreview form={form} />
        </div>
        <PriceSection form={form} setForm={setForm} errors={errors} />
        <ShippingSection form={form} setForm={setForm} />

        <VisibilitySection
          form={form}
          setForm={setForm}
          submit={submit}
          submitted={submitted}
        />
      </section>
    </main>
  );
}
