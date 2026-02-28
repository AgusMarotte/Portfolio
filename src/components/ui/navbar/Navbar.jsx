import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="logo">Agustín Marotte</div>
        <div className="nav-links">
          <a
            href="#"
            className={`${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            About Me
          </a>
          <a
            href="#"
            className={`${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            Skills
          </a>
          <a
            href="#"
            className={`${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            Projects
          </a>
          <a
            href="#"
            className={`${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
