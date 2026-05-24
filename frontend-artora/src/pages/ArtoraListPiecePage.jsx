// pages/ArtoraListPiecePage.jsx

import { useState } from "react";

import PriceSection from "../components/listing/PriceSection";
import ShippingSection from "../components/listing/ShippingSection";
import ListingHeader from "../components/listing/ListingHeader";
import ListingPreview from "../components/listing/ListingPreview";
import { VisibilitySection } from "../components/listing/VisibilitySection";

import { useParams } from "react-router";
import DetailsSection from "../components/listing/DetailsSection";

import { load, save } from "@/storage/storage";

import { uploadCloudinary } from "@/utils/uploadCloudinary";

export default function ArtoraListPiecePage() {
  const products = load("products", []);
  const listings = load("listings", []);
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
    id: crypto.randomUUID(),
    title: "",
    price: 0,
    description: "",
    materials: "",
    categoryId: 1,
    artisanId: parseInt(id),
    conditionId: 1,
    stock: 1,
    status: "Active",
    nameStatus: "Activo",
    featured: true,
    shippingFrom: "Cali, Colombia",
    shippingMethod: "standard",
    returns: "30",
    year: new Date().getFullYear(),
    dimensions: { w: "", h: "", d: "" },
    images: [null, null, null, null, null],
    created_at: new Date().toISOString(),
    visibility: "public",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const uploadImageToCloudinary = async (files) => {
    if (!files)
      return {
        message: "No files",
        error: true,
      };
    /*
     */
    const promisesImages = Promise.all(
      Array.from(files).map((file) => {
        return {
          id: file?.id,
          type: file?.file.type,
          size: (file?.file.size / 1024).toFixed(2),
          url: uploadCloudinary(file?.file),
        };
      }),
    );

    return await promisesImages;
  };

  //console.log(form.photos.includes(null)); VERIFY IF ALL PHOTOS ARE UPLOADED

  const submit = async () => {
    const er = {};
    let imagesUploadedToCloud = [];

    if (form.title.trim().length < 3) {
      er.title = "Give your piece a name";
    }
    if (form.images.includes(null)) {
      er.images = "All images must be uploaded";
    } else {
      // if promise claudinary error
      imagesUploadedToCloud = await uploadImageToCloudinary(form.images);
      if (imagesUploadedToCloud.some((photo) => photo.error)) {
        er.images = "Try again, the image could not be uploaded";
      } else {
        updateField("images", imagesUploadedToCloud);
      }
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      setSubmitted(true);

      save("products", [...products, form]);

      save("listings", [
        ...listings,
        {
          id: crypto.randomUUID(),
          categoryId: form.categoryId,
          productId: form.id,
          artisanId: form.artisanId,
          views: 0,
          saves: 0,
          posted: new Date().toISOString(),
        },
      ]);
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
          <PriceSection
            form={form}
            setForm={setForm}
            errors={errors}
            updateField={updateField}
          />
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
