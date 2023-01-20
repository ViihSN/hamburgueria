// import Modal from "react-responsive-modal";
// import { useState } from "react";
import "./section1.css";
import Bacon from "../../assets/images/img-lanches/bacon.jpg";
import Malagueta from "../../assets/images/img-lanches/malagueta.jpg";
import Chicken from "../../assets/images/img-lanches/chicken.jpg";
import Vegano  from "../../assets/images/img-lanches/vegano.jpg";
import Simples from "../../assets/images/img-lanches/simples.jpg";
import Alho from "../../assets/images/img-lanches/alho.jpg";
import { BiFoodMenu } from 'react-icons/bi';


// Modal.setAppElement('root')

export default function Section1() {

    // const [modalIsOpen, setIsOpen] = useState(false)

    // function handleOpenModal(){
    //     setIsOpen(true)
    // }

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
                            <div className="card">
                                <img src={Bacon} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Lanche</h2>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text">ndnfn dknmfiojfo kofkofkokf knmfijif</p>
                                        <p className="card-text mr-4 text-success">R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link" data-toggle="modal" data-target="#modalId">More</a> 

                                </div>

                            </div>    

                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Malagueta} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Lanche</h2>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text">ndnfn dknmfiojfo kofkofkokf knmfijif</p>
                                        <p className="card-text mr-4 text-success">R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link" data-toggle="modal" data-target="#modalId">More</a> 

                                </div>

                            </div>    

                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Chicken} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Lanche</h2>
                                    <div className="d-flex justify-content-between">
                                        <p className='card-text'>ndnfn dknmfiojfo kofkofkokf knmfijif</p>
                                        <p className='card-text mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link" data-toggle="modal" data-target="#modalId">More</a> 

                                </div>

                            </div>    

                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Vegano} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Lanche</h2>
                                    <div className="d-flex justify-content-between">
                                        <p className='card-text'>ndnfn dknmfiojfo kofkofkokf knmfijif</p>
                                        <p className='card-text mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link" data-toggle="modal" data-target="#modalId">More</a> 

                                </div>

                            </div>    

                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Simples} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Lanche</h2>
                                    <div className="d-flex justify-content-between">
                                        <p className='card-text'>ndnfn dknmfiojfo kofkofkokf knmfijif</p>
                                        <p className='card-text mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link" data-toggle="modal" data-target="#modalId">More</a> 

                                </div>

                            </div>    

                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <img src={Alho} className="card-img-top"/>
                                <div className="card-body">
                                    <h2 className="card-title">Lanche</h2>
                                    <div className="d-flex justify-content-between">
                                        <p className='card-text'>ndnfn dknmfiojfo kofkofkokf knmfijif</p>
                                        <p className='card-text mr-4 text-success'>R$40,00</p>
                                    </div>
                                    <a href="#" className="card-link" data-toggle="modal" data-target="#modalId">More</a> 

                                </div>

                            </div>    

                        </div>

                    </div>

                </div>
            </div>

            <div className="modal" id="modalId" >
                <button className="modal-button">
                    Modal
                </button>
            </div>
            
            
                
        </section>
    );
}