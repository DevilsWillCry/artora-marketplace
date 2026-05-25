// components/listing/ShippingSection.jsx

import ListingSection from "./ListingSection";
import ListingField from "./ListingField";

const shippingOptions = [
  {
    value: "standard",
    title: "Estándar · 5–7 días",
    description: "Envío fiable para la mayoría de los artículos..",
  },
  {
    value: "express",
    title: "Express · 2–3 días",
    description: "Entrega más rápida para pedidos urgentes..",
  },
  {
    value: "pickup",
    title: "Recoger en tienda",
    description: "El comprador recoge el artículo en persona..",
  },
];

const returnOptions = [
  {
    value: "0",
    label: "No devoluciones",
  },
  {
    value: "14",
    label: "14 días",
  },
  {
    value: "30",
    label: "30 días",
  },
];

function ShippingSection({ form, updateField }) {
  return (
    <ListingSection
      num="4"
      title="Envío"
      subtitle="Cómo recibirán los compradores su pieza."
    >
      {/* SHIPPING FROM */}
      <ListingField label="Se envía desde" hint="Ciudad, País">
        <input
          type="text"
          value={form.shippingFrom}
          onChange={(e) => updateField("shippingFrom", e.target.value)}
          placeholder="Cali, Colombia"
          className="
            w-full rounded-md border
            border-stone-300 bg-white
            px-4 py-3 outline-none
            transition focus:border-stone-500
          "
        />
      </ListingField>

      {/* SHIPPING METHODS */}
      <ListingField label="Metodo de envío">
        <div className="flex flex-col gap-3">
          {shippingOptions.map((option) => {
            const active = form.shippingMethod === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => updateField("shippingMethod", option.value)}
                className={`
                  flex items-start gap-4 rounded-md
                  border p-4 text-left
                  transition-all
                  ${
                    active
                      ? "border-stone-800 bg-stone-100"
                      : "border-stone-200 bg-white hover:border-stone-400"
                  }
                `}
              >
                {/* RADIO */}
                <div
                  className={`
                    mt-1 flex h-4 w-4
                    items-center justify-center
                    rounded-full border
                    ${active ? "border-stone-800" : "border-stone-300"}
                  `}
                >
                  {active && (
                    <div
                      className="
                        h-2 w-2 rounded-full
                        bg-stone-800
                      "
                    />
                  )}
                </div>

                {/* TEXT */}
                <div>
                  <h4
                    className="
                      text-base font-medium
                      text-stone-900
                    "
                  >
                    {option.title}
                  </h4>

                  <p
                    className="
                      mt-1 text-sm italic
                      text-stone-500
                    "
                  >
                    {option.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </ListingField>

      {/* RETURNS */}
      <ListingField label="Devoluciones">
        <div className="flex flex-wrap gap-3">
          {returnOptions.map((option) => {
            const active = form.returns === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => updateField("returns", option.value)}
                className={`
                  rounded-full border px-4 py-2
                  text-sm transition-all
                  ${
                    active
                      ? "border-stone-900 bg-stone-900 text-white"
                      : "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                  }
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </ListingField>
    </ListingSection>
  );
}

export default ShippingSection;
