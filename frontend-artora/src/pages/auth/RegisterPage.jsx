// pages/auth/RegisterPage.jsx
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { useNavigate } from "react-router";

import AuthShell from "@/components/auth/AuthShell";

import ArtoraInput from "@/components/ui/form/ArtoraInput";

import ArtoraButton from "@/components/ui/ArtoraButton";

import useAuth from "@/hooks/useAuth";
import { save, load } from "@/storage/storage";

//import countries from "@/data/countries";
import ArtoraSelect from "@/components/ui/form/ArtoraSelect";
import { useEffect } from "react";

import { Toaster, toast } from "sonner";
import { MoveLeft } from "lucide-react";

import phoneCodes from "@/data/phoneCodes";

function RegisterPage({ density }) {
  const navigate = useNavigate();
  const users = load("users", []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneCode: "",
    phone: "",
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

    if (form.city.length === 0) {
      er.city = "Por favor ingresa tu ciudad";
    }

    if (form.country.length === 0) {
      er.country = "Por favor ingresa tu país";
    }

    if (form.phone.length === 0) {
      er.phone = "Por favor ingresa tu número de teléfono";
    }

    if (form.phoneCode.length === 0) {
      er.phoneCode = "Por favor ingresa tu código de país";
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      const newUser = {
        ...form,
        id: uuidv4(),
        description: "¡Hola! Soy nuevo en Artora.",
        accountType: "Public",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 100)}`,
        role: "customer",
        savedProducts: [],
        purchasedOrders: [],
        listings: [],
        followers: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      save("users", [...users, newUser]);
      login(newUser);
      setCities([]);

      toast.success("¡Registro exitoso!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }

  useEffect(() => {
    if (!form.country) {
      return;
    }
    const getCity = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: form.country,
          }),
        },
      );

      return response.json();
    };

    getCity().then((data) => {
      setCities(data.data);
    });
  }, [form.country]);

  useEffect(() => {
    if (form.phoneCode.length === 0) {
      return;
    }
    const getCity = phoneCodes.find(
      (item) => item.dial_code === form.phoneCode,
    );

    setForm({
      ...form,
      country: getCity.name,
    });
  }, [form.phoneCode]);

  return (
    <AuthShell
      side="left"
      density={density}
      image="https://img.freepik.com/fotos-premium/bodegon-jarron-arcilla-blanca-mate-jarrones-varias-formas_639836-413.jpg"
      textHero="A veces, el mejor comienzo es un nombre que se siente tuyo."
    >
      <Toaster position="bottom-right" />

      <MoveLeft
        className="absolute top-5  left-10 animate-fade-left animate-once  animate-duration-1000 animate-ease-out animate-fill-backwards cursor-pointer"
        onClick={() => navigate("/")}
      />

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

          <section className="flex flex-col  justify-center gap-3">
            <ArtoraSelect
              options={phoneCodes}
              name="phone-codes"
              id="phone-codes"
              hint="Prefijo"
              value={form.phoneCode}
              onChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  phoneCode: value,
                }))
              }
              error={errors.phoneCode}
            />
            <div>
              <input
                type="text"
                className="h-11 w-full rounded-md border border-rule bg-paper px-4 text-[15px] text-ink items-center"
                placeholder="XXXXXXX..."
                error={errors.phone}
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>
          </section>

          {form.phoneCode && (
            <span className="h-11 w-full rounded-md border border-rule bg-paper px-4 text-[15px] text-ink items-center flex">
              {form.country}
            </span>
          )}

          {form.country && (
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
              error={errors.city}
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
