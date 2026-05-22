import HeroSection from "@/components/home/Hero/HeroSection";

import { useNavigate } from "react-router";

import FeaturedProductsSection from "@/components/home/Featured/FeaturedProductsSection";

import products from "@/data/products";

function HomePage({ density }) {
  const navigate = useNavigate();

  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main className="pt-5"> 
      <HeroSection
        density={density}
        onShop={() => navigate("shop")}
        onAbout={() => navigate("about")}
      />
      <FeaturedProductsSection
        density={density}
        products={featuredProducts}
        onViewProduct={(id) => navigate(`/product/${id}`)}
        onViewAll={() => navigate("/shop")}
      />
    </main>
  );
}

export default HomePage;
