import React from "react";
import Navigationbar from "./Navigationbar.js";
import { Jumbotron } from "react-bootstrap";
import "./productDetails.module.css"

const ProductDetails = (props) => {
  const {
    productName,
    productDescription,
    ProductId,
    productPrice,
    productImage,
    productReview,
  } = props;

  console.log(productName)
  return (
    <>
      <Navigationbar productName={productName} />
      <Jumbotron className="jumbotron-container">
        <img src={productImage} />
        <h1>{productName}</h1>
        <h4>{productPrice}</h4>
        <p>{productDescription}</p>
        <p>
          {productReview}
        </p>
      </Jumbotron>
    </>
  );
};

export default ProductDetails;
