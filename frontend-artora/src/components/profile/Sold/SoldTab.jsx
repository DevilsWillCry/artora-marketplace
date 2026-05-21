// src/components/profile/Sold/SoldTab.jsx

import { load } from "@/storage/storage";

import SummaryCard from "./SummaryCard";
import SoldTable from "./SoldTable";
import useVisitUser from "@/hooks/useVisitUser";

export default function SoldTab() {
  const user = load("artora-user", null);
  const { visitUser } = useVisitUser();
  const listings = load("listings", []);
  const products = load("products", []);
  const categories = load("categories", []);

  const listingsWithDetails = listings
    .filter((listing) => listing.artisanId === user.id)
    .map((listing) => {
      const product = products.find(
        (product) => product.id === listing.productId,
      );

      const category = categories.find(
        (category) => category.id === listing.category,
      );

      return {
        ...listing,
        name: product ? product.name : "Unknown product",
        image: product
          ? product.image
          : "https://static.thenounproject.com/png/3482632-200.png",
        category: category ? category.name : "Unknown category",
        price: product ? product.price : 0,
        status: product ? product.status : "Unknown",
        nameStatus: product ? product.nameStatus : "Unknown",
      };
    });

  const soldItems = listingsWithDetails.filter(
    (listing) => listing.status === "Sold",
  );
  

  const totalRevenue = soldItems
    .reduce((acc, item) => acc + item.price, 0)
    .toLocaleString("es-CO");


  const activeListings = listingsWithDetails.filter(
    (listing) => listing.status === "Active",
  ).length;

  const totalViews = listingsWithDetails.reduce(
    (acc, item) => acc + item.views,
    0,
  );

  return (
    <div>
      {/* Summary */}
      {!visitUser && (
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
            label="Piezas vendidas"
            value={soldItems.length}
            hint="Total de productos vendidos"
          />

          <SummaryCard
            label="Ingresos totales"
            value={`${totalRevenue.toLocaleString("es-CO")} COP`}
            hint="Despues de impuestos"
            accent
          />

          <SummaryCard
            label="Piezas activas"
            value={activeListings}
            hint="Actualmente en venta"
          />

          <SummaryCard
            label="Total de vistas"
            value={totalViews}
            hint="Vistas acumuladas de tus productos"
          />
        </div>
      )}

      {/* Header */}
      <div
        className="
          mb-6
          flex
          items-end
          justify-between
          text-black
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
            Tu{" "}
            <span
              className="
                italic
                text-terracotta
              "
            >
              listado
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
            Gestiona tu actividad, ventas, y borradores.
          </p>
        </div>

        {!visitUser && (
          <button
            className="
            rounded-lg
            border
            px-5
            py-2.5
            text-sm
            font-medium
            transition-colors
            duration-300

            hover:bg-terracotta
            hover:text-paper
          "
          >
            + Añade un nuevo producto
          </button>
        )}
      </div>

      {/* Table */}
      <SoldTable listings={listingsWithDetails} />
    </div>
  );
}
