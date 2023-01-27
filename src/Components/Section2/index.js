import "./section2.css";
import { BsFillAwardFill } from "react-icons/bs";
import Flutuante from "../../assets/images/img-flutuante.png";

export default function Section2() {
    
    
    return(


        <section id="sessão2">
            
            <div className="container">
                <div className="text-center">
                    < BsFillAwardFill color='green' size="40"/>
                    <h1>Quem Somos</h1>
                </div>
                <div className="quem-somos">
                    <div className="imagem-flutuante">
                        <img src={Flutuante} alt="..."/>
                    </div>
                </div>
                <div className="content1">
                    <div className="textBox1">
                        <div className="linhaLateral">
                            <p>Somos um novo formato um novo olhar sobre os hambúrgueres, uma nova receita, somente os produtos mais frescos, somente carne de qualidade.
                                Nosso objetivo é servir a você os melhores pratos saborosos e rápidos, para trazer prazer e deixar uma impressão agradável.<br/>
                                A <span>V-Burger's</span> tem como objetivo principal a satisfação do cliente a partir de nosso trabalho. 
                                Apreciamos muito a qualidade e a rapidez do cozimento, respeitamos as opiniões e o feedback, cozinhamos como para nós mesmos.
                            </p>
                        </div>
                        <a href="#" className="button">Pedir agora</a>
                    </div>
                </div>
            </div>
        </section>
    )

}

    