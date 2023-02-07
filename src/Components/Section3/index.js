import "./section3.css";
import { IoImages } from "react-icons/io5";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import foto1 from "../../assets/images/img-galery/foto-1.jpg";
import foto2 from "../../assets/images/img-galery/foto-2.jpg";
import foto3 from "../../assets/images/img-galery/foto-7.jpg";
import foto4 from "../../assets/images/img-galery/foto-4.jpg";
import foto5 from "../../assets/images/img-galery/foto-5.jpg";
import foto6 from "../../assets/images/img-galery/foto-6.jpg";
import foto7 from "../../assets/images/img-galery/foto-3.jpg";


export default function Section3() {

    return(
        <section id="sessão3">
            <div className="container">
                <div className="text-center">
                    < IoImages color='#ffbb00' size="40"/>
                    <h1>Galeria de Lanches</h1>
                </div>
                <div className="galery">
                    <div className="slider-lanches">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={foto1}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={foto2}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={foto3}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={foto4}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={foto5}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={foto6}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={foto7}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}