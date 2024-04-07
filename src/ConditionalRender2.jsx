import React from "react";

// truthy and falsy values
// falsy values: null, undefined, 0, -0, "", false, NaN
// truthy values : {}, [], true, and everything minus falsy valuse

// component renders on screen based upon condtion
const ConditionalRender2 = () => {
  let isDayTime = false;
  return <div>{isDayTime ? <p>Good day amigo</p> : <p>Good night pal</p>}</div>;
};

export default ConditionalRender2;
