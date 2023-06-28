/*IMPORT CSS*/

import "./App.css";

/*IMPORT JPX*/

import Menu from "./Componentes/menu-hamburguer";
import Inicio from "./Componentes/seccion-inicio";
import Eventos from "./Componentes/seccion-eventos";
import Galeria from "./Componentes/seccion.galeria";
import Contactos from "./Componentes/seccion-footer";



/*IMPORT IMG*/

//import IconGuitarra from "./Imagenes/guitarra-electrica.png";

function App() {

  

  return (
    <>
      <div className="App">
        <main>
        <header className="header">
          <h1>SUWAY</h1>
          <Menu />
        </header>
      
        <section id="Inicio"><Inicio /></section>
        
        <section id="Eventos"><Eventos/></section>
        
        <section id="Galeria"><Galeria /></section>
        
      
        <footer id="Footer"><Contactos /></footer>
        </main>
      </div>
    </>
  );
}

export default App;
