// src/components/product/RelatedProducts.jsx

import ProductCard from "@/components/product/ProductCard";

function RelatedProducts({ products }) {
  return (
    <section
      className="
      border-t
      border-black
        bg-[#f5f1ea]
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-20

          sm:px-6
          lg:px-8
        "
      >
        <h2
          className="
            mb-15
            text-center
            font-serif
            text-5xl
            text-stone-900
          "
        >
          También te puede <em className="text-terracotta">encantar</em>
        </h2>

        <div
          className="
            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
