// src/components/profile/ProfileHeader/ProfileTabs.jsx

import { PROFILE_TABS } from "@/lib/profileTabs";

export default function ProfileTabs({ tab, setTab, isOwnProfile }) {
  const visibleTabs = isOwnProfile
    ? PROFILE_TABS
    : PROFILE_TABS.filter((item) => item.public);

  return (
    <div
      className="
        sticky
        top-16
        z-20
        border-b
        bg-stone-50/90
        backdrop-blur
        px-12
      "
    >
      <div className="flex gap-1">
        {visibleTabs.map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)}
            className={`
              border-b-2
              px-5
              py-4
              text-sm
              transition-colors
              cursor-pointer
              hover:text-stone-900


              ${
                tab === item.key
                  ? `
                    border-stone-900
                    text-stone-900
                  `
                  : `
                    border-transparent
                    text-stone-500
                  `
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
