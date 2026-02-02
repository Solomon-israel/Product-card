import React from "react";
import Products from "./Products";

export default function MainContent({ products }) {
  return (
    <main>
      <Products products={products} />
    </main>
  );
}
