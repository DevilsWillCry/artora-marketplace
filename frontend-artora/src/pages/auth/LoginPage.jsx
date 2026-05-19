// pages/auth/LoginPage.jsx

import { useState } from "react";

import { useNavigate } from "react-router";

import AuthShell from "@/components/auth/AuthShell";

import ArtoraInput from "@/components/ui/form/ArtoraInput";

import ArtoraButton from "@/components/ui/ArtoraButton";

import  useAuth from "@/hooks/useAuth";

import { getUsers } from "@/storage/userStorage";

function LoginPage({ density }) {
  const navigate = useNavigate();
  const users =  getUsers();
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

    const er = {};

    if (!form.email.includes("@")) {
      er.email = "Please enter a valid email";
    }

    if (form.password.length < 6) {
      er.password = "At least 6 characters";
    }

    if (!userFinded) {
      er.notFoundUser = "User not found, please register";
    }

    setErrors(er);

    if (Object.keys(er).length === 0) {
      if (userFinded) {
        const {password, ...safeUser} = userFinded;
        login(safeUser);
        navigate("/");
      }
    }
  }

  return (
    <AuthShell
      side="right"
      density={density}
      image="https://img.kwcdn.com/product/fancy/e319154d-9950-4c5b-8be9-65a576647a07.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
    >
      <div className="max-w-105">
        <div
          className="
            mb-4 font-mono text-[11px]
            uppercase tracking-[0.18em]
            text-terracotta
          "
        >
          · Welcome back ·
        </div>

        <h1
          className="
            font-serif text-[44px]
            leading-none tracking-[-0.02em]
            text-ink
          "
        >
          Sign in to <em className="text-terracotta">your studio.</em>
        </h1>

        <p
          className="
            mt-3 mb-8
            font-serif text-base italic
            text-inkSoft
          "
        >
          Pick up where you left off — saved pieces, past orders, and more.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-5">
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

          <ArtoraButton size="lg" type="submit">
            Sign in →
          </ArtoraButton>
        </form>

        <div
          className="
            mt-8 border-t border-rule
            pt-6 text-center
            font-serif italic text-inkSoft
          "
        >
          New to the studio?{" "}
          <button
            onClick={() => navigate("/register")}
            className="
              border-b border-terracotta
              text-terracotta
              hover:text-ink
              transition-all duration 300
            "
          >
            Make an account →
          </button>
        </div>
      </div>
    </AuthShell>
  );
}

export default LoginPage;
