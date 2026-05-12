import products from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

function ShopPage() {
  return (
    <section>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

    </section>
  )
}

export default ShopPage