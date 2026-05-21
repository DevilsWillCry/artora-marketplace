// src/components/profile/Purchased/OrderCard.jsx
import StatusPill from "@/components/profile/shared/StatusPill";

import OrderItem from "./OrderItem";

import { load } from "@/storage/storage";

import useVisitUser from "@/hooks/useVisitUser";

export default function OrderCard({ order }) {
  const products = load("products", []);
  const { visitUser } = useVisitUser();
  console.log("USER", visitUser);

  const productsFiltered = order.items.map((item) => {
    return products.find((product) => product.id === item);
  });

  return (
    <article
      className="
        overflow-hidden
        rounded-xl
        border
        border-black
        bg-white
        shadow-xl

      "
    >
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          px-5
          py-5
        "
      >
        <div className="flex flex-row gap-3">
          <p
            className="
              text-xs
              uppercase
              text-ink
              tracking-widest
            "
          >
            ORDEN #{order.id}
          </p>

          <p
            className="
            text-xs
            uppercase
            text-ink
            tracking-widest
          "
          >
            {order.createdAt}
          </p>
          {!visitUser && (
            <p
              className="
              text-xs
              uppercase
              text-ink
              tracking-widest
            "
            >
              TOTAL: {order.total.toLocaleString("es-CO")} COP
            </p>
          )}
        </div>
        <div className="flex flex-row gap-2 items-center text-sm">
          {!visitUser && (
              <button className="border-b border-black hover:text-terracotta tracking-widest transition-all duration-300 cursor-pointer">
                Ver factura →
              </button>
            ) && (
              <StatusPill status={order.status} nameStatus={order.nameStatus} />
            )}
        </div>
      </header>

      <div>
        {productsFiltered.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}
