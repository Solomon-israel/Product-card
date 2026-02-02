import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  if (products.length <= 0) {
    return (
      <div className="flex justify-center  items-center h-35">
        <p className="text-zinc-400"> No product to display 🤦‍♂️</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {products.map((p, id) => (
        <ProductCard p={p} key={id} />
      ))}
    </div>
  );
}
