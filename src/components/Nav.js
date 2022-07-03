import "../components/Nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/timer" activeClassName="active">
        Timer
      </NavLink>
      <NavLink to="/todo" activeClassName="active">
        Todo
      </NavLink>
      <NavLink exact to="/blog" activeClassName="active">
        Blog
      </NavLink>
      <NavLink to="/secret" activeClassName="active">
        Secret
      </NavLink>
    </div>
  );
};

export default Nav;
