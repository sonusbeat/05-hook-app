import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Componente Message Montado");

    return () => {
      console.log("Componente Message Desmontado");
    }
  }, []);

  return (
    <h3 className="text-center">¡ React es Genial !</h3>
  );
};

export default Message;
