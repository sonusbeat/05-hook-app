import { useContext } from 'react';
import UserContext from './UserContext';

const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const HandleClick = () => {
    setUser({});
  };

  return (
    <main>
      <h1 className="text-center">About Screen</h1>
      <hr/>

      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button
        className="btn btn-warning"
        onClick={ HandleClick }
      >
        Logout
      </button>

    </main>
  );
}

export default AboutScreen;