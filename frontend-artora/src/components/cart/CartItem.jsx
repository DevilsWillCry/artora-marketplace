// src/components/cart/CartItem.jsx
import { load } from "@/storage/storage";
import useCart from "@/hooks/useCart";

export default function CartItem({ item }) {
  const products = load("products", []);
  const { updateQty, removeFromCart } = useCart();

  const product = products.find((p) => p.id === item.productId);

  if (!product) {
    return null;
  }

  return (
    <article
      className="
        flex gap-4
        border-b border-stone-200
        py-5
      "
    >
      {/* Image */}
      <div
        className="
          size-20 overflow-hidden
          rounded-lg
          bg-stone-200
          shrink-0
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full w-full object-cover
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <div
          className="
            flex items-start justify-between
            gap-3
          "
        >
          <div>
            <h3
              className="
                font-serif text-lg
                leading-tight
                text-stone-900
              "
            >
              {product.name}
            </h3>

            <p
              className="
                mt-1 text-sm
                text-stone-500
              "
            >
              {product.maker}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.productId)}
            className="
              text-lg text-stone-400
              transition-colors

              hover:text-red-500
            "
          >
            ×
          </button>
        </div>

        {/* Footer */}
        <div
          className="
            mt-4
            flex items-center justify-between
            gap-3
          "
        >
          {/* Qty */}
          <div
            className="
              flex items-center
              overflow-hidden rounded-md
              border border-stone-300
            "
          >
            <button
              onClick={() =>
                updateQty(
                  item.productId,
                  item.qty - 1,
                 (product.price * item.qty) - product.price,
                )
              }
              className="
                px-3 py-2
                text-stone-700
                transition-colors

                hover:bg-stone-100
              "
            >
              −
            </button>

            <span
              className="
                min-w-10 text-center
                text-sm
              "
            >
              {item.qty}
            </span>

            <button
              onClick={() =>
                updateQty(
                  item.productId,
                  item.qty + 1,
                  (product.price * item.qty) + product.price,
                )
              }
              className="
                px-3 py-2
                text-stone-700
                transition-colors

                hover:bg-stone-100
              "
            >
              +
            </button>
          </div>

          {/* Price */}
          <div
            className="
              font-serif text-lg
              text-stone-900
            "
          >
            ${(product.price * item.qty).toLocaleString("es-CO")}
          </div>
        </div>
      </div>
    </article>
  );
}
