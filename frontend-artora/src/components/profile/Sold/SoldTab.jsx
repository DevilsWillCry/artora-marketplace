// src/components/profile/Sold/SoldTab.jsx

import listings
  from "@/data/profile/listings";

import SummaryCard
  from "./SummaryCard";

import StatusPill
  from "../shared/StatusPill";

export default function SoldTab() {
  const soldItems =
    listings.filter(
      (listing) =>
        listing.status === "Sold"
    );

  const totalRevenue =
    soldItems.reduce(
      (acc, item) =>
        acc + item.soldFor,
      0
    );

  const activeListings =
    listings.filter(
      (listing) =>
        listing.status === "Active"
    ).length;

  const totalViews =
    listings.reduce(
      (acc, item) =>
        acc + item.views,
      0
    );

  return (
    <div>
      {/* Summary */}
      <div
        className="
          mb-12
          grid
          grid-cols-1
          gap-5

          md:grid-cols-2

          xl:grid-cols-4
        "
      >
        <SummaryCard
          label="Pieces sold"
          value={soldItems.length}
          hint="all time"
        />

        <SummaryCard
          label="Revenue"
          value={`$${totalRevenue}`}
          hint="after fees"
          accent
        />

        <SummaryCard
          label="Active listings"
          value={activeListings}
          hint="currently visible"
        />

        <SummaryCard
          label="Total views"
          value={totalViews}
          hint="last 30 days"
        />
      </div>

      {/* Header */}
      <div
        className="
          mb-6
          flex
          items-end
          justify-between
        "
      >
        <div>
          <h2
            className="
              font-serif
              text-4xl
              leading-tight
              text-stone-900
            "
          >
            Your{" "}

            <span
              className="
                italic
                text-stone-600
              "
            >
              listings
            </span>
          </h2>

          <p
            className="
              mt-2
              font-serif
              text-base
              italic
              text-stone-500
            "
          >
            Manage active, sold,
            and draft pieces.
          </p>
        </div>

        <button
          className="
            rounded-lg
            border
            px-5
            py-2.5
            text-sm
            font-medium
            transition-colors

            hover:bg-stone-100
          "
        >
          + List new piece
        </button>
      </div>

      {/* Table */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          bg-white
        "
      >
        {/* Head */}
        <div
          className="
            grid
            grid-cols-[80px_1.5fr_1fr_120px_1fr_auto]
            gap-5
            border-b
            bg-stone-50
            px-6
            py-4
            text-xs
            uppercase
            tracking-[0.18em]
            text-stone-400
          "
        >
          <div></div>

          <div>Piece</div>

          <div>Status</div>

          <div className="text-right">
            Price
          </div>

          <div>Activity</div>

          <div></div>
        </div>

        {/* Rows */}
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="
              grid
              grid-cols-[80px_1.5fr_1fr_120px_1fr_auto]
              gap-5
              border-b
              px-6
              py-5
              last:border-none
            "
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="
                aspect-square
                rounded-lg
                object-cover
              "
            />

            <div>
              <h3
                className="
                  font-serif
                  text-lg
                  text-stone-900
                "
              >
                {listing.title}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-stone-500
                "
              >
                {listing.category}
              </p>
            </div>

            <div>
              <StatusPill
                status={
                  listing.status
                }
              />
            </div>

            <div
              className="
                text-right
                font-serif
                text-lg
              "
            >
              $
              {listing.status ===
              "Sold"
                ? listing.soldFor
                : listing.price}
            </div>

            <div
              className="
                text-sm
                text-stone-500
              "
            >
              {listing.status ===
              "Draft" ? (
                <span className="italic">
                  Not published
                </span>
              ) : (
                <div className="flex gap-4">
                  <span>
                    👁 {listing.views}
                  </span>

                  <span>
                    ♡ {listing.saves}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button
                className="
                  rounded-lg
                  border
                  px-3
                  py-2
                  text-sm
                  transition-colors

                  hover:bg-stone-100
                "
              >
                {listing.status ===
                "Draft"
                  ? "Publish"
                  : listing.status ===
                    "Sold"
                  ? "Receipt"
                  : "Edit"}
              </button>

              <button
                className="
                  rounded-lg
                  border
                  px-3
                  py-2
                  text-sm
                  transition-colors

                  hover:bg-stone-100
                "
              >
                ⋯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}