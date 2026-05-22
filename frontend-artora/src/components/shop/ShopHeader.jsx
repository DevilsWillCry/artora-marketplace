// src/components/shop/ShopHeader.jsx

function ShopHeader({ total, activeCategory }) {
  return (
    <section
      className="
        border-b
        border-black
        bg-[#efe8dd]
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-25

          sm:px-6
          lg:px-8
        "
      >
        <p
          className="
            mb-3
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-[#b8593a]
          "
        >
          · LA TIENDA ·
        </p>

        <h1
          className="
            max-w-3xl
            font-serif
            text-4xl
            leading-tight
            text-stone-900

            md:text-6xl
          "
        >
          Cada pieza, {" "}
           <span
            className="
              ml-3
              italic
              text-[#b8593a]
            "
          >
        hecha a mano.
          </span>
        </h1>

        <p
          className="
            mt-5
            max-w-2xl
            font-serif
            text-lg
            italic
            text-stone-600
          "
        >
          {total} piezas{" "}
          {activeCategory === "All" ? "del catalogo de artesanos" : activeCategory} —
          mensualmente se actualiza.
        </p>
      </div>
    </section>
  );
}
export default ShopHeader;
