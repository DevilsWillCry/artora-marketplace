import { useParams } from "react-router";

import products from "@/data/products";

export default function ProductPage() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}