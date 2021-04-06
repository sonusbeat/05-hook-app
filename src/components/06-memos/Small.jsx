import React from "react";

const Small = React.memo(({ value }) => {
  console.log("Se llamó el componente <Small />");

  return (
    <span className="text-primary">{ value }</span>
  );
})

export default Small;