import { useState } from "react";
import "../stylesheet/menu-hamburguer.css";

function Menu() {
  const [setActive, isActive] = useState(true);
  const toggleClass = () => {
    isActive(!setActive);
  };

  return (
    <>
      <div
          className={setActive ? "containt-navegation" : "containt-navegation containtActive"} >

          <div
            className={setActive ? "menu-hamburguer" : "menu-hamburguer active"}
            onClick={toggleClass}>
          </div>
          <div className={setActive ? "nav" : "nav navActive"}>
            <nav>
              <a onClick={toggleClass} href="#Inicio">Nosotros</a>
              <a onClick={toggleClass} href="#Eventos">Eventos</a>
              <a onClick={toggleClass} href="#Galeria">Galería</a>
              <a onClick={toggleClass} href="#Footer">Contactos</a>
            </nav>
          </div>
          <div className="nav-pc">
            <nav>
              <a href="#Inicio">Nosotros</a>
              <a href="#Eventos">Eventos</a>
              <a href="#Galeria">Galería</a>
              <a href="#Footer">Contactos</a>
            </nav>
          </div>
      </div>
    </>
  );
}

export default Menu;
