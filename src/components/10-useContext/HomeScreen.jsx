import { useContext } from "react";
import UserContext from './UserContext';

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <main>
      <h1 className="text-center">Home Screen</h1>
      <hr/>
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>
    </main>
  );
}

export default HomeScreen;