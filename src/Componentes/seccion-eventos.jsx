
import "../stylesheet/eventos.css";
import Video from "../videos/video.mp4"


function Eventos () {
 
  return (
    <>
        <div className="container-eventos">
            <h3 className="lugar-eventos">ddfgfdgfdg</h3>
            <div className="container-descripcion-eventos">
                <p className="descripcion-eventos">

                </p>
            </div>
            <div className="container-video-eventos">
              <video controls>
                <source src={Video} type="video/mp4"/>
              </video>
            </div>
            <div><a href="https://www.facebook.com/suwaycorazonjoven" target="_blank" className="ver-mas">Ver más</a></div>
        </div>
        
    </>
  );
}

export default Eventos;


