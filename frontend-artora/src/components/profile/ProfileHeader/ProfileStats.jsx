// src/components/profile/ProfileHeader/ProfileStats.jsx

import ProfileStatItem from "./ProfileStatItem";
import useVisitUser from "@/hooks/useVisitUser";
import useAuth from "@/hooks/useAuth";

export default function ProfileStats({ setTab }) {
  const { user } = useAuth();
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
        value={
          visitUser
            ? visitUser.purchasedOrders.length
            : user.purchasedOrders.length
        }
        onClick={() => setTab("purchased")}
      />

      <ProfileStatItem
        label="Vendidos"
        value={visitUser ? visitUser.listings.length : user.listings.length}
        onClick={() => setTab("sold")}
      />

      {!visitUser && (
        <ProfileStatItem
          label="Guardado"
          value={
            visitUser
              ? visitUser.savedProducts.length
              : user.savedProducts.length
          }
          onClick={() => setTab("saved")}
        />
      )}

      <ProfileStatItem label="Siguiendo" value={8} />
    </div>
  );
}
