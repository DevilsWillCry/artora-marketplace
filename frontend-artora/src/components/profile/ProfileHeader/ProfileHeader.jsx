// src/components/profile/ProfileHeader/ProfileHeader.jsx

import ProfileStats from "./ProfileStats";

import ArtoraButton from "@/components/ui/ArtoraButton";

import LocationIcon from "@/assets/icons/profile-location.svg";
import CalendarIcon from "@/assets/icons/profile-calendar.svg";
import MailIcon from "@/assets/icons/profile-mail.svg";

import { useState } from "react";

import useVisitUser from "@/hooks/useVisitUser";

export default function ProfileHeader({ setTab, watchingUser, logout }) {
  const [isEditing, setIsEditing] = useState(false);

  const { visitUser } = useVisitUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <section
      className="
        border-b
        bg-cream
        px-10
        py-10
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
            src={watchingUser.avatar}
            onError={(e) =>
              (e.target.src =
                "https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg")
            }
            alt={`${watchingUser.name} icon`}
          />

          <p
            className={`absolute top-1/2 right-0 -translate-y-1/2 bg-paper tracking-widest text-xl text-stone-700 w-full h-full rounded-full transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center ${isEditing ? "opacity-100" : "opacity-0"}`}
          >
            Cambiar foto
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
            Miembro desde 2026
          </p>

          <h1
            className="
              font-serif
              text-5xl
              leading-tight
            "
          >
            {watchingUser.name}
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
            {watchingUser.description}
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <div className="flex items-center gap-2">
              <img className="w-3" src={LocationIcon} alt="Email" />
              <span className="text-xs text-ink tracking-widest">
                {watchingUser.location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-3" src={CalendarIcon} alt="Email" />
              <span className="text-xs text-ink tracking-widest">
                {watchingUser.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-3" src={MailIcon} alt="Email" />
              <span className="text-xs text-ink tracking-widest">
                {watchingUser.createdAt.split("T")[0]}
              </span>
            </div>
          </div>
        </div>

        {!visitUser && (
          <div className="flex flex-col gap-3">
            <ArtoraButton
              className="bg-terracotta hover:bg-terracotta-dk transition-all duration-300 text-white"
              onClick={() => setTab("settings")}
            >
              Editar perfil
            </ArtoraButton>

            <ArtoraButton
              className="border border-black"
              variant="ghost"
              onClick={handleLogout}
            >
              Cerrar sesión
            </ArtoraButton>
          </div>
        )}
      </div>

      <ProfileStats setTab={setTab} />
    </section>
  );
}

