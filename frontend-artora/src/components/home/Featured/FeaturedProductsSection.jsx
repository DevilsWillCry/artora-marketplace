import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/product/ProductCard";

function FeaturedProductsSection({
  density,
  products,
  onViewAll,
  onAddToCart,
}) {
  const dense = density === "compact";

  return (
    <section
      className={`
        bg-paper px-12
        ${dense ? "py-16" : "py-24"}
      `}
    >
      <SectionHeader
        eyebrow="· Destacados ·"
        title={
          <>
            <em className="text-terracotta">
              Selección destacada 
            </em> del mes
          </>
        }
        actionLabel="Ver todos los productos →"
        onAction={onViewAll}
      />

      <div
        className={`
          mt-10 grid grid-cols-4
          ${dense ? "gap-5" : "gap-7"}
          max-md:grid-cols-1
          max-md:gap-10
        `}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() =>
              onAddToCart(product.id)
            }
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProductsSection;