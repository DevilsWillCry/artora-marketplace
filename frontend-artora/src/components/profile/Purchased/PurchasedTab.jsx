// src/components/profile/Purchased/PurchasedTab.jsx
import OrderCard
  from "./OrderCard";

import useAuth from "@/hooks/useAuth";
import { load } from "@/storage/storage";


export default function PurchasedTab() {

  const { user } = useAuth();

  const orders = load("orders", []);

  const ordersFiltered = orders.filter(
    (order) => order.artisanId === user.id
  );
  


  return (
    <div className="space-y-5">
      {ordersFiltered.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}