// src/components/profile/ProfileHeader/ProfileStatItem.jsx

export default function ProfileStatItem({ label, value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        text-center
        cursor-pointer
        hover:text-terracotta
        transition-colors
        duration-300
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
