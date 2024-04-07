import React from "react";

const ConditionalRender1 = () => {
  let isDayTime = false;

  if (isDayTime) {
    return <p>Good day</p>;
  }

  if (!isDayTime) {
    return <p>Good night</p>;
  }
};

export default ConditionalRender1;
