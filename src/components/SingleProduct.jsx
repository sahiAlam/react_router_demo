import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId)
  console.log(useLocation())

  const product = products.find((product) => product.id === productId);
  const { img, name } = product;

  return (
    <div>
      <p>Product no. {productId}</p>

      <img src={img} alt={name} style={{width: "50%"}} />
      <h2>{name}</h2>

      <Link to="/products">go to produxts page</Link>
    </div>
  );
};

export default SingleProduct;