// src/components/profile/Purchased/OrderItem.jsx
import ArtoraButton from "@/components/ui/ArtoraButton";
import { useNavigate } from "react-router";
import useVisitUser from "@/hooks/useVisitUser";

export default function OrderItem({ item }) {
  const { visitUser } = useVisitUser();
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleBuyAgain = (id) => {
    console.log("Comprar de nuevo", id);
  };

  return (
    <div
      className="
        grid
        grid-cols-[80px_1fr_auto]
        items-center
        bg-cream
        border-b
        border-black
        last:border-none
        gap-5
        py-4
        px-5
      "
    >
      <img
        src={item.image}
        alt={item.name}
        className="
          aspect-square
          rounded-lg
          object-cover
        "
      />

      <div>
        <h4
          className="
            font-serif
            text-xl
          "
        >
          {item.name}
        </h4>

        <p
          className="
            mt-1
            text-sm
            text-stone-500
          "
        >
          {item.category}
        </p>
      </div>

      <div
        className="
          font-serif
          text-xl
          gap-3
          flex
          flex-row
          items-center
          justify-end
        "
      >
        <span>{item.price.toLocaleString("es-CO")} COP</span>

        <ArtoraButton
          className="justify-self-end bg-cream text-black border border-black cursor-pointer px-3 py-1 hover:bg-terracotta hover:text-white transition-all duration-300"
          onClick={() => handleViewDetails(item.id)}
        >
          Ver detalle
        </ArtoraButton>

        {!visitUser && (
          <ArtoraButton
            className="justify-self-end bg-cream text-black border border-black cursor-pointer px-3 py-1 hover:bg-terracotta hover:text-white transition-all duration-300"
            onClick={() => handleBuyAgain(item.id)}
          >
            Comprar de nuevo
          </ArtoraButton>
        )}
      </div>
    </div>
  );
}
