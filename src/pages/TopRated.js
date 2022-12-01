import React from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
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
      .filter((product) => product.rating >= 4)
      .map((product, index) => <ProductCard key={index} product={product} />);
  }
  return (
    <>
      <Helmet>
        <title>Top Rated - Mini Project</title>
      </Helmet>
      <section className="container-fluid py-5">
        <div className="row g-4">{content}</div>
      </section>
    </>
  );
};

export default TopRated;
