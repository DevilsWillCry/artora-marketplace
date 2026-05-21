// src/components/profile/ProfileHeader/ProfileStats.jsx

import ProfileStatItem from "./ProfileStatItem";
import useVisitUser from "@/hooks/useVisitUser";

export default function ProfileStats({ setTab }) {
  const { visitUser } = useVisitUser();
  return (
    <div
      className="
        mt-10
        flex
        flex-row
        justify-evenly
        items-center
        gap-8
        border-t
        pt-8
        
      "
    >
      <ProfileStatItem
        label="comprados"
        value={14}
        onClick={() => setTab("purchased")}
      />

      <ProfileStatItem label="Vendidos" value={6} onClick={() => setTab("sold")} />

      {!visitUser && (
        <ProfileStatItem
          label="Guardado"
          value={23}
          onClick={() => setTab("saved")}
        />
      )}

      <ProfileStatItem label="Siguiendo" value={8} />
    </div>
  );
}
