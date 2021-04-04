import { useEffect, useState } from "react";

const Message = () => {
  const [coodinates, setCoodinates] = useState({ x: 0, y: 0 });

  const { x, y } = coodinates;

  useEffect(() => {
    const mouseMove = (event) => {
      const coordinates = { x: event.x, y: event.y };
      setCoodinates(coordinates);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <section>
      <h3 className="text-center">Mis Cordenadas son:</h3>
      <p>x: { x }</p>
      <p>y: { y }</p>
    </section>
  );
};

export default Message;
