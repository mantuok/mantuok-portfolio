import "./header.module.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="navigation-list">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
