import { useMemo } from "react";

import { load } from "@/storage/storage";

import SummaryCard from "./SummaryCard";
import SoldTable from "./SoldTable";

import useVisitUser from "@/hooks/useVisitUser";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router";

const FALLBACK_IMAGE = "https://static.thenounproject.com/png/3482632-200.png";

export default function SoldTab() {
  const { user } = useAuth();
  const { visitUser } = useVisitUser();

  const listings = load("listings", []);
  const products = load("products", []);
  const categories = load("categories", []);
  const orders = load("orders", []);

  const currentUser = visitUser || user;

  const navigate = useNavigate();


  const {
    listingsWithDetails,
    activeListings,
    totalViews,
    totalSold,
  } = useMemo(() => {
    // Maps
    const productsMap = new Map(
      products.map((product) => [product.id, product]),
    );

    const categoriesMap = new Map(
      categories.map((category) => [category.id, category]),
    );

    const soldProductsMap = new Map();

    orders
      .filter((order) => order.status === "delivered")
      .forEach((order) => {
        order.items.forEach(({ productId, quantity }) => {
          const current = soldProductsMap.get(productId) || {
            productId,
            quantity: 0,
            revenue: 0,
            delivered: null,
          };

          const product = productsMap.get(productId);

          soldProductsMap.set(productId, {
            ...current,
            quantity: current.quantity + quantity,
            revenue: current.revenue + (product?.price || 0) * quantity,
            delivered: order.status,
          });
        });
      });

    // Listings enriquecidos
    const listingsWithDetails = listings
      .filter((listing) => listing.artisanId === currentUser.id)
      .map((listing) => {
        const product = productsMap.get(listing.productId);

        const category = categoriesMap.get(listing.categoryId);

        const salesData = soldProductsMap.get(listing.productId);


        return {
          ...listing,

          name: product?.title || "Unknown product",

          image: product?.images?.[0].url || FALLBACK_IMAGE,

          category: category?.name || "Unknown category",

          price: product?.price || 0,

          status: product?.status || "Unknown",

          nameStatus: product?.nameStatus || "Unknown",

          stock: product?.stock || 0,

          soldQuantity: salesData?.quantity || 0,

          revenue: salesData?.revenue || 0,

          statusOrder: salesData?.delivered || null,
        };
      });

    // Stats
    const soldItems = listingsWithDetails.filter(
      (listing) => listing.status === "Sold",
    );

    const activeListings = listingsWithDetails.filter(
      (listing) => listing.status === "Active",
    ).length;

    const totalViews = listingsWithDetails.reduce(
      (acc, item) => acc + item.views,
      0,
    );

    // Órdenes entregadas
    const deliveredOrders = listingsWithDetails.filter(
      (listing) => listing.statusOrder === "delivered",
    );

    // Ingresos del artesano
    const totalSold = deliveredOrders.reduce(
      (acc, item) => acc + item.revenue,
      0,
    );

    return {
      listingsWithDetails,
      soldItems,
      activeListings,
      totalViews,
      totalSold,
    };
  }, [listings, products, categories, orders, currentUser.id]);

  return (
    <div>
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
            value={listingsWithDetails.length}
            hint="Total de productos vendidos"
          />

          <SummaryCard
            label="Ingresos totales"
            value={`${totalSold.toLocaleString("es-CO")} COP`}
            hint="Después de impuestos"
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
            Gestiona tu actividad, ventas y borradores.
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
            onClick={() => navigate(`/product/listing/${currentUser.id}`)}
          >
            + Añade un nuevo producto
          </button>
        )}
      </div>

      <SoldTable listings={listingsWithDetails} />
    </div>
  );
}
