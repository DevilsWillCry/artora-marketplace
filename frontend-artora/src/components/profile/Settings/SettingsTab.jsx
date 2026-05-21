// src/components/profile/Settings/SettingsTab.jsx

import { useState } from "react";
import SettingsRow from "./SettingsRow";
import useAuth from "@/hooks/useAuth";

import { Toaster, toast} from "sonner";

export default function SettingsTab() {
  const { user, updateUser } = useAuth();

  const [editingField, setEditingField] = useState(null);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    city: user.city,
    accountType: user.accountType,
  });

  function handleSave() {
    updateUser(formData);
    setEditingField(null);
    toast.success("Cambios guardados", {
      duration: 2000,
      position: "bottom-right",
      style: {
        background: "#333",
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#333",
      },
    });
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h2
          className="
            font-serif
            text-4xl
            leading-tight
            text-stone-900
          "
        >
          Configuración de{" "}
          <span
            className="
              italic
              text-terracotta
            "
          >
            tu perfil
          </span>
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            font-serif
            text-base
            italic
            text-stone-500
          "
        >
          Gestiona tu perfil, privacidad, notificaciones, y preferencias de
          seguridad.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="
          rounded-2xl
          border
          bg-cream
          px-8
        "
      >
        <SettingsRow
          label="Nombre"
          onEditing={() => setEditingField("name")}
          isEditing={editingField === "name"}
          value={formData.name}
          onChange={(value) =>
            setFormData({
              ...formData,
              name: value,
            })
          }
        />

        <SettingsRow
          label="Correo electrónico"
          onEditing={() => setEditingField("email")}
          isEditing={editingField === "email"}
          value={formData.email}
          onChange={(value) =>
            setFormData({
              ...formData,
              email: value,
            })
          }
        />

        <SettingsRow
          label="Ubicación"
          onEditing={() => setEditingField("city")}
          isEditing={editingField === "city"}
          value={formData.city}
          onChange={(value) =>
            setFormData({
              ...formData,
              city: value,
            })
          }
        />

        <SettingsRow
          label="Contraseña"
          value="••••••••••"
          actionLabel="Cambiar"
        />

        <SettingsRow
          label="Cuenta"
          onEditing={() => setEditingField("accountType")}
          isEditing={editingField === "accountType"}
          value={user.accountType}
          onChange={(value) =>
            setFormData({
              ...formData,
              accountType: value,
            })
          }
        />

        <SettingsRow
          label="Eliminar cuenta"
          value="Eliminar mi cuenta"
          actionLabel="Eliminar"
          tone="danger"
          last
        />
      </form>

      <Toaster />
    </div>
  );
}
