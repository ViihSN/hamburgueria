import "./contato.css";
import React, { Fragment } from 'react';
import { ImBubbles4 } from "react-icons/im";


export default function Contato() {
    return (

        <Fragment>
            <section className="contact" id="contato">

                <div className="contact-heading">
                    <div className="text-center">
                        <ImBubbles4 color="red" size="40" />
                        <h1>Contato</h1>
                    </div>
                </div>
                <div className="contact-container">
                    <div className="row">
                        <div className="column">
                            <div className="contact-widget">

                                <div className="contact-widget-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div className="text">
                                            <h5>Endereço</h5>
                                            <p>Rua da Imprensa - Monte Castelo, Campo Grande-MS</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-widget-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                        <div className="text">
                                            <h5>Contato</h5>
                                            <p>(67) 2161-0655 /(67) 2528-7572 </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-widget-item">
                                    <div className="icon">
                                        <i className="fa-regular fa-envelope"></i>
                                        <div className="text">
                                            <h5>E-mail</h5>
                                            <p>v.burgers@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="contact-form">
                                <form action="#">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <textarea placeholder="Comment"></textarea>
                                    <button type="submit" className="site-btn"> Enviar Mensagem! </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="map-column">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.428463608364!2d-54.61919778487926!3d-20.447587886316107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e62c58ffa447%3A0xcf1344e848d9cf79!2sR.%20da%20Imprensa%20-%20S%C3%A3o%20Francisco%2C%20Campo%20Grande%20-%20MS%2C%2079002-333!5e0!3m2!1spt-PT!2sbr!4v1676327813004!5m2!1spt-PT!2sbr"
                                    width="600" height="450" style={{ border: 0 }} allowfullscreen=""
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
