import "./navbar.css";

import Logo from "../../assets/images/logo2.jpg";


export default function Navbar() {


    return (
        
        <>
            <header>
                <a href="#">
                  <img src={Logo} className="logo" alt="..."/>
                </a>
                <ul>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Cardápio</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Endereço</a></li>
                </ul>
            </header>
        </>
    )
}