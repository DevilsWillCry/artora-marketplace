// src/components/product/ProductGallery.jsx

import { useState } from "react";

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop";

function ProductGallery({ product }) {
  const images = product.images?.length
    ? product.images
    : [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-md
          bg-[#e9dfd1]
        "
      >
        <img
          src={images[activeImage]}
          alt={product.name}
          className="
            aspect-[4/5]
            w-full
            object-cover
          "
        />

        <button
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#f5f1ea]
            text-stone-700
            shadow-sm
            transition-colors
            hover:bg-white
          "
        >
          ♡
        </button>

        <div
          className="
            absolute
            bottom-4
            left-4
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-stone-500
          "
        >
          // {product.category?.toLowerCase()} — view{" "}
          {activeImage + 1}
        </div>
      </div>

      {/* Thumbnails */}
      <div
        className="
          mt-4
          grid
          grid-cols-4
          gap-3
        "
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`
              overflow-hidden
              rounded-md
              border-2
              transition-colors

              ${
                activeImage === index
                  ? "border-[#b8593a]"
                  : "border-transparent"
              }
            `}
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="
                aspect-square
                w-full
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </div>
  );

}export default ProductGallery;