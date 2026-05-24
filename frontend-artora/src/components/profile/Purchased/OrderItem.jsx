// src/components/profile/Purchased/OrderItem.jsx
import ArtoraButton from "@/components/ui/ArtoraButton";
import { useNavigate } from "react-router";
import useVisitUser from "@/hooks/useVisitUser";
import { load } from "@/storage/storage";

export default function OrderItem({ item }) {
  const categories = load("categories", []);
  const { visitUser } = useVisitUser();
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const category = categories.find(
    (category) => category.id === item.categoryId,
  );

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
        src={item.images?.[0].url}
        alt={item.title}
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
          {item.title}
        </h4>

        <p
          className="
            mt-1
            text-sm
            text-stone-500
          "
        >
          {category?.name || "Categoría desconocida"}
        </p>

        <p
          className="
            mt-1
            text-sm
            text-stone-500
          "
        >
          Adquirido/s: {item.quantity || "Categoría desconocida"}
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
        <span>{(item.price * item.quantity).toLocaleString("es-CO")} COP</span>

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
