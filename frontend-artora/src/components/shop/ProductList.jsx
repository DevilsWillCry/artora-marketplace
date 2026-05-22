// src/components/shop/ProductList.jsx

import { Link } from "react-router";

function ProductList({ products }) {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className={`
            grid
            gap-6
            border-b
            border-stone-300
            py-6
            px-3
            transition-colors
            hover:bg-[#efe8dd]/50

            md:grid-cols-[140px_1fr_auto]
            md:items-center

            ${index === 0 ? "border-t" : ""}
          `}
        >
          <img
            src={
              product.image ||
              "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"
            }
            alt={product.name}
            className="
              
              w-full
              rounded-md
              object-cover
            "
          />

          <div>
            <p
              className="
                mb-2
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-stone-400
              "
            >
              {product.category} · {product.maker}
            </p>

            <h3
              className="
                font-serif
                text-2xl
                text-stone-900
              "
            >
              {product.name}
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                font-serif
                italic
                leading-relaxed
                text-stone-600
              "
            >
              {product.description}
            </p>
          </div>

          <div
            className="
              flex
              items-center
              justify-between

              md:flex-col
              md:items-end
            "
          >
            <span
              className="
                font-serif
                text-3xl
                text-stone-900
              "
            >
              ${product.price}
            </span>

            <button
              className="
                mt-4
                rounded-md
                border
                border-stone-300
                px-4
                py-2
                text-sm
                transition-colors
                hover:bg-stone-900
                hover:text-white
              "
            >
              Añadir
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
