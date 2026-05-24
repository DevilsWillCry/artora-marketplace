// src/components/product/ProductCard.jsx
import ArtoraButton from "@/components/ui/ArtoraButton";
import ShoppingCart from "../../assets/icons/ecommerce-cart.min.svg";

import { Heart } from "lucide-react";

import { load, save } from "@/storage/storage";
import { useNavigate } from "react-router";

import useCart from "@/hooks/useCart";

import useAuth from "@/hooks/useAuth";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { user, updateUser } = useAuth();

  const users = load("users", []);
  const categories = load("categories", []);
  const listings = load("listings", []);
  const { addToCart } = useCart();

  const artisan = users?.find((user) => user.id === product.artisanId);

  const category = categories.find(
    (category) => category.id === product.categoryId,
  );

  const isListed = listings.find(
    (listing) =>
      listing.productId === product.id && listing.artisanId === user?.id,
  ); // Verifica si el producto está listado

  const savedProduct = user?.savedProducts?.find((id) => id === product.id); // Cambia el color del corazón según si el producto está guardado}


  const handleAddToCart = () => {
    addToCart(product.id, product.price);
  };

  const handleSendToUser = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleFavorite = (productId) => {
    const savedProducts = user?.savedProducts || [];

    const updatedSavedProducts = savedProducts.includes(productId)
      ? savedProducts.filter((id) => id !== productId)
      : [...savedProducts, productId];

    const updatedUser = {
      ...user,
      savedProducts: updatedSavedProducts,
    };

    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u));

    updateUser(updatedUser);

    save("users", updatedUsers);
  };

  return (
    <article
      className="
        group 
        flex flex-col 
        items-start justify-between
        gap-4
        p-3
        overflow-hidden 
        rounded-md
        border border-rule
        bg-cream
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(60,40,20,0.10)]
      "
    >
      {/* Image */}
      <div
        className="
          relative 
          block 
          w-full
          aspect-square
          overflow-hidden
          cursor-pointer
          "
      >
        <img
          src={product.images?.[0].url}
          alt={product.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500s
            group-hover:scale-[1.03]
            rounded-lg
          "
          onClick={() => handleViewDetails(product.id)}
        />

        {/* Category badge */}
        <span
          className="
            absolute top-3 left-3
            rounded-full
            bg-paper/90
            px-3 py-1
            text-[10px]
            uppercase tracking-[0.14em]
            text-ink
            backdrop-blur-sm
          "
        >
          {category.name}
        </span>

        {/* Heart Badge */}
        <button
          className={`
            absolute top-3 right-3
            rounded-full
            bg-paper/90
            p-2
            text-ink
            backdrop-blur-sm
            cursor-pointer
            hover:bg-paper
            hover:scale-110
            transition-all
            duration-300
            ${isListed ? "hidden" : "visible"}
          `}
          onClick={() => handleFavorite(product.id)}
        >
          <Heart
            size={20}
            color="#e01b24"
            fill={savedProduct ? "#e01b24" : "#fff"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5 w-full flex flex-col items-start justify-between">
        {/* Product info */}
        <div className="w-full flex flex-col items-start justify-start">
          <button
            onClick={() => handleViewDetails(product.id)}
            className="
              text-left
              transition-opacity
              cursor-pointer
              hover:opacity-70
            "
          >
            <h3
              className="
                font-serif text-[22px]
                font-normal
                tracking-[-0.01em]
                text-ink
              "
            >
              {product.title}
            </h3>
          </button>

          <button
            className="
              mt-1 text-sm
              text-inkMute
            "
            onClick={() => handleSendToUser(product.artisanId)}
          >
            Hecho por{" "}
            <em className="text-terracotta cursor-pointer border-b hover:text-ink transition-colors">
              {artisan?.name}
            </em>
          </button>

          <p
            className="
              mt-3 line-clamp-2
              text-[15px]
              leading-relaxed
              text-inkSoft
            "
          >
            {product.description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            flex 
            flex-row
            items-center
            justify-between
            gap-5
            w-full
          "
        >
          <div
            className="
              font-serif text-[22px]
              text-ink
            "
          >
            {product.price.toLocaleString("es-CO")} COP
          </div>

          <ArtoraButton
            className={`flex flex-row items-center gap-2 ${isListed ? "hidden" : ""}`}
            size="sm"
            onClick={handleAddToCart}
          >
            Añadir al{" "}
            <img className="w-5" src={ShoppingCart} alt="Shopping Cart Icon" />
          </ArtoraButton>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
