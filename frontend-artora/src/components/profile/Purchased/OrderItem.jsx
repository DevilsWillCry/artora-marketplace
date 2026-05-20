// src/components/profile/Purchased/OrderItem.jsx

export default function OrderItem({
  item,
}) {
  return (
    <div
      className="
        grid
        grid-cols-[80px_1fr_auto]
        items-center
        border-b
        gap-5
        py-4
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
        "
      >
        ${item.price}
      </div>
    </div>
  );
}