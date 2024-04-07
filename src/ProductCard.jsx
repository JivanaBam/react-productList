import React from "react";
import { productData } from "../productData";

const ProductCard = (props) => {
  return (
    <div
      style={{
        width: "400px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <img src={props.image} alt="" style={{ width: "100%" }} />
      <h3>{props.name}</h3>
      <h4>Rs. {props.price}</h4>
    </div>
  );
};

export default ProductCard;
