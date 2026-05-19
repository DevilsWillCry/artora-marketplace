// src/components/profile/ProfileHeader/ProfileHeader.jsx

import ProfileStats from "./ProfileStats";

import ArtoraButton from "@/components/ui/ArtoraButton";

import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

export default function ProfileHeader({ setTab }) {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <section
      className="
        border-b
        bg-cream
        px-10
        py-16
      "
    >
      <div
        className="
          grid
          grid-cols-[auto_1fr_auto]
          gap-8
          items-center
        "
      >
        <div
          className="
            relative
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-stone-200
            text-4xl
            italic
            text-stone-700
          "
          onMouseOver={() => setIsEditing(true)}
          onMouseOut={() => setIsEditing(false)}
        >
          <img
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-stone-200 hover:border-terracotta transition-all duration-300 cursor-pointer"
            src={user.avatar}
            alt={user.name}
          />

          <p
            className={`absolute top-1/2 right-0 -translate-y-1/2 bg-stone-300 tracking-widest text-xl text-stone-700 w-full h-full rounded-full transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center ${isEditing ? "opacity-100" : "opacity-0"}`}
          >
            Change avatar
          </p>
        </div>

        <div>
          <p
            className="
              mb-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-stone-500
            "
          >
            Member since 2026
          </p>

          <h1
            className="
              font-serif
              text-5xl
              leading-tight
            "
          >
            {user.name}
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              font-serif
              italic
              text-stone-600
            "
          >
            Quietly collecting hand-crafted pieces.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <ArtoraButton
            className="bg-terracotta"
            onClick={() => setTab("settings")}
          >
            Edit profile
          </ArtoraButton>

          <ArtoraButton className="border border-black" variant="ghost" onClick={handleLogout}>
            Logout
          </ArtoraButton>
        </div>
      </div>

      <ProfileStats setTab={setTab} />
    </section>
  );
}
