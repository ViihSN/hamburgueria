import "./navbar.css";
import { Link } from "react";
import Logo from "../../assets/images/logo2.png";
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Navbar() {

    return (

        <div className="container-navbar">
            <div className="top-navbar">
                <img src={Logo} className="logo animate__animated animate__bounce" alt=""/>
                <div>
                    <FaInstagramSquare className="icons"/>
                    <FaFacebookSquare className="icons"/>
                    <FaWhatsappSquare className="icons"/>
                </div>
            </div>
            <div className="container-navbar-itens">
                <ul>
                    <li>
                        <a href="">Contato</a> 
                    </li>
                    <li>
                        <a href="">Quem Somos</a> 
                    </li>
                    <li>
                        <a href="">Localização</a> 
                    </li>
                    <li>
                        <a href="">Lanches</a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}