// src/components/product/ProductCard.jsx
import ArtoraButton from "@/components/ui/ArtoraButton";
import categories from "@/data/categories";
import ShoppingCart from "../../assets/icons/ecommerce-cart.min.svg";

function ProductCard({ product, onView, onAdd }) {
  const category = categories.find(
    (category) => category.id === product.categoryId,
  );
  return (
    <article
      className="
        group 
        flex flex-col 
        items-start justify-between
        gap-4
        p-3
        overflow-hidden 
        rounded-md
        border border-rule
        bg-cream
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(60,40,20,0.10)]
      "
    >
      {/* Image */}
      <button
        onClick={onView}
        className="
          relative 
          block 
          aspect-4/5
          overflow-hidden
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full w-full object-cover
            transition-transform duration-500s
            group-hover:scale-[1.03]
            rounded-lg
          "
        />

        {/* Category badge */}
        <span
          className="
            absolute top-3 left-3
            rounded-full
            bg-paper/90
            px-3 py-1
            text-[10px]
            uppercase tracking-[0.14em]
            text-ink
            backdrop-blur-sm
          "
        >
          {category.name}
        </span>
      </button>

      {/* Content */}
      <div className="space-y-4 p-5 w-full">
        {/* Product info */}
        <div>
          <button
            onClick={onView}
            className="
              text-left
              transition-opacity
              hover:opacity-70
            "
          >
            <h3
              className="
                font-serif text-[22px]
                font-normal
                tracking-[-0.01em]
                text-ink
              "
            >
              {product.name}
            </h3>
          </button>

          <p
            className="
              mt-1 text-sm
              text-inkMute
            "
          >
            Hecho por <em className="font-semibold">{product.artisan}</em>
          </p>

          <p
            className="
              mt-3 line-clamp-2
              text-[15px]
              leading-relaxed
              text-inkSoft
            "
          > 
            {product.description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            flex 
            flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <div
            className="
              font-serif text-[22px]
              text-ink
            "
          >
            ${product.price}
          </div>

          <ArtoraButton
            className="flex flex-row items-center gap-2"
            size="sm"
            onClick={onAdd}
          >
            Añadir al{" "}
            <img className="w-5" src={ShoppingCart} alt="Shopping Cart Icon" />
          </ArtoraButton>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
