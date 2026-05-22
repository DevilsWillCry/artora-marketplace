// src/pages/ProfilePage.jsx

import { useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileHeader/ProfileTabs";

import PurchasedTab from "@/components/profile/Purchased/PurchasedTab";
import SoldTab from "@/components/profile/Sold/SoldTab";
import SavedTab from "@/components/profile/Saved/SavedTab";
import SettingsTab from "@/components/profile/Settings/SettingsTab";
import { useParams } from "react-router";
import useAuth from "@/hooks/useAuth";
import { load } from "@/storage/storage";
import useVisitUser from "@/hooks/useVisitUser";
import { useEffect } from "react";

export default function ProfilePage() {
  const { id } = useParams();

  const users = load("users", []);
  const { user, logout } = useAuth();
  const { visitUser, watchingUserProfile } = useVisitUser();
  const [tab, setTab] = useState("purchased");

  useEffect(() => {
    if (parseInt(id) !== parseInt(user.id)) {
      const visitedUser = users.find((u) => u.id === parseInt(id));
      watchingUserProfile(visitedUser);
    } else {
      watchingUserProfile(null);
    }
  }, [id, user.id]);

  return (
    <main className="min-h-screen bg-stone-50 pt-10">
      <ProfileHeader setTab={setTab} watchingUser={visitUser || user} logout={logout} />

      <ProfileTabs
        tab={tab}
        isOwnProfile={parseInt(id) === parseInt(user.id)}
        setTab={setTab}
      />

      <section className="px-12 py-14">
        {tab === "purchased" && (
          <PurchasedTab watchingUser={visitUser || user} />
        )}

        {tab === "sold" && <SoldTab watchingUser={visitUser || user} />}

        {tab === "saved" && <SavedTab />}

        {tab === "settings" && <SettingsTab />}
      </section>
    </main>
  );
}
