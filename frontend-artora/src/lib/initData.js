import users from "@/data/users";
import products from "@/data/products";
import orders from "@/data/profile/orders";
import listings from "@/data/profile/listings";
import categories from "@/data/categories";
import conditions from "@/data/conditions";

import { save } from "@/storage/storage";

export function initData() {
  if (!localStorage.getItem("users")) {
    save("users", users);
  }

  if (!localStorage.getItem("products")) {
    save("products", products);
  }

  if (!localStorage.getItem("orders")) {
    save("orders", orders);
  }

  if (!localStorage.getItem("listings")) {
    save("listings", listings);
  }

  if (!localStorage.getItem("categories")) {
    save("categories", categories);
  }

  if (!localStorage.getItem("conditions")) {
    save("conditions", conditions);
  }
}