// src/pages/ProfilePage.jsx

import { useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileHeader/ProfileTabs";

import PurchasedTab from "@/components/profile/Purchased/PurchasedTab";
import SoldTab from "@/components/profile/Sold/SoldTab";
import SavedTab from "@/components/profile/Saved/SavedTab";
import SettingsTab from "@/components/profile/Settings/SettingsTab";
import { useParams } from "react-router";

export default function ProfilePage() {
  const { id } = useParams();
  const [tab, setTab] = useState("purchased");

  return (
    <main className="min-h-screen bg-stone-50 pt-20">
      <ProfileHeader setTab={setTab} />

      <ProfileTabs tab={tab} setTab={setTab} />

      <section className="px-12 py-14">
        {tab === "purchased" && <PurchasedTab />}

        {tab === "sold" && <SoldTab />}

        {tab === "saved" && <SavedTab />}

        {tab === "settings" && <SettingsTab />}
      </section>
    </main>
  );
}
