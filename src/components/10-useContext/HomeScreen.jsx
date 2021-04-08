import { useContext } from "react";
import UserContext from './UserContext';

const HomeScreen = () => {
  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <h1 className="text-center">Home Screen</h1>
  );
}

export default HomeScreen;