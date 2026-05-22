import { cn } from "@/lib/utils";
function UserIcon({ size = "sm", className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(baseStyles, sizes[size], className)}
    >
      <path d="M5 21a7 7 0 1114 0M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

export default UserIcon;

/* ───────────────────────────────────────────── */

const baseStyles = `
  text-black
  h-10
  hover:text-white
  transition-all duration-200
`;

/* ───────────────────────────────────────────── */

const sizes = {
  sm: `
    h-8 px-4
    text-xl
  `,

  md: `
    h-11 px-5
    text-[15px]
  `,

  lg: `
    h-12 px-6
    text-[15px]
  `,
};
