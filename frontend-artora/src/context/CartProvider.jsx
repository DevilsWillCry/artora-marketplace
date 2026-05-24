// src/context/CartProvider.jsx

import { useEffect, useMemo, useState } from "react";
import { load, save } from "@/storage/storage";
import { CartContext } from "./CartContext";



export default function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  /*
    [
      {
        productId: 1,
        qty: 1
        price: 100
      }
    ]
  */

  const [cart, setCart] = useState(() => load("artora-cart", []));
  
  // Persist
  useEffect(() => {
    save("artora-cart", cart);
  }, [cart]);

  // Add
  function addToCart(productId, price = 0, quantity = 1) {
    
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);

      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + quantity,
                price: item.price + price,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          productId,
          quantity,
          price,
        },
      ];
    });
  }

  // Remove
  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }

  // Update qty
  function updateQty(productId, quantity, price) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity,
              price,
            }
          : item,
      ),
    );
  }

  // Clear
  function clearCart() {
    setCart([]);
  }

  // Count
  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);


  //TotalAmount
  const totalAmount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price, 0) || 0;
  }, [cart]);



  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartOpen,
        setCartOpen,
        cartCount,
        addToCart,
        removeFromCart,
        updateQty,
        totalAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
