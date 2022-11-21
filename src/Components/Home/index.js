import "./home.css";
import Chicken from "../../assets/images/HamburguerChicken.png";
import Thumb1 from "../../assets/images/Thumb1.png";
import Thumb2 from "../../assets/images/Thumb2.png";
import Thumb3 from "../../assets/images/Thumb3.png";
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Home() {

    return (
        <div className="home">
            <div class="circle"></div>
            <div class="content">
                <div class="textBox">
                    <h2>Não é só Hamburguer Artesanal<br/>É <span>V-Burger's!</span></h2>
                    <p>Não passe vontade, peça já o seu hambúrguer.</p>
                    <a href="#" className="button">Aqui!!!</a>
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
        </div>
    )
}