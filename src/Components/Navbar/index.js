import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";


export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false);

    function exibirNavbar(state) {
        const element = document.querySelector(".navbar");

        if (!state) {
            element.classList.add("showNavbar");
            element.classList.remove("notShowNavbar");
            setShowNavbar(true);
        } else {
            element.classList.add("notShowNavbar");
            element.classList.remove("showNavbar");
            setShowNavbar(false);
        }
    }

    return (
        <>
            <header>
                <a href="#">
                    <img src={Logo} className="logo" alt="..." />
                </a>
                <nav>
                    <ul className="navbar notShowNavbar">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Cardápio</a>
                        </li>
                        <li>
                            <a href="#">Quem Somos</a>
                        </li>
                        <li>
                            <a href="#">Galeria</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </nav>
                <div className="icon">
                    <div
                        onClick={() => exibirNavbar(showNavbar)}
                        className="bx bx-menu"
                        id="menu-icon"
                    ></div>
                </div>
            </header>
        </>
    );
}