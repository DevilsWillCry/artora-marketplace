// src/components/profile/Purchased/OrderCard.jsx
import StatusPill from "@/components/profile/shared/StatusPill";

import OrderItem from "./OrderItem";

import { load } from "@/storage/storage";

export default function OrderCard({ order }) {
  const products = load("products", []);

  const productsFiltered = order.items.map((item) => {
    return products.find((product) => product.id === item);
  });


  return (
    <article
      className="
        overflow-hidden
        rounded-xl
        border
        bg-white
      "
    >
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          px-6
          py-5
        "
      >
        <div>
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
        </div>

        <StatusPill status={order.status} />
      </header>

      <div className="p-8 bg-cream">
        {productsFiltered.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}
