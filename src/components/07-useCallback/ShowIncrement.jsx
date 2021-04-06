import React from "react";
import PropTypes from "prop-types";

const ShowIncrement = React.memo(({ increment }) => {
  console.info("ShowIncrement Component executed!");

  return (
    <div className="text-center">
      <button
        onClick={ () => increment(100) }
        className="btn btn-primary"
      >
        +1
      </button>
    </div>
  );
});

export default ShowIncrement;

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}