import "./section1.css";
import Bacon from "../../assets/images/img-lanches/bacon.jpg";
import Malagueta from "../../assets/images/img-lanches/malagueta.jpg";
import Chicken from "../../assets/images/img-lanches/chicken.jpg";
import Cheddar  from "../../assets/images/img-lanches/cheddar.jpg";
import Alface from "../../assets/images/img-lanches/alfaceroxo.jpg";
import Alho from "../../assets/images/img-lanches/alho.jpg";
import Teste from "../../assets/images/lanche1.jpg";
import { BiFoodMenu } from 'react-icons/bi';




export default function Section1() {

    return(

        <section id="sessao1">
            <div className="container mt-5">
                <div className="text-center">
                    <BiFoodMenu color='red' size="40"/>
                    <h1>Cardápio</h1>
                </div>

                <div className="container mt-4 d-flex mb-5">
                    <div className="row">

                        <div className="col-md-4 mt-5">
                            <div className="card" data-name="p-1">
                                <img src={Bacon} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Cheddar Bacon</h2>
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-star "></i>  
                                        <p className="card-price mr-4 text-success">R$28,90</p>
                                    </div> 
                                    <a href="#" className="card-link">Peça Aqui!</a>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Malagueta} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Double Chilli</h2>
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-star"></i>
                                        <p className="card-price mr-4 text-success">R$30,00</p>
                                    </div>
                                    <a href="#" className="card-link">Peça Aqui!</a> 
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Chicken} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title"> Mayo Chicken </h2>
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-star"></i>
                                        <p className='card-price mr-4 text-success'>R$26,80</p>
                                    </div>
                                    <a href="#" className="card-link">Peça Aqui!</a> 
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Cheddar} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Special Sauce</h2>
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-star"></i>
                                        <p className='card-price mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link">Peça Aqui!</a> 
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Alface} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Purple Salad</h2>
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-star"></i>
                                        <p className='card-price mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link">Peça Aqui!</a> 
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Alho} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Special Garlic</h2>
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-star"></i>
                                        <p className='card-price mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link">Peça Aqui!</a> 
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}