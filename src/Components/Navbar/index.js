import "./navbar.css";
import Logo from "../../assets/images/logo2.jpg";
import Chicken from "../../assets/images/HamburguerChicken.png";
import Thumb1 from "../../assets/images/Thumb1.png";
import Thumb2 from "../../assets/images/Thumb2.png";
import Thumb3 from "../../assets/images/Thumb3.png";
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';



export default function Navbar() {

    return (
        
        <section>
            <div class="circle"></div>
            <header>
                <a href="#">
                  <img src={Logo} class="logo" alt="..."/>
                </a>
                <ul>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Cardápio</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Endereço</a></li>
                </ul>
            </header>
            <div class="content">
                <div class="textBox">
                    <h2>Não é só Hamburguer Artesanal<br/>É <span>V-Burger's!</span></h2>
                    <p>Não passe vontade, peça já o seu hambúrguer.</p>
                    <a href="#" class="button">Aqui!!!</a>
                </div>
            </div>
            <div class="imgBox">
                <img src={Chicken} class="hamburgueres"/>
            </div>
            <ul class="thumb">
                <li>
                    <img src={Thumb1} alt="..."/>
                    <img src={Thumb2} alt="..."/>
                    <img src={Thumb3} alt="..."/>
                </li>
            </ul>
            <div class="icone-rede-sociais">
                <ul >
                    <li><a href="#"><FaInstagramSquare className="icons"/></a></li>
                    <li><a href="#"><FaFacebookSquare className="icons"/></a></li>
                    <li><a href="#"><FaWhatsappSquare className="icons"/></a></li>
                </ul>
            </div>
        </section>
    )
}