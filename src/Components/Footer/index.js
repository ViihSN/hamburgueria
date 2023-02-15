import "./footer.css";
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Footer() {

    return (

        <footer className="footer" id="footer">
            <div className="social">
                <a href="https://www.instagram.com/"><FaInstagramSquare className="icones" /></a>
                <a href="https://pt-br.facebook.com/"><FaFacebookSquare className="icones" /></a>
                <a href="https://www.whatsapp.com/?lang=pt_br"><FaWhatsappSquare className="icones"/></a>
            </div>
            <div className="links">
                <a href="#">Politica de Privacidade</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Nossa Empresa</a>
            </div>
            <p> &#169; 2023 Todos os direitos reservados.</p>
        </footer>

    )
}