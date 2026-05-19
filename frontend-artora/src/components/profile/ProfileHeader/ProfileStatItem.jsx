// src/components/profile/ProfileHeader/ProfileStatItem.jsx

export default function ProfileStatItem({ label, value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        text-center
      "
    >
      <h3
        className="
          font-serif
          text-4xl
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-1
          text-xs
          uppercase
          tracking-[0.2em]
          text-stone-500
        "
      >
        {label}
      </p>
    </button>
  );
}
