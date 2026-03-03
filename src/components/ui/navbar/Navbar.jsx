import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (id) => {
    setIsActive(id);
  };

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="logo">Agustín Marotte</div>
        <div className="nav-links">
          <a
            href="#about-me"
            className={`${isActive === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            Sobre mí
          </a>
          <a
            href="#skills"
            className={`${isActive === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            Habilidades
          </a>
          <a
            href="#projects"
            className={`${isActive === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className={`${isActive === 4 ? "active" : ""}`}
            onClick={() => handleClick(4)}
          >
            Contacto
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
