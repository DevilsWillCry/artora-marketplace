// src/components/product/ProductInfo.jsx

import { useState } from "react";

const tabs = [
  {
    key: "details",
    label: "Detalles",
  },
  {
    key: "process",
    label: "Cómo esta hecho",
  },
  {
    key: "care",
    label: "Cuidado",
  },
];

function ProductInfo({ product, quantity, setQuantity }) {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div
      className="
        lg:sticky
        lg:top-24
        lg:self-start
      "
    >
      {/* Category */}
      <p
        className="
          mb-4
          text-[11px]
          uppercase
          tracking-[0.25em]
        "
      >
        · <span className="text-terracotta">{product.category}</span> · HECHO
        POR <span className="text-terracotta italic">{product.artisan}</span>
      </p>

      {/* Title */}
      <h1
        className="
          font-serif
          text-4xl
          leading-tight
          text-stone-900

          lg:text-5xl
        "
      >
        {product.name}
      </h1>

      {/* Price */}
      <div
        className="
          mt-5
          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        <span
          className="
            font-serif
            text-4xl
            text-stone-900
          "
        >
          {product.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </span>

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-stone-500
          "
        >
          <span
            className={`
              h-2
              w-2
              rounded-full
              ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}
            `}
          />
          <em >{product.stock > 0 ? "Queda stock" : "Sin stock"}</em> · Envío de 2-3 días
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-8
          max-w-xl
          font-serif
          text-lg
          leading-relaxed
          text-stone-600
        "
      >
        {product.description}
      </p>

      {/* Actions */}
      <div
        className="
          mt-8
          flex
          flex-col
          gap-3

          sm:flex-row
        "
      >
        {/* Quantity */}
        <div
          className="
            flex
            h-14
            items-center
            rounded-md
            border
            border-stone-300
            bg-[#efe8dd]
          "
        >
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="
              h-full
              w-14
              text-xl
            "
          >
            −
          </button>

          <span
            className="
              flex
              w-14
              justify-center
              text-sm
            "
          >
            {quantity}
          </span>

          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="
              h-full
              w-14
              text-xl
            "
          >
            +
          </button>
        </div>

        {/* Add */}
        <button
          className="
            flex-1
            rounded-md
            bg-[#b8593a]
            px-6
            text-sm
            font-medium
            uppercase
            tracking-[0.12em]
            text-white
            transition-opacity
            hover:opacity-90
          "
        >
          Añadir al carrito ·{" "}
          {(product.price * quantity).toLocaleString("es-CO") + " COP"}
        </button>
      </div>

      {/* Features */}
      <div
        className="
          mt-8
          grid
          gap-4
          border-y
          border-stone-300
          py-6

          sm:grid-cols-3
        "
      >
        <Feature
          title="Envío gratis"
          subtitle="Pedidos superiores a 128.000 COP"
        />

        <Feature
          title="30 días de reembolso"
          subtitle="No se hacen preguntas"
        />

        <Feature title="Un año de garantía" subtitle="We'll repair it" />
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div
          className="
            flex
            gap-6
            border-b
            border-stone-300
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                border-b-2
                py-3
                text-sm
                transition-colors

                ${
                  activeTab === tab.key
                    ? "border-[#b8593a] text-stone-900"
                    : "border-transparent text-stone-500"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pt-6">
          {activeTab === "details" && (
            <div className="space-y-4">
              <DetailRow label="Creador" value={product.artisan} />

              <DetailRow label="Origen" value={product.country} />
            </div>
          )}

          {activeTab === "process" && (
            <p
              className="
                max-w-xl
                font-serif
                leading-relaxed
                text-stone-600
              "
            >
              {product.description}
            </p>
          )}

          {activeTab === "care" && (
            <p
              className="
                max-w-xl
                font-serif
                leading-relaxed
                text-stone-600
              "
            >
              Limpiar suavemente con jabón suave y un paño suave para preservar
              la textura y el acabado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Feature({ title, subtitle }) {
  return (
    <div>
      <h4
        className="
          text-sm
          font-medium
          text-stone-900
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-1
          text-xs
          text-stone-500
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div
      className="
        grid
        gap-3

        sm:grid-cols-[120px_1fr]
      "
    >
      <span
        className="
          text-[11px]
          uppercase
          tracking-[0.18em]
          text-stone-400
        "
      >
        {label}
      </span>

      <p
        className="
          font-serif
          italic
          text-stone-700
        "
      >
        {value}
      </p>
    </div>
  );
}

export default ProductInfo;
