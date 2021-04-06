import React, { useCallback } from "react";
import { useState } from "react";
import Son from "./Son";

const Father = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

//   const increment = num => {
//     setValue(value + num);
//   };

  const increment = useCallback((num) => {
    setValue(v => v + num);
  }, [ setValue ]);

  return (
    <div>
      <h2>Father</h2>
      <p>Total: { value } </p>

      <hr />

      <h3>Sons</h3>

      {
        numbers.map(n => (
            <Son key={n} number={n} increment={ increment } />
        ))
      }
    </div>
  );
};

export default Father;
