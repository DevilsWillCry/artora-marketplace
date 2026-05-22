// src/pages/ProductDetail.jsx

import { useMemo, useState } from "react";
import { useParams, Link } from "react-router";

import { load } from "@/storage/storage";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

function ProductPage() {
  const { id } = useParams();
  
  const users = load("users", []);
  const products = load("products", []);
  const categories = load("categories", []);

  const product = useMemo(
    () => products.find((item) => item.id == id),
    [id, products],
  );

  const category = useMemo(
    () => categories.find((item) => item.id == product.categoryId),
    [product, categories],
  );

  const artisan = useMemo(
    () => users.find((item) => item.id == product.artisanId),
    [product, users],
  );

  const productWithDetails = {...product, artisan: artisan.name, country: artisan.city, category: category.name}


  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section
        className="
          flex
          min-h-[70vh]
          items-center
          justify-center
          bg-[#f5f1ea]
          px-6
        "
      >
        <div className="text-center">
          <h1
            className="
              font-serif
              text-4xl
              text-stone-900
            "
          >
            Producto no encontrado
          </h1>

          <Link
            to="/shop"
            className="
              mt-6
              inline-flex
              rounded-md
              border
              border-stone-300
              px-5
              py-3
              text-sm
              transition-colors
              hover:bg-stone-100
            "
          >
            Volver a la tienda
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.categoryId === product.categoryId &&
        item.id !== product.id,
    )
    .slice(0, 3);


  return (
    <main className="bg-[#f5f1ea]">
      {/* Breadcrumb */}
      <div
        className="
          border-b
          border-black
          bg-[#efe8dd]
        "
      >
        <div
          className="
            pt-25
            mx-auto
            max-w-7xl
            px-4
            py-4
            text-sm
            text-stone-500

            sm:px-6
            lg:px-8
          "
        >
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/"
              className="hover:text-stone-900"
            >
              Inicio
            </Link>

            <span>/</span>

            <Link
              to="/shop"
              className="hover:text-stone-900"
            >
              Tienda
            </Link>

            <span>/</span>

            <Link to={`/shop/${category.slug}`}>
            <span>{category.name}</span>
            </Link>

            <span>/</span>

            <span className="text-stone-900">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Product */}
      <section
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-4
          py-10

          lg:grid-cols-2
          lg:px-8
        "
      >
        <ProductGallery product={productWithDetails} />

        <ProductInfo
          product={productWithDetails}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </main>
  );
}

export default ProductPage;