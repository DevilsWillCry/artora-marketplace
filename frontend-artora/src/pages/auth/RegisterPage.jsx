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
    const userFindedByEmail = users.find((user) => user.email === form.email);

    const er = {};

    if (form.name.length < 3) {
      er.name = "At least 3 characters";
    }

    if (
      !form.email.includes("@") ||
      !form.email.includes(".") ||
      form.email.includes(" ")
    ) {
      er.email = "Please enter a valid email";
    }

    if (form.password.length < 6) {
      er.password = "At least 6 characters";
    }

    if (userFindedByEmail) {
      er.email = "Email already in use";
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
    >
      <div className="max-w-105">
        <div
          className="
            mb-4 font-mono text-[11px]
            uppercase tracking-[0.18em]
            text-terracotta
          "
        >
          · Join the studio ·
        </div>

        <h1
          className="
            font-serif text-[44px]
            leading-none tracking-[-0.02em]
            text-ink
          "
        >
          Make an account. <em className="text-terracotta">Takes a minute.</em>
        </h1>

        <p
          className="
            mt-3 mb-8
            font-serif text-base italic
            text-inkSoft
          "
        >
          Save favourite pieces, follow your makers, and check out faster next
          time.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-5">
          <ArtoraInput
            label="Name"
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
            label="Email"
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
            label="Password"
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
            CREATE ACCOUNT
          </ArtoraButton>
        </form>

        <div
          className="
            mt-8 border-t border-rule
            pt-6 text-center
            font-serif italic text-inkSoft
          "
        >
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="
              border-b border-terracotta
              text-terracotta
              hover:text-ink
              transition-all duration 300
            "
          >
            Sing in →
          </button>
        </div>
      </div>
    </AuthShell>
  );
}

export default RegisterPage;
