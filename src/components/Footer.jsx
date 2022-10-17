

import { useState } from "react";
import "../styles/footer.css";

const Footer = () => {

    const [comentario, setComentario] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <footer id="contacto">
            <div className="contenedor-cont">
                <div className="contacto-info">
                    <h2>Contáctanos</h2>
                    <h3>Síguenos y comparte <br></br> nuestros proyectos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis doloribus ducimus enim velit quibusdam assumenda eius quasi impedit ipsam hic, dicta beatae corporis facilis voluptas distinctio dolorem exercitationem cum!</p>
                    <p className="negrita">Gracias por tu apoyo!</p>
                </div>
                <div className="contacto-form">
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <legend>Comentario:</legend>
                        <div className="campo">
                            <textarea id="comentario" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                            {comentario.length > 0 ? null : (
                                <label for="comentario">Agregar comentario...</label>
                            )}
                            
                        </div>
                        <input 
                            type="submit"
                            className="btn-submit"
                            value="Enviar"
                        />
                    </form>
                </div>
            </div>
            <div className="footer">
                <p>©2022 By Carlota. Todos los derechos reservados</p>
                <p>jobs@carlotainternational.com</p>
            </div>
        </footer>
    );
}

export default Footer;