// pages/auth/RegisterPage.jsx
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { useNavigate } from "react-router";

import AuthShell from "@/components/auth/AuthShell";

import ArtoraInput from "@/components/ui/form/ArtoraInput";

import ArtoraButton from "@/components/ui/ArtoraButton";

import useAuth from "@/hooks/useAuth";
import { save, load } from "@/storage/storage";

import countries from "@/data/countries";
import ArtoraSelect from "../../components/ui/form/ArtoraSelect";
import { useEffect } from "react";

function RegisterPage({ density }) {
  const navigate = useNavigate();
  const users = load("users", []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    country: "", 
    city: "",
  });

  const [cities, setCities] = useState([]);

  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  function submit(e) {
    e.preventDefault();
    const userFindedByEmail = users.find(
      (user) => user.email.toLowerCase() === form.email.toLowerCase(),
    );

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
        savedProducts: [],
        purchasedOrders: [],
        listings: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        followers: [],
      };

      save("users", [...users, newUser]);
      login(newUser);
      navigate("/");
      setCities([]);
    }
  }

  useEffect(() => {
    const getCity = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            iso2: form.country,
          }),
        },
      );

      return response.json();
    };

    getCity().then((data) => {
      setCities(data.data);
    });
  }, [form.country]);




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

          <ArtoraSelect
            options={countries}
            name="Countries"
            id="location-countries"
            hint="Selecciona el país"
            value={form.country}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                country: value,
              }))
            }
          />

          {cities && (
            <ArtoraSelect
              options={cities}
              name="Cities"
              id="location-cities"
              hint="Selecciona tu ciudad"
              value={form.city}
              onChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  city: value,
                }))
              }
            />
          )}

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
