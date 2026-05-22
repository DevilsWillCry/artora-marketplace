// src/components/shop/ShopToolbar.jsx

function ShopToolbar({
  view,
  setView,
  categories,
  activeCategory,
  setActiveCategory,
  sort,
  setSort,
}) {
  return (
    <div
      className="
        sticky
        top-16
        z-30
        border-b
        border-black
        bg-[#f5f1ea]/90
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-4
          px-4
          py-5

          lg:flex-row
          lg:items-center
          lg:justify-between

          sm:px-6
          lg:px-8
        "
      >
        {/* Categories */}
        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setActiveCategory(category.id)
              }
              className={`
                rounded-full
                border
                px-4
                py-2
                text-xs
                transition-all

                ${
                  activeCategory === category.id
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-300 text-stone-700 hover:border-stone-500"
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* View */}
          <div
            className="
              flex
              overflow-hidden
              rounded-md
              border
              border-stone-300
            "
          >
            <button
              onClick={() => setView("grid")}
              className={`
                px-3
                py-2
                text-sm

                ${
                  view === "grid"
                    ? "bg-stone-900 text-white"
                    : "bg-transparent"
                }
              `}
            >
              ⊞
            </button>

            <button
              onClick={() => setView("list")}
              className={`
                px-3
                py-2
                text-sm

                ${
                  view === "list"
                    ? "bg-stone-900 text-white"
                    : "bg-transparent"
                }
              `}
            >
              ☰
            </button>
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            className="
              rounded-md
              border
              border-stone-300
              bg-transparent
              px-4
              py-2
              text-sm
              outline-none
            "
          >
            <option value="Featured">Relevante</option>

            <option value="Price · low">Precio · Bajo</option>

            <option value="Price · high">Precio · Alto</option>

            <option value="A → Z">A → Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ShopToolbar;