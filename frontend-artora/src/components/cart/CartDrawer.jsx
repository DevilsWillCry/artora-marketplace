// src/components/cart/CartDrawer.jsx
import CartHeader from "./CartHeader";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import useCart from "@/hooks/useCart";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import useAuth from "@/hooks/useAuth";
import { load, save } from "@/storage/storage";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { groupProductsByArtisan } from "@/utils/groupByArtisan";
import { checkoutWhatsapp } from "@/utils/checkoutWhatsapp";

export default function CartDrawer() {
  const { user } = useAuth();
  const { cartOpen, setCartOpen, cart, totalAmount, clearCart } = useCart();
  const orders = load("orders", []);
  const products = load("products", []);
  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);

  const [form, setForm] = useState({
    id: uuid(),
    artisanId: user?.id,
    items: [],
    total: 0,
    status: "pending",
    nameStatus: "Pendiente",
    createdAt: new Date().toISOString(),
  });

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    updateField("items", cart);
    updateField("total", totalAmount);
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.items.length === 0 || form.total === 0) {
      setErrors("El carrito esta vacio");
      return;
    }

    if (
      form.items.find((item) => {
        const { productId } = item;
        const product = products.find((product) => product.id === productId);
        return product.artisanId == user?.id;
      })
    ) {
      toast.error("Hay un producto propio agregado al carrito, eliminalo", {
        position: "bottom-left",
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "10px",
        },
        duration: 2000,
      });
      return;
    }

    if (!form.artisanId) {
      toast.error("Error al enviar la orden", {
        position: "bottom-left",
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "10px",
        },
        duration: 1000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }

    save("orders", [...orders, form]);
    setCartOpen(false);
    clearCart();
    setForm({
      id: uuid(),
      artisanId: user?.id,
      items: [],
      total: 0,
      status: "pending",
      nameStatus: "Pendiente",
      createdAt: new Date().toISOString(),
    });

    const grouped =  groupProductsByArtisan({
      items: form.items,
      products,
      users: load("users", []),
    });

    checkoutWhatsapp(grouped);


    navigate(`/profile/${user?.id}`);
  };

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
                <CartItem key={item.productId} item={item} />
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <CartFooter total={totalAmount} onSubmit={handleSubmit} />
        )}
      </aside>
    </>
  );
}
