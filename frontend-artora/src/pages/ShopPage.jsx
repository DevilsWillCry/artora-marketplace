// src/pages/Shop.jsx

import { useMemo, useState } from "react";

import { load } from "@/storage/storage";

import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductList from "@/components/shop/ProductList";
import EmptyState from "@/components/shop/EmptyState";

function ShopPage() {
  const products = load("products", []);
  const categories = load("categories", []);

  const [view, setView] = useState("grid");
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryName = useMemo(
    () => categories.find((item) => item.id == activeCategory),
    [activeCategory, categories],
  );


  const [sort, setSort] = useState("Featured");


  const filteredProducts = useMemo(() => {
    let list =
      activeCategory === 0
        ? [...products]
        : products.filter((product) => product.categoryId === activeCategory);

    switch (sort) {
      case "Price · low":
        list.sort((a, b) => a.price - b.price);
        break;

      case "Price · high":
        list.sort((a, b) => b.price - a.price);
        break;

      case "A → Z":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }

    return list;
  }, [products, activeCategory, sort]);

  return (
    <main
      className="
        min-h-screen
        bg-[#f5f1ea]
      "
    >
      <ShopHeader
        total={filteredProducts.length}
        activeCategory={categoryName?.name || "All"}
      />

      <ShopToolbar
        view={view}
        setView={setView}
        categories={[
          {
            id: 0,
            name: "Todos",
            slug: "All",
          },
          ...categories.map((c) => {
            return {
              id: c.id,
              name: c.name,
              slug: c.slug,
            };
          }),
        ]}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sort={sort}
        setSort={setSort}
      />

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          py-10

          sm:px-6
          lg:px-8
        "
      >
        {filteredProducts.length === 0 ? (
          <EmptyState />
        ) : view === "grid" ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </section>
    </main>
  );
}

export default ShopPage;
