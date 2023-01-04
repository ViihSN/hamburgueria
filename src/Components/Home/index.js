import "./home.css";
import Chicken from "../../assets/images/HamburguerChicken.png";
import Provolone from "../../assets/images/HamburguerProvolone.png";
import Duplo from "../../assets/images/HamburguerDuplo.png";
import Thumb1 from "../../assets/images/Thumb1.png";
import Thumb2 from "../../assets/images/Thumb2.png";
import Thumb3 from "../../assets/images/Thumb3.png";
import { useState } from 'react';
import { motion, useScroll } from "framer-motion";
import ScrollReveal from 'scrollreveal';

export default function Home() {

    const [lancheSelecionado, setLancheSelecionado] = useState(Chicken);
    const { scrollYProgress } = useScroll();

    ScrollReveal().reveal('.hamburgueres')

    function novoLancheSelecionado(lanche) {
        setLancheSelecionado(lanche);
        const element = document.querySelector('.hamburgueres');
        element.classList.add('animate__animated', 'animate__bounceInRight');

        element.addEventListener('animationend', () => {
            element.classList.remove('animate__animated', 'animate__bounceInRight');
        });
    }

    return (
        <div>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />

            <section>
            <div className="home">
                    <div className="circle"></div>
                    <div className="content">
                        <div className="textBox">
                            <div className="linhaLateral">
                               <h2>Não é só Hamburguer Artesanal é <br/><span>V-Burger's!</span></h2>
                               <p>Não passe vontade, peça já o seu hambúrguer.</p>
                            </div>
                            <a href="#" className="button">Pedir agora</a>
                        </div>
                    </div>
                <div className="imgBox">
                    <img src={lancheSelecionado} className="hamburgueres"/>
                </div>
                    <div className="slider">
                        <ul className="thumb">
                            <li>
                                <img onClick={() => novoLancheSelecionado(Chicken)} src={Thumb1} alt="..."/>
                                <img onClick={() => novoLancheSelecionado(Provolone)} src={Thumb2} alt="..."/>
                                <img onClick={() => novoLancheSelecionado(Duplo)} src={Thumb3} alt="..."/>
                            </li>
                        </ul>
                    </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
                <path fill="#F7F7F7" fill-opacity="1"   
                  d="M0,160L26.7,149.3C53.3,139,107,117,160,138.7C213.3,160,267,224,320,240C373.3,256,427,224,480,181.3C533.3,139,587,85,640,96C693.3,107,747,181,800,197.3C853.3,213,907,171,960,154.7C1013.3,139,1067,149,1120,170.7C1173.3,192,1227,224,1280,240C1333.3,256,1387,256,1413,256L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
                </path>
            </svg>
            </section>  
        </div> 
    )        
}