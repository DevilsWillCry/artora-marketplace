// components/home/Hero/HeroPill.jsx

function HeroPill({ icon, children }) {
  const icons = {
    leaf: <path d="M2 10c0-4 4-7 8-7 0 4-3 8-8 7zm0 0L7 5" />,

    hand: <path d="M3 7v3a4 4 0 008 0V4M5 7V3M7 7V2M9 7V3" />,

    ship: <path d="M2 7l3-3h6l3 3M2 7v3h12V7M2 7l-1 3h14l-1-3" />,
  };

  return (
    <span className="inline-flex items-center gap-1.5">
      <svg
        
        viewBox="0 0 16 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-terracotta w-5 h-5 max-md:w-8 max-md:h-8"
      >
        {icons[icon]}
      </svg>

      {children}
    </span>
  );
}

export default HeroPill;
