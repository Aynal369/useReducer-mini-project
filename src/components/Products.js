import React from "react";
import { useProducts } from "../context/ProductProvider";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show. Product list is empty</p>;
  }
  if (!loading && !error && products.length) {
    content = products
      .slice(0, 12)
      .map((product, index) => <ProductCard key={index} product={product} />);
  }
  return (
    <section className="container-fluid py-5">
      <div className="row g-4">{content}</div>
    </section>
  );
};

export default Products;
