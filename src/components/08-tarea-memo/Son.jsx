import React from "react";

const Son = React.memo(({ number, increment }) => {
  console.log("Me volví a generar :(");

  return (
    <button
        className="btn btn-primary mr-3"
        onClick={() => increment(number)}
    >
        { number }
    </button>
  );
});

export default Son;
