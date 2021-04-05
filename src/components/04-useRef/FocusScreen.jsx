import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <section>
      <h2 className="text-center">Focus Screen</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          ref={ inputRef }
          className="form-control"
          type="text"
        />
      </div>

      <div className="form-group text-center">
        <button
          className="btn btn-outline-primary"
          onClick={ handleClick }
        >Focus</button>
      </div>
    </section>
  );
};

export default FocusScreen;
