// src/components/cart/CartDrawer.jsx
import CartHeader from "./CartHeader";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import useCart from "@/hooks/useCart";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cart, totalAmount } = useCart();

  

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setCartOpen(false)}
        className={`
          fixed inset-0 z-110
          bg-black/40
          backdrop-blur-[2px]
          transition-opacity duration-300

          ${
            cartOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0
          flex h-screen w-full max-w-md flex-col
          border-l border-stone-200
          bg-[#f7f2ea]
          shadow-2xl
          transition-transform duration-300
          z-110

          md:max-w-lg

          ${cartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <CartHeader />

        <div
          className="
            flex-1 overflow-y-auto
            px-5 py-2
            md:px-6
          "
        >
          {cart.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="flex flex-col">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && <CartFooter total={totalAmount} />}
      </aside>
    </>
  );
}
