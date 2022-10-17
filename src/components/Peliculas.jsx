import { useEffect, useState } from "react";

import "../styles/peliculas.css";
import pelicula1 from "../imgp/pelicula1.png";

const Peliculas = () => {

    const [activa, setActiva] = useState({
        "pel1": true,
        "pel2": false,
        "pel3": false,
    })

    const handleActiva = (pel) => {

        setActiva({
            "pel1": false,
            "pel2": false,
            "pel3": false,
            [pel]: true
        })
    }


    return(
        <main id="peliculas">
            <div className={`pelicula_content ${activa.pel1 ? "activa" : ""}`}>
                <h2>La piedra <br></br> en el zapato</h2>
                <p>2023 | Duración: 70 minutos</p>
                <p>Los maestros normalistas rurales de México luchan por transformar la sociedad a través de la educación, pero el sistema político los combate con toda hostilidad. </p>
            </div>
            <div className={`pelicula_content ${activa.pel2 ? "activa" : ""}`}>
                <h2>La piedra <br></br> en el zapato</h2>
                <p>2022 | Duración 1:45</p>
                <p><span className="negrita">Logline</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi nisi nihil sit ipsum doloremque voluptates autem iure doloribus tempore, officiis aperiam adipisci maiores eligendi cum reprehenderit harum, iste repellendus. </p>
            </div>
            <div className={`pelicula_content ${activa.pel3 ? "activa" : ""}`}>
                <h2>La piedra <br></br> en el zapato</h2>
                <p>2022 | Duración 1:45</p>
                <p><span className="negrita">Logline</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi nisi nihil sit ipsum doloremque voluptates autem iure doloribus tempore, officiis aperiam adipisci maiores eligendi cum reprehenderit harum, iste repellendus. </p>
            </div>


            <img src={pelicula1} alt="" className={`pelicula_img ${activa.pel1 ? "activa" : ""}`}></img>


            <div className="pelicula_seleccionar">
                <button onClick={() => handleActiva("pel1")}><img src={pelicula1} alt="" className={`${activa.pel1 ? "activa" : ""}`}></img></button>
                <button onClick={() => handleActiva("pel2")}><img src={pelicula1} alt="" className={`${activa.pel2 ? "activa" : ""}`}></img></button>
                <button onClick={() => handleActiva("pel3")}><img src={pelicula1} alt="" className={`${activa.pel3 ? "activa" : ""}`}></img></button>
            </div>
        </main>
    );
}


export default Peliculas;