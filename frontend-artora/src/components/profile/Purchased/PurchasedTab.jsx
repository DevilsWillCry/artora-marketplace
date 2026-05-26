// src/components/profile/Purchased/PurchasedTab.jsx
import OrderCard from "./OrderCard";

import { load } from "@/storage/storage";
import EmptyState from "@/components/shop/EmptyState";


export default function PurchasedTab({ watchingUser }) {
  const orders = load("orders", []);


  const ordersFiltered = orders.filter(
    (order) => order.artisanId === watchingUser.id,
  );

  const spended = ordersFiltered.reduce(
    (total, order) => total + order.total,
    0,
  );



  return (
    <div className="space-y-5 ">
      <div className="mb-5">
        <h1 className="text-3xl tracking-wider">
          historial de compras de{" "}
          <em className="text-terracotta">{watchingUser.name}</em>
        </h1>
        <p className="text-stone-500 mt-2 text-lg tracking-wide">
          Aquí puedes ver todas las compras realizadas en Artora.
        </p>
        <div className="mt-2 it flex flex-row gap-2 items-start text-lg text-stone-500 tracking-wider">
          <p>
            {ordersFiltered.length}
            <em className="text-terracotta"> compras</em>
          </p>
          ·
          <p>
            {spended.toLocaleString("es-CO")} COP{" "}
            <em className="text-terracotta"> gastados</em>
          </p>
        </div>
      </div>
      {ordersFiltered.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}

      {ordersFiltered.length === 0 && <EmptyState />}
    </div>
  );
}
