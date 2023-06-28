import PropTypes from "prop-types"
import "../stylesheet/galeria.css";
import img1 from "../Imagenes/imgGaleria/img1.jpg"
import img2 from "../Imagenes/imgGaleria/img2.jpg"
import img3 from "../Imagenes/imgGaleria/img3.jpg"
import img4 from "../Imagenes/imgGaleria/img4.jpg"
import img5 from "../Imagenes/imgGaleria/img5.jpg"
import img6 from "../Imagenes/imgGaleria/img6.jpg"
import img7 from "../Imagenes/imgGaleria/img7.jpg"



function Galeria(){
    return(
    <>
      <div className="contenedor-galeria">
        <div className="contenedor-img-galeria">

        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img2} alt="img2" /></div>
        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img3} alt="img3" /></div>
        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img4} alt="img4" /></div>
        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img5} alt="img5" /></div>
        
        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img7} alt="img7" /></div>
        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img6} alt="img6" /></div>
        <div className="imagenes-contenedor"><img className="imagenes-galeria"src={img1} alt="img1" /></div>
        </div>
      </div>
    </>
    )
}
export default Galeria

Galeria.propTypes = {
  galeriaImg: PropTypes.string,
  descripcionGaleriaImg: PropTypes.string
};
