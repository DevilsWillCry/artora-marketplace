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
  console.log(user.avatar)

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
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-stone-200 hover:border-terracotta transition-all duration-300 cursor-pointer text-xs text-stone-700 text-center my-0 m-auto flex items-center justify-center"
            src={user.avatar}
            onError={(e) => (e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg")}
            alt={`${user.name} icon`}
          />

          <p
            className={`absolute top-1/2 right-0 -translate-y-1/2 bg-paper tracking-widest text-xl text-stone-700 w-full h-full rounded-full transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center ${isEditing ? "opacity-100" : "opacity-0"}`}
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
