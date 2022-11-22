import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../imgp/logo.png";

import "../styles/header.css";

import {header} from "../utils/lang.js";

const Header = ({setLang, lang}) => {

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
                        <button className="boton_nav" onClick={() => handleNav("peliculas")}>{header[lang]["proyectos"]}</button>
                        <button className="boton_nav" onClick={() => handleNav("shop")}>{header[lang]["shop"]}</button>
                        <button className="boton_nav" onClick={() => window.open("http://festival.carlota.international")}>{header[lang]["festival"]}</button>
                        <button className="boton_nav" onClick={() => handleNav("nosotros")}>{header[lang]["nosotros"]}</button>
                        <button className="boton_nav" onClick={() => handleNav("contacto")}>{header[lang]["contacto"]}</button>
                        <div className="navegacion_idioma">
                            <button className="boton_nav" onClick={() => setLang("es")}>es</button>
                            <button className="boton_nav" onClick={() => setLang("en")}>en</button>
                            <button className="boton_nav" onClick={() => setLang("de")}>de</button>
                        </div>
                    </nav>
                </div>
                

            </header>

            <Outlet />
        </>
    );
};

export default Header;
