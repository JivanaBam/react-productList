import React from "react";

const ConditionalRender3 = () => {
  let num = 11;

  return (
    <div>
      {num < 0 ? (
        <p>Number is negative</p>
      ) : num > 0 ? (
        <p>Number is positive</p>
      ) : (
        <p>Number is zero.</p>
      )}
    </div>
  );
};

export default ConditionalRender3;
