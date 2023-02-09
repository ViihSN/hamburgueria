import "./galery.css";
import { IoImages } from "react-icons/io5";
import foto1 from "../../assets/images/img-galery/foto-1.jpg";
import foto2 from "../../assets/images/img-galery/foto-2.jpg";
import foto3 from "../../assets/images/img-galery/foto-7.jpg";
import foto4 from "../../assets/images/img-galery/foto-4.jpg";
import foto5 from "../../assets/images/img-galery/foto-5.jpg";
import foto6 from "../../assets/images/img-galery/foto-6.jpg";
import foto7 from "../../assets/images/img-galery/foto-3.jpg";

export default function Galery() {

    return (

        <section id="galery">

            <div className="text-center">
                < IoImages color='#ffbb00' size="40" />
                <h1>Galeria de Lanches</h1>
            </div>
            <div className="galery-container">
                <div className="galeryBox">
                    <a href={foto4} className="image"><img src={foto4} alt=""/></a>
                    <a href={foto7} className="image"><img src={foto7} alt=""/></a>
                    <a href={foto3} className="image"><img src={foto3} alt=""/></a>
                    <a href={foto2} className="image"><img src={foto2} alt=""/></a>
                    <a href={foto5} className="image"><img src={foto5} alt=""/></a>
                    <a href={foto1} className="image"><img src={foto1} alt=""/></a>
                    <a href={foto6} className="image"><img src={foto6} alt=""/></a>
                </div>
            </div>
        </section>
    )
}
