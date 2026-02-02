import { useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/main/productCard";

const url = "https://fakestoreapi.com/products";

export default function App() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const res = await fetch(url);
    const products = await res.json();

    console.log(products);

    setProducts(products);
  }

  getAllProducts();

  return (
    <div>
      <Header />
      <main className="p-8">
        {products.map((p, id) => (
          <ProductCard p={p} key={id}/>
        ))}
      </main>
    </div>
  );
}
