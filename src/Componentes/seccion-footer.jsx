import "../stylesheet/footer.css";
import imgWhatsapp from "../Imagenes/whatsapp.png"
import imgFacebook from "../Imagenes/facebook.png"

function Footer (){
    return(
        <>
          <div className="contenedor-contactos">
              <p className="textContactos">Redes Sociales</p>
                <div className="contenedor-img-contactos">
                  <a href=""><img className="img-contactos" src={imgWhatsapp} alt="whatsapp"/></a>
                  <a href="https://www.facebook.com/suwaycorazonjoven" target="_blank"><img className="img-contactos" src={imgFacebook} alt="whatsapp"/></a>
                </div>
          </div> 
        </>
    )
}

export default Footer;