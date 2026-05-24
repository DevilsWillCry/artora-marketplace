// pages/ArtoraListPiecePage.jsx

import { useState } from "react";

import PriceSection from "../components/listing/PriceSection";
import ShippingSection from "../components/listing/ShippingSection";
import ListingHeader from "../components/listing/ListingHeader";
import ListingPreview from "../components/listing/ListingPreview";
import { VisibilitySection } from "../components/listing/VisibilitySection";

import { useParams } from "react-router";
import DetailsSection from "../components/listing/DetailsSection";

export default function ArtoraListPiecePage() {
  const { id } = useParams();

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
    price: 0,
    description: "",
    materials: "",
    categoryId: 1,
    artisanId: parseInt(id),
    conditionId: 1,
    quantity: 1,
    shippingFrom: "Cali, Colombia",
    shippingMethod: "standard",
    returns: "30",
    year: new Date().getFullYear(),
    dimensions: { w: "", h: "", d: "" },
    photos: [null, null, null, null, null],
    created_at: new Date().toISOString(),
    visibility: "public",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const uploadImageToCloudinaryTest = async (files) => {
    if (!files)
      return {
        message: "No files",
        error: true,
      };
    /*
     */
    const promisesPhotos = Promise.all(
      Array.from(files).map((file) => {
        return {
          id: file?.id,
          type: file?.file.type,
          size: (file?.file.size / 1024).toFixed(2),
          //url: uploadCloudinary(file.file),
        };
      }),
    );

    return await promisesPhotos;
  };

  //console.log(form.photos.includes(null)); VERIFY IF ALL PHOTOS ARE UPLOADED

  const submit = async () => {
    const er = {};

    if (form.title.trim().length < 3) {
      er.title = "Give your piece a name";
    }

    if (form.photos.includes(null)) {
      er.photos = "All photos must be uploaded";
    }

    // if promise claudinary error
    const photosUploadedToCloud = await uploadImageToCloudinaryTest(
      form.photos,
    );

    if (photosUploadedToCloud.some((photo) => photo.error)) {
      er.photos = "Try again, the image could not be uploaded";
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      setSubmitted(true);
      console.log(form);
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
          {/* LEFT - DETAILS AND PHOTOS SECTION*/}
          <DetailsSection
            form={form}
            setForm={setForm}
            errors={errors}
            updateField={updateField}
          />

          {/* RIGHT - PREVIEW */}
          <ListingPreview form={form} />

          {/* LEFT - PRICE */}
          <PriceSection form={form} setForm={setForm} errors={errors} updateField={updateField} />
        </div>

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
