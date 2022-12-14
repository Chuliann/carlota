import { useEffect } from "react";
import "../styles/idiomas.css";


const Idiomas = ({handleIdioma}) => {

    return(
        <div id="idiomas">  
            <button onClick={() => handleIdioma("es")} className="boton-idioma">Español</button>
            <button onClick={() => handleIdioma("en")} className="boton-idioma">English</button>
            <button onClick={() => handleIdioma("de")} className="boton-idioma">Deutsch</button>
        </div>
    );

}

export default Idiomas;