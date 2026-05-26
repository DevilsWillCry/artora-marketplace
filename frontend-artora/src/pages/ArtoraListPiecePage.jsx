// pages/ArtoraListPiecePage.jsx

import { useState } from "react";
import PriceSection from "@/components/listing/PriceSection";
import ShippingSection from "@/components/listing/ShippingSection";
import ListingHeader from "@/components/listing/ListingHeader";
import ListingPreview from "@/components/listing/ListingPreview";
import { VisibilitySection } from "@/components/listing/VisibilitySection";
import DetailsSection from "@/components/listing/DetailsSection";
import { load, save } from "@/storage/storage";
import { uploadCloudinary } from "@/utils/uploadCloudinary";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

export default function ArtoraListPiecePage() {
  const products = load("products", []);
  const listings = load("listings", []);
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: crypto.randomUUID(),
    title: "",
    price: 0,
    description: "",
    materials: "",
    categoryId: 1,
    artisanId: id,
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

  const navigateTo = (path, message) => {
    if (message === "cancel") {
      toast.error("Operación cancelada", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });
      setTimeout(() => {
        navigate(`/profile/${id}`);
      }, 1000);
    }
  };

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const uploadImageToCloudinary = async (files) => {
    if (!files) {
      return {
        message: "No files",
        error: true,
      };
    }

    const promisesImages = await Promise.all(
      Array.from(files).map(async (file) => {
        return {
          id: file?.id,
          type: file?.file.type,
          size: (file?.file.size / 1024).toFixed(2),
          url: await uploadCloudinary(file?.file),
        };
      }),
    );

    return promisesImages;
  };

  const submit = async () => {
    event.preventDefault();
    const er = {};
    let updatedForm = form;

    if (form.title.trim().length < 3) {
      er.title = "Al menos 10 caracteres";
    }

    if (form.description.trim().length < 50) {
      er.description = "Al menos 50 caracteres";
    }

    if (form.materials.trim().length < 20) {
      er.materials = "Al menos 20 caracteres";
    }

    if (form.price <= 0 || isNaN(form.price)) {
      er.price = "Precio no válido, debe ser un número entero mayor que 0";
    }

    if (form.images.includes(null)) {
      er.images = "Todas las fotos son requeridas";
    }

    const imagesUploadedToCloud =
      Object.keys(er).length === 0
        ? await uploadImageToCloudinary(form.images)
        : undefined;

    if (!imagesUploadedToCloud) {
      imagesUploadedToCloud?.some((image) => image?.error)
        ? (er.images = "Intenta de nuevo, algunas fotos no pudieron subirse")
        : "";
    } else {
      updatedForm = {
        ...form,
        images: imagesUploadedToCloud,
      };
      setForm(updatedForm);
    }

    if (er && Object.keys(er).length > 0) {
      setLoading(false);
      toast.error("Ha ocurrido un error, revisa tu información", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });
      return;
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      setSubmitted(true);

      save("products", [...products, updatedForm]);

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

      toast.success("Listado creado con éxito", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });
      setTimeout(() => {
        navigate(`/shop`);
      }, 1000);
    }
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
          <PriceSection form={form} updateField={updateField} errors={errors} />
        </div>

        {/* LEFT - SHIPPING */}
        <ShippingSection form={form} updateField={updateField} />

        {/* LEFT - VISIBILITY */}
        <VisibilitySection
          form={form}
          updateField={updateField}
          submit={submit}
          submitted={submitted}
          errors={errors}
          loading={loading}
          setLoading={setLoading}
          navigateTo={navigateTo}
        />
      </section>
    </main>
  );
}
