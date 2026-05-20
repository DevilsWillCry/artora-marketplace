// src/components/profile/Settings/SettingsTab.jsx

import SettingsRow
  from "./SettingsRow";

export default function SettingsTab() {
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
          Account{" "}

          <span
            className="
              italic
              text-stone-600
            "
          >
            settings
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
          Manage your profile,
          privacy, notifications,
          and security preferences.
        </p>
      </div>

      <div
        className="
          rounded-2xl
          border
          bg-white
          px-8
        "
      >
        <SettingsRow
          label="Display name"
          value="Mira Holt"
        />

        <SettingsRow
          label="Email"
          value="mira@holt.studio"
        />

        <SettingsRow
          label="Location"
          value="Lisbon, Portugal"
        />

        <SettingsRow
          label="Password"
          value="••••••••••"
          actionLabel="Change"
        />

        <SettingsRow
          label="Newsletter"
          value="Subscribed · monthly studio letter"
          actionLabel="Manage"
        />

        <SettingsRow
          label="Two-factor authentication"
          value="Disabled — recommended for sellers"
          actionLabel="Enable"
          tone="warning"
        />

        <SettingsRow
          label="Delete account"
          value="Permanently remove your account and all data."
          actionLabel="Delete"
          tone="danger"
          last
        />
      </div>
    </div>
  );
}