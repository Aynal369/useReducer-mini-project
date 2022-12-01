import React from "react";
import { Helmet } from "react-helmet-async";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Mini Project</title>
      </Helmet>
      <Products />
    </>
  );
};

export default Home;
