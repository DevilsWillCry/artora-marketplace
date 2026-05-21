// src/components/contact/ContactForm.jsx

import { useState } from "react";

import ArtoraButton from "@/components/ui/ArtoraButton";

import Field from "./Field";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [sent, setSent] = useState(false);

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
      newErrors.name = "Please tell us your name";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "A valid email, please";
    }

    if (form.message.trim().length < 8) {
      newErrors.message = "A few more words?";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);

      setForm({
        name: "",
        email: "",
        subject: "General",
        message: "",
      });
    }, 3500);
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
        <Field
          label="Your name"
          error={errors.name}
        >
          <input
            type="text"
            value={form.name}
            placeholder="Linnea Costa"
            onChange={(event) =>
              updateField(
                "name",
                event.target.value,
              )
            }
            className={inputClass(errors.name)}
          />
        </Field>

        <Field
          label="Email"
          error={errors.email}
        >
          <input
            type="email"
            value={form.email}
            placeholder="hello@example.com"
            onChange={(event) =>
              updateField(
                "email",
                event.target.value,
              )
            }
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field label="What's it about?">
        <div className="flex flex-wrap gap-3">
          {[
            "General",
            "Order help",
            "Wholesale",
            "Press",
          ].map((subject) => {
            const active =
              form.subject === subject;

            return (
              <button
                key={subject}
                type="button"
                onClick={() =>
                  updateField(
                    "subject",
                    subject,
                  )
                }
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all

                  ${
                    active
                      ? "border-stone-900 bg-stone-900 text-white"
                      : "border-stone-300 hover:bg-stone-100"
                  }
                `}
              >
                {subject}
              </button>
            );
          })}
        </div>
      </Field>

      <Field
        label="Your message"
        hint={`${form.message.length} / 500`}
        error={errors.message}
      >
        <textarea
          rows={7}
          maxLength={500}
          value={form.message}
          onChange={(event) =>
            updateField(
              "message",
              event.target.value,
            )
          }
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
        <ArtoraButton type="submit">
          {sent
            ? "✓ Sent — thank you!"
            : "Send your message →"}
        </ArtoraButton>

        <span
          className="
            font-serif
            text-sm
            italic
            text-stone-500
          "
        >
          We usually reply within a working
          day.
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

    ${
      error
        ? "border-[#b8593a]"
        : "border-stone-300"
    }
  `;
}

export default ContactForm;