// src/components/profile/Saved/SavedTab.jsx

import products from "@/data/products";

import ProductCard from "../../../components/product/ProductCard"

export default function SavedTab() {
  const savedProducts = products.slice(0, 3);

  return (
    <div>
      <div className="mb-10">
        <h2
          className="
            font-serif
            text-4xl
            leading-tight
            text-stone-900
          "
        >
          Pieces you've{" "}
          <span
            className="
              italic
              text-stone-600
            "
          >
            tucked away
          </span>
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            font-serif
            text-base
            italic
            text-stone-500
          "
        >
          Saved pieces for later — we’ll let you know if any become unavailable
          or go on sale.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-8

          md:grid-cols-2

          xl:grid-cols-5
          xl:h-full
        "
      >
        {savedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
