import "./section1.css";
import Bacon from "../../assets/images/img-lanches/lanche1.png";
import Cogumelo from "../../assets/images/img-lanches/lanche2.png";
import Malagueta from "../../assets/images/img-lanches/lanche3.png";
import Vegano from "../../assets/images/img-lanches/lanche4.png";
import Chicken from "../../assets/images/img-lanches/lanche5.png";
import Kids from "../../assets/images/img-lanches/lanche6.png";
import { BiFoodMenu } from 'react-icons/bi';


export default function Section1() {

    
    return(
        <section id="sessao1">
            <div className="text-center">
                <h1><BiFoodMenu color="red"/>Cardápio</h1>
            </div>
        
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={Bacon}/>
                    </div>
                    <div className="contentBx">
                        <h2>V-BACON</h2>
                        <div class="size">
                            <h3> 
                             Ingredientes:
                             Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                            </h3>
                        </div> 
                        <div className="dolar">
                            <h3>R$28,90</h3>
                        </div>
                        <a href="#">Peça Aqui!</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src={Malagueta}/>
                    </div>
                    <div className="contentBx">
                        <h2>V-MALAGUETA</h2>
                        <div class="size">
                            <h3> 
                             Ingredientes:
                             Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                            </h3>
                        </div> 
                        <div className="dolar">
                            <h3>R$28,90</h3>
                        </div>
                        <a href="#">Peça Aqui!</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src={Cogumelo}/>
                    </div>
                    <div className="contentBx">
                        <h2>V-COGUMELO</h2>
                        <div class="size">
                            <h3> 
                             Ingredientes:
                             Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                            </h3>
                        </div> 
                        <div className="dolar">
                            <h3>R$28,90</h3>
                        </div>
                        <a href="#">Peça Aqui!</a>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="card2">
                    <div className="imgBx2">
                        <img src={Chicken}/>
                    </div>
                    <div className="contentBx2">
                        <h2>V-CHICKEN</h2>
                        <div class="size2">
                            <h3> 
                             Ingredientes:
                             Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                            </h3>
                        </div> 
                        <div className="dolar2">
                            <h3>R$28,90</h3>
                        </div>
                        <a href="#">Peça Aqui!</a>
                    </div>
                </div>
                <div className="card2">
                    <div className="imgBx2">
                        <img src={Vegano}/>
                    </div>
                    <div className="contentBx2">
                        <h2>V-VEGANO</h2>
                        <div class="size2">
                            <h3> 
                             Ingredientes:
                             Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                            </h3>
                        </div> 
                        <div className="dolar2">
                            <h3>R$28,90</h3>
                        </div>
                        <a href="#">Peça Aqui!</a>
                    </div>
                </div>
                <div className="card2">
                    <div className="imgBx2">
                        <img src={Kids}/>
                    </div>
                    <div className="contentBx2">
                        <h2>V-KIDS</h2>
                        <div class="size2">
                            <h3> 
                             Ingredientes:
                             Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                            </h3>
                        </div> 
                        <div className="dolar2">
                            <h3>R$28,90</h3>
                        </div>
                        <a href="#">Peça Aqui!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

