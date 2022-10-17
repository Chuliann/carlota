import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../imgp/logo.png";

import "../styles/header.css";

const Header = () => {

    const [expandido, setExpandido] = useState(false);

    const handleExpand = () => {
        setExpandido(!expandido);
        document.querySelector('body').classList.toggle("fijarBody");
    }


    const handleNav = (id) => {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header id="header">
                <div className="barra">
                    <button className="logo mobil" onClick={() => handleNav("inicio")}>
                        <img src={logo} alt="logo"></img>
                    </button>
                    <button className={`hamburguesa ${expandido ? "expandido" : ""}`} onClick={() => handleExpand()}>
                        <span className="linea1_h"></span>
                        <span className="linea2_h"></span>
                        <span className="linea3_h"></span>
                    </button>
                    <nav className={`navegacion ${expandido ? "expandido" : ""}`}>
                        <button className="logo web" onClick={() => handleNav("inicio")}><img src={logo} alt="logo"></img></button>
                        <button className="boton_nav" onClick={() => handleNav("peliculas")}>proyectos</button>
                        <button className="boton_nav" onClick={() => handleNav("shop")}>shop</button>
                        <button className="boton_nav" onClick={() => window.open("http://festival.carlota.international")}>festival</button>
                        <button className="boton_nav" onClick={() => handleNav("nosotros")}>nosotros</button>
                        <button className="boton_nav" onClick={() => handleNav("contacto")}>contacto</button>
                    </nav>
                </div>
                

            </header>

            <Outlet />
        </>
    );
};

export default Header;
