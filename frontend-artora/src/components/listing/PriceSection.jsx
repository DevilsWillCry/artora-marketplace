// components/listing/PriceSection.jsx

import ListingSection from "@/components/listing/ListingSection";
import ListingField from "@/components/listing/ListingField";
import FeeRow from "@/components/listing/FeeRow";
import { useState } from "react";
import { useEffect } from "react";

function PriceSection({ form, errors, updateField }) {
  const [currencyPrice, setCurrencyPrice] = useState("");

  const price = Number(currencyPrice) || 0;

  const platformFee = +(price * 0.08).toFixed(2);

  const paymentFee = price > 0 ? +(price * 0.029 + 0.3).toFixed(2) : 0;

  const youReceive = +(price - platformFee - paymentFee).toFixed(2);

  useEffect(() => {
    updateField("price", (Math.max(0, youReceive)).toLocaleString("es-CO"));

  }, [youReceive]);

  return (
    <ListingSection
      num="3"
      title="The price"
      subtitle="Set a fair value for your work."
    >
      <div className="grid grid-cols-2 gap-10 items-center">
        {/* PRICE */}
        <ListingField label="Listing price" hint="How much will you sell it for?" required error={errors.price}>
          <div
            className={`
              flex items-center overflow-hidden
              rounded-md border bg-white
              ${errors.price ? "border-red-700" : "border-stone-300"}
            `}
          >
            <span
              className="
                border-r border-stone-200
                px-4 text-2xl text-stone-500
              "
            >
              $
            </span>

            <input
              type="number"
              min="0"
              step="50"
              value={currencyPrice}
              onChange={(e) => setCurrencyPrice(e.target.value)}
              placeholder="0"
              className="
                w-full bg-transparent
                px-4 py-3 text-2xl
                outline-none
              "
            />

            <span
              className="
                px-4 text-xs uppercase
                tracking-widest text-stone-400
              "
            >
              COP
            </span>
          </div>
        </ListingField>

        {/* QUANTITY */}
        <ListingField
          label="Quantity available"
          hint="Leave at 1 if it's unique."
        >
          <div
            className="
              inline-flex items-center overflow-hidden
              rounded-md border border-stone-300
              bg-white
            "
          >
            <button
              type="button"
              onClick={() =>
                updateField("quantity", Math.max(1, form.quantity - 1))
              }
              className="
                h-12 w-12 border-r
                border-stone-200 text-xl
                hover:bg-stone-100
              "
            >
              −
            </button>

            <span
              className="
                flex min-w-[70px]
                items-center justify-center
                text-lg font-medium
              "
            >
              {form.quantity}
            </span>

            <button
              type="button"
              onClick={() => updateField("quantity", form.quantity + 1)}
              className="
                h-12 w-12 border-l
                border-stone-200 text-xl
                hover:bg-stone-100
              "
            >
              +
            </button>
          </div>
        </ListingField>
      </div>

      {/* FEES */}
      <div
        className="
          rounded-md border border-stone-200
          bg-white p-5
        "
      >
        <div
          className="
            mb-4 text-[11px] uppercase
            tracking-[0.18em]
            text-stone-400
          "
        >
          Per piece sold
        </div>

        <FeeRow
          label="Listing price"
          value={
            currencyPrice
              ? `$${parseFloat(currencyPrice).toLocaleString("es-CO")}`
              : "—"
          }
        />

        <FeeRow
          label="Platform fee · 8%"
          value={`− $${platformFee.toLocaleString("es-CO")}`}
          muted
        />

        <FeeRow
          label={`Payment processing · 2.9% + 1.103 COP`}
          value={`− $${paymentFee.toLocaleString("es-CO")}`}
          muted
        />

        <div className="my-3 h-px bg-stone-200" />

        <FeeRow
          label="You receive"
          value={`$${Math.max(0, youReceive).toLocaleString("es-CO")}`}
          bold
          accent
        />
      </div>
    </ListingSection>
  );
}

export default PriceSection;
