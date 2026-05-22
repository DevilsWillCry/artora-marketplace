// src/components/cart/CartEmpty.jsx
import { useNavigate } from "react-router";
import useCart from "@/hooks/useCart";

export default function CartEmpty() {
  const navigate = useNavigate();
  const { setCartOpen } = useCart();

  function handleBrowse() {
    setCartOpen(false);
    navigate("/shop");
  }

  return (
    <div
      className="
        flex h-full flex-col items-center
        justify-center text-center
      "
    >
      <p
        className="
          font-serif text-xl italic
          text-stone-500
        "
      >
        Tu cesta está silenciosamente vacía.
      </p>

      <button
        onClick={handleBrowse}
        className="
          mt-6
          rounded-md
          bg-[#b85f3d]
          px-5 py-3
          text-sm font-medium uppercase
          tracking-[0.15em]
          text-white
          transition-opacity

          hover:opacity-90
        "
      >
        Navegar por la tienda
      </button>
    </div>
  );
}
