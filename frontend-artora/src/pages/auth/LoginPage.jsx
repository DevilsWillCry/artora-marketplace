// pages/auth/LoginPage.jsx

import { useState } from "react";

import { useNavigate } from "react-router";

import AuthShell from "@/components/auth/AuthShell";

import ArtoraInput from "@/components/ui/form/ArtoraInput";

import ArtoraButton from "@/components/ui/ArtoraButton";

import useAuth from "@/hooks/useAuth";

import { getUsers } from "@/storage/userStorage";

import { Toaster, toast } from "sonner";

function LoginPage({ density }) {
  const navigate = useNavigate();
  const users = getUsers();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    notFoundUser: "",
  });

  const [errors, setErrors] = useState({});

  function submit(e) {
    e.preventDefault();
    const userFinded = users.find(
      (user) => user.email === form.email && user.password === form.password,
    );

    console.log(userFinded);

    const er = {};

    if (!form.email.includes("@")) {
      er.email = "Por favor ingresa un correo válido";
    }

    if (form.password.length < 6) {
      er.password = "Al menos 6 caracteres";
    }

    if (!userFinded) {
      er.notFoundUser = "Usuario no encontrado, intenta de nuevo o registrate";
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      if (userFinded) {
        const { password, ...safeUser } = userFinded;
        login(safeUser);
        
        toast.success("¡Inicio de sesión exitoso!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  }

  return (
    <AuthShell
      side="right"
      density={density}
      image="https://img.kwcdn.com/product/fancy/e319154d-9950-4c5b-8be9-65a576647a07.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
      textHero="Volver a un nombre que conoces se siente como algo pequeño y apropiado."
    >
      <div className="max-w-105 animate-fade-left animate-once animate-ease-out">
        <div
          className="
            mb-4 font-mono text-xs
            uppercase tracking-[0.18em]
            text-terracotta
          "
        >
          · Bienvenido de nuevo ·
        </div>

        <h1
          className="
            font-serif text-[44px]
            leading-none tracking-[-0.02em]
            text-ink
          "
        >
          Ingresa a <em className="text-terracotta">tu espacio.</em>
        </h1>

        <p
          className="
            mt-3 mb-8
            font-serif text-base italic
            text-inkSoft
          "
        >
          Retoma donde lo dejaste: guarda tus artículos, consulta tus pedidos
          anteriores y mucho más.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-5">
          {errors.notFoundUser && (
            <p className="text-red-500">{errors.notFoundUser}</p>
          )}
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

          <ArtoraButton
            size="lg"
            type="submit"
            className="bg-terracotta hover:bg-black transition-all duration-300"
          >
            Iniciar sesión →
          </ArtoraButton>
        </form>

        <div
          className="
            mt-8 border-t border-rule
            pt-6 text-center
            font-serif italic text-inkSoft
          "
        >
          ¿Nuevo en Artora?{" "}
          <button
            onClick={() => navigate("/register")}
            className="
              border-b border-terracotta
              text-terracotta
              hover:text-ink
              transition-all duration 300
              
            "
          >
            Crea una cuenta →
          </button>
        </div>
      </div>
      <Toaster position="bottom-right" theme="" />
    </AuthShell>
  );
}

export default LoginPage;
