import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { useRef } from "react";

export default function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        
        <>
            <header>
                <a href="#">
                  <img src={Logo} className="logo" alt="..."/>
                </a>
                <nav ref={navRef}>
                    <ul className="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cardápio</a></li>
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Galeria</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul> 
                </nav>
                
                <div className="icon">
                    <div onClick={showNavbar} className="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>
        </>
    )
}