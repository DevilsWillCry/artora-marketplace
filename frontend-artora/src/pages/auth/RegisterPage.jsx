// pages/auth/RegisterPage.jsx
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { useNavigate } from "react-router";

import AuthShell from "@/components/auth/AuthShell";

import ArtoraInput from "@/components/ui/form/ArtoraInput";

import ArtoraButton from "@/components/ui/ArtoraButton";

import useAuth from "@/hooks/useAuth";
import { addUser, getUsers } from "@/storage/userStorage";

function RegisterPage({ density }) {
  const navigate = useNavigate();
  const users = getUsers();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  function submit(e) {
    e.preventDefault();
    const userFindedByEmail = users.find((user) => user.email.toLowerCase() === form.email.toLowerCase());

    const er = {};

    if (form.name.length < 3) {
      er.name = "At least 3 characters";
    }

    if (
      !form.email.includes("@") ||
      !form.email.includes(".") ||
      form.email.includes(" ")
    ) {
      er.email = "Por favor ingresa un correo válido";
    }

    if (form.password.length < 6) {
      er.password = "Al menos 6 caracteres";
    }

    if (userFindedByEmail) {
      er.email = "Correo ya registrado, intenta de nuevo";
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      const newUser = {
        ...form,
        id: uuidv4(),
        role: "customer",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 100)}`,
      };

      addUser(newUser);
      login(newUser);

      navigate("/");
    }
  }

  return (
    <AuthShell
      side="left"
      density={density}
      image="https://img.freepik.com/fotos-premium/bodegon-jarron-arcilla-blanca-mate-jarrones-varias-formas_639836-413.jpg"
      textHero="A veces, el mejor comienzo es un nombre que se siente tuyo."
    >
      <div className="max-w-105 animate-fade-right animate-once animate-ease-out">
        <div
          className="
            mb-4 font-mono text-[11px]
            uppercase tracking-[0.18em]
            text-terracotta
          "
        >
          · Unete al estudio ·
        </div>

        <h1
          className="
            font-serif text-[44px]
            leading-none tracking-[-0.02em]
            text-ink
          "
        >
          Crea una cuenta <em className="text-terracotta">tomara un minuto.</em>
        </h1>

        <p
          className="
            mt-3 mb-8
            font-serif text-base italic
            text-inkSoft
          "
        >
          Guarda tus artículos favoritos, sigue a tus creadores y compra más
          rápido la próxima vez.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-5">
          <ArtoraInput
            label="Nombre"
            type="text"
            value={form.name}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                name: value,
              }))
            }
            error={errors.name}
            placeholder="John Doe"
          />

          <ArtoraInput
            label="Correo electrónico"
            type="text"
            value={form.email}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                email: value,
              }))
            }
            error={errors.email}
            placeholder="hello@example.com"
          />

          <ArtoraInput
            label="Contraseña"
            type="password"
            value={form.password}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                password: value,
              }))
            }
            error={errors.password}
            placeholder="••••••••"
          />

          <ArtoraButton className="bg-terracotta" size="lg" type="submit">
            Crea una cuenta →
          </ArtoraButton>
        </form>

        <div
          className="
            mt-8 border-t border-rule
            pt-6 text-center
            font-serif italic text-inkSoft
          "
        >
          ¿Ya tienes una cuenta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="
              border-b border-terracotta
              text-terracotta
              hover:text-ink
              transition-all duration 300
            "
          >
            Inicia sesión →
          </button>
        </div>
      </div>
    </AuthShell>
  );
}

export default RegisterPage;
