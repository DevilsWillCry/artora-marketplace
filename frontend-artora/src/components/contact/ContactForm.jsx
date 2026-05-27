// src/components/contact/ContactForm.jsx

import { useState } from "react";

import ArtoraButton from "@/components/ui/ArtoraButton";

import Field from "./Field";

import { sendEmail } from "@/utils/emailjs";

import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Por favor dinos tu nombre";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Ingresa un correo valido, ";
    }

    if (form.message.trim().length < 8) {
      newErrors.message = "¿Algunas palabras más?";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (!validate()) return;

    sendEmail({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    })
      .then((result) => {
        setSent(true);
        if (result.status === 200) {
          setForm({
            name: "",
            email: "",
            subject: "General",
            message: "",
          });
          toast.success("Mensaje enviado", {
            position: "bottom-right",
            style: {
              background: "#000",
              color: "#fff",
              borderRadius: "10px",
            },
            duration: 1000,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        setSent(false);
        if (error.status === 400) {
          setLoading(false);
          setErrors(error.data);
          toast.error(error.data.message, {
            position: "bottom-right",
            style: {
              background: "#000",
              color: "#fff",
              borderRadius: "10px",
            },
            duration: 1000,
          });
        }
      });
    setSent(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        flex-col
        gap-6
      "
    >
      <div
        className="
          grid
          gap-5

          md:grid-cols-2
        "
      >
        <Field label="Tu nombre" error={errors.name}>
          <input
            type="text"
            value={form.name}
            placeholder="Linnea Costa"
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClass(errors.name)}
          />
        </Field>

        <Field label="Correo electrónico" error={errors.email}>
          <input
            type="email"
            value={form.email}
            placeholder="hello@example.com"
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field label="¿De qué se trata?">
        <div className="flex flex-wrap gap-3">
          {["General", "Ayuda con una orden", "Reclamos", "Otro"].map(
            (subject) => {
              const active = form.subject === subject;

              return (
                <button
                  key={subject}
                  type="button"
                  onClick={() => updateField("subject", subject)}
                  className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  transition-all

                  ${
                    active
                      ? "border-terracotta-dk bg-terracotta text-white"
                      : "border-stone-300 hover:bg-stone-100"
                  }
                `}
                >
                  {subject}
                </button>
              );
            },
          )}
        </div>
      </Field>

      <Field
        label="Tu mensaje"
        hint={`${form.message.length} / 500`}
        error={errors.message}
      >
        <textarea
          rows={7}
          maxLength={500}
          minLength={10}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`
            ${inputClass(errors.message)}
            min-h-[180px]
            resize-y
            font-serif
          `}
        />
      </Field>

      <div
        className="
          flex
          flex-col
          items-start
          gap-4

          sm:flex-row
          sm:items-center
        "
      >
        <ArtoraButton
          type="submit"
          disabled={sent}
          className="bg-black hover:bg-terracotta-dk transition-all duration-300"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Enviar"}
        </ArtoraButton>

        <span
          className="
            font-serif
            text-sm
            italic
            text-stone-500
          "
        >
          Solemos responder en el plazo de un día laborable.
        </span>
      </div>
    </form>
  );
}

function inputClass(error) {
  return `
    w-full
    rounded-xl
    border
    bg-[#faf7f2]
    px-4
    py-3
    text-sm
    outline-none
    transition-all

    placeholder:text-stone-400

    focus:border-stone-500
    focus:bg-white

    ${error ? "border-[#b8593a]" : "border-stone-300"}
  `;
}

export default ContactForm;
