// src/components/cart/CartHeader.jsx
import useCart from "@/hooks/useCart";

export default function CartHeader() {
  const { setCartOpen, cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header
      className="
        flex items-center justify-between
        border-b border-stone-200
        px-5 py-5
        md:px-6
      "
    >
      <div>
        <h2
          className="
            font-serif text-2xl
            text-stone-900
          "
        >
          Tu cesta
        </h2>

        <p
          className="
            mt-1 text-sm
            text-stone-500
          "
        >
          {totalItems} productos
        </p>
      </div>

      <button
        onClick={() => setCartOpen(false)}
        className="
          grid size-10 place-items-center
          rounded-full
          text-2xl text-stone-500
          transition-colors

          hover:bg-stone-200/60
          hover:text-stone-900
        "
      >
        ×
      </button>
    </header>
  );
}
