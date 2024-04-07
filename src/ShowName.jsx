import React from "react";

const ShowName = (props) => {
  console.log(props);

  return (
    <div>
      <p>Hey {props.studentName}, Have a good day.</p>
    </div>
  );
};

export default ShowName;
