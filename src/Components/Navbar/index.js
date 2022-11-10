import "./navbar.css";
import Logo from "../../assets/images/logo2.png";

export default function Navbar() {

    return (

        <div className="container-navbar">
            
            <img src={Logo} className="logo animate__animated animate__bounce" alt=""/>

            <div className="container-navbar-itens">
                <ul>
                    <li>Contato</li>
                    <li>Quem Somos</li>
                    <li>Localização</li>
                    <li>Lanches</li>
                </ul>
            </div>
        </div>
    )
}