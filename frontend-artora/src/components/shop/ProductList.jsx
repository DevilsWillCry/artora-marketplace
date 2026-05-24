// src/components/shop/ProductList.jsx

import { Link } from "react-router";
import { load } from "@/storage/storage";
import useCart from "@/hooks/useCart";

function ProductList({ products }) {
  const users = load("users", []);
  const categories = load("categories", []);
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product.id, product.price);
  };

  return (
    <div className="flex flex-col">
      {products.map((product, index) => (
        <div
          key={product.id}
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
          <Link to={`/product/${product.id}`}>
            <img
              src={
                product.images[0]?.url ||
                "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"
              }
              alt={product.title}
              className="
                
                w-full
                rounded-md
                object-cover
              "
            />
          </Link>

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
              {categories.find((c) => c.id === product.categoryId).name} ·{" "}
              {users.find((u) => u.id === product.artisanId).name}
            </p>

            <h3
              className="
                font-serif
                text-2xl
                text-stone-900
              "
            >
              {product.title}
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
              onClick={() => handleAddToCart(product)}
            >
              Añadir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
