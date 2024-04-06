import React from "react";
import "./App.css";
import { productData } from "../productData";

const ProductData = () => {
  return (
    <div
      style={{
        gap: "1rem",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {productData.map((item, index, self) => {
        return (
          <div
            key={item.id}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              width: "400px",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                width: "200px",
                padding: "1rem",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>{item.name}</h4>
              <h4 style={{ color: "green" }}>Rs: {item.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductData;
