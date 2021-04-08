import AppRouter from "./AppRouter";
import UserContext from "./UserContext";
import "./MainNav.css";

const MainApp = () => {
  const user = {
    id: 5689,
    name: "Daniel",
    email: "user@nowhere.com"
  };

  return (
    <UserContext.Provider value={ user }>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default MainApp;