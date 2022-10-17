import "../styles/nosotros.css";
import bannernosotros from "../imgp/bannernosotros.png";
import logo from "../imgp/logo.png";

const Nosotros = () => {


    return(
        <section id="nosotros">
            <img className="banner" src={bannernosotros} alt="banner"></img>
            <div className="logo-nosotros">
                <h2>Nuestro equipo</h2>
                <img src={logo} alt="logo"></img>
            </div>
            <div className="nosotros-content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit repudiandae dolor laboriosam maiores soluta, veritatis reprehenderit fuga et earum numquam magnam sequi cum, voluptatum, consectetur mollitia aliquid corrupti nihil ducimus!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptate culpa, omnis praesentium dolorum quo, dicta atque repellendus debitis velit iure ab est temporibus nesciunt magnam. Facere quod consequuntur necessitatibus!
                </p>
            </div>
        </section>
    );
}


export default Nosotros;