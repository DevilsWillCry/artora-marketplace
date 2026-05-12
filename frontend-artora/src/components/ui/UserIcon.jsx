import { cn } from "@/lib/utils";
function UserIcon({ 
    size = "sm",
    className
 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(baseStyles, sizes[size], className)}
    >
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
    </svg>
  );
}

export default UserIcon;


/* ───────────────────────────────────────────── */

const baseStyles = `
  text-black
  flex items-center justify-center
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
