import React from "react";

const ProductUsingProps = ({ image, name, price }) => {
  return (
    <div
      style={{
        gap: "1rem",
        // display: "flex",
        // flexDirection: "row",
        // flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <img
        src={image}
        alt=""
        style={{ height: "200px", width: "200px", padding: "1rem" }}
      />
      <h3>{name}</h3>
      <h4>Rs.{price}</h4>
    </div>
  );
};

export default ProductUsingProps;
