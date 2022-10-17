import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Idiomas from "./components/Idiomas.jsx";
import Header from "./components/Header.jsx";
import Peliculas from "./components/Peliculas.jsx";
import Festival from "./components/Festival.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Footer from "./components/Footer.jsx";

import bannershop from "../src/imgp/bannershop.png";
import botonshop from "../src/imgp/botonshop.png";
import shop from "../src/imgp/shop.png";
import flecha from "./imgp/flecha.png";
import gif from "./imgp/gif.gif";

import "./styles/shopsection.css";

function App() {
    const [lang, setLang] = useState("");

    const handleIdioma = (idioma) => {
        localStorage.setItem("idioma", idioma);
        document.querySelector("body").classList.remove("fijado");
        setLang(idioma);
    };

    useEffect(() => {
        const idioma = localStorage.getItem("lang");
        if (idioma) {
            setLang(idioma);
        }
        setLang("");
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    element={
                        lang === "" ? (
                            <Idiomas handleIdioma={handleIdioma} />
                        ) : (
                            <Header />
                        )
                    }
                >
                    <Route index path="/" element={
                        <>
                            <div className="hero">
                                <img className="gif" src={gif} alt="gif"></img>
                                <img className="flecha" src={flecha} alt=""></img>
                            </div>
                            <Peliculas />
                            <div className="irshop">
                                <img className="bannershop" src={bannershop} alt="" ></img>
                                <img className="shop" src={shop} alt="" ></img>
                                <Link to="/shop"> <img className="botonshop" src={botonshop} alt="" ></img> </Link>
                            </div>
                            <Festival />
                            <Nosotros />
                            <Footer />
                        </>
                    }/>
                    <Route path="/shop" element={null} />

                </Route>
            </Routes>
        </Router>
    );
}

export default App;
