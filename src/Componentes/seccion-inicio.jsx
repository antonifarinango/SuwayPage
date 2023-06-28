
import "../stylesheet/inicio.css";
import Suway from "../Imagenes/img-inicio.jpg"

function Inicio() {
 
  return (
    <div className="contenedor-inicio">
      <div className="container-suway-img">
            <img src={Suway}
          className="suway-img" />
      </div>
          <div className="container-texto-inicio">
            <p className="texto-inicio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repudiandae accusamus labore? Neque vero cum laudantium dolores impedit quas id, voluptate, corporis maiores officiis at suscipit, eaque debitis incidunt possimus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repudiandae accusamus labore? Neque vero cum laudantium dolores impedit quas id, voluptate, corporis maiores officiis at suscipit, eaque debitis incidunt possimus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repudiandae accusamus labore? Neque vero cum laudantium dolores impedit quas id, voluptate, corporis maiores officiis at suscipit, eaque debitis incidunt possimus?
            </p>
          </div>
    </div>
  );
}

export default Inicio;
