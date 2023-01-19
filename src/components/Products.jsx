import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import products from "../data";

const Products = () => {
  const [ searchParams, setSearchParams] = useSearchParams();
  
  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {products.map((product) => {
          return (
            <article
              key={product.id}
              style={{
                backgroundColor: "skyblue",
                width: "25%",
                margin: "1rem",
                padding: "2rem",
              }}
            >
              <h3>{product.name}</h3>
              <Link to={`/products/${product.id}`}>More Info</Link>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;