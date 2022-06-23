import "../components/Nav.scss";

const Nav = () => {
  return (
    <div className="topnav">
      <a href="/" className="active">
        Home
      </a>
      <a href="/timer">Timer</a>
      <a href="/todo">Todo Apps</a>
      <a href="/secret">Secret</a>
    </div>
  );
};

export default Nav;
