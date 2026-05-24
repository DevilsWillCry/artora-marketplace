import { cn } from "@/lib/utils";
import useCart from "@/hooks/useCart";

function CartShopIcon({ size = "sm", className, ...props }) {
  const { cartCount } = useCart();
  return (
    <div className="relative" {...props} >
      <span className={`absolute -top-2 right-1 rounded-full bg-red-500 w-auto h-auto text-xs flex items-center justify-center text-white p-0.5 animate-pulse animate-infinite animate-duration-3200 animate-ease-out font-extrabold tracking-widest ${cartCount === 0 ? "hidden" : ""}`}>
        {cartCount}
      </span>
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
        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    </div>
  );
}

export default CartShopIcon;

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
