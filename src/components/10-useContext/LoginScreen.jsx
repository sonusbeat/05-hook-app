import { useContext } from "react";
import UserContext from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <main>
      <h1 className="text-center">Login Screen</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={ () => setUser({ id: 123, name: "Daniel" }) }
      >
        Login
      </button>
    </main>
  );
}

export default LoginScreen;