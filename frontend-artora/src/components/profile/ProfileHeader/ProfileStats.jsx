// src/components/profile/ProfileHeader/ProfileStats.jsx

import ProfileStatItem from "./ProfileStatItem";

export default function ProfileStats({ setTab }) {
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
        label="Purchased"
        value={14}
        onClick={() => setTab("purchased")}
      />

      <ProfileStatItem label="Sold" value={6} onClick={() => setTab("sold")} />

      <ProfileStatItem
        label="Saved"
        value={23}
        onClick={() => setTab("saved")}
      />

      <ProfileStatItem label="Following" value={8} />
    </div>
  );
}
