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
                <BiFoodMenu color="red" size="30"/>
                <h1>Cardápio</h1>
            </div>
            
            <div className="dishes" id="dishes" >
                <div className="box-container">
                    <div className="box">
                       <a href="#" className="fas fa-heart"></a>
                       <a href="#" className="fas fa-eye"></a>
                       <img src={Bacon} alt=" "/>
                       <h3>V-BACON</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div> 
                        <span>R$28,90</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Cogumelo} alt=" "/>
                        <h3>V-COGUMELO</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>R$32,00</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Malagueta} alt=" "/>
                        <h3>V-MALAGUETA</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>R$35,90</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Vegano} alt=" "/>
                        <h3>V-VEGANO</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>R$40,00</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Chicken} alt=" "/>
                        <h3>V-CHICKEN</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>R$29,90</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Kids} alt=" "/>
                        <h3>V-KIDS</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>R$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

