import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <NavLink exact activeClassName="active" className="nav-link mr-4" to="/">Home</NavLink>
      <NavLink exact activeClassName="active" className="nav-link mr-4" to="/about">About</NavLink>
      <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
    </nav>
  );
}

export default NavBar;