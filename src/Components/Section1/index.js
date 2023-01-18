import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "./section1.css";
import { Pagination } from "swiper";
import Bacon from "../../assets/images/img-lanches/lanche1.png";
import Cogumelo from "../../assets/images/img-lanches/lanche2.png";
import Malagueta from "../../assets/images/img-lanches/lanche3.png";
import Chicken from "../../assets/images/img-lanches/lanche4.png";
import Vegano  from "../../assets/images/img-lanches/lanche5.png";
import Kids from "../../assets/images/img-lanches/lanche6.png";
import { BiFoodMenu } from 'react-icons/bi';




export default function Section1() {

    return(

        <section id="sessao1">
            <div className="text-center">
                <BiFoodMenu color="red" size="50"/>
                <h1>Cardápio</h1>
            </div>

            <Swiper 
              grabCursor={true}
              loop={true}
              centeredSlides={true}
              spaceBetween={20}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >

                <div className="swiper food-slider">

                    <div className="swiper-wrapper">

                        <SwiperSlide>
                            <div className="swiper-slide slide" data-name="food-1">
                                <img src={Bacon} alt=""/>
                                <h3>delicious food</h3>
                                <div class="price">$49.99</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide slide" data-name="food-2">
                                <img src={Cogumelo} alt=""/>
                                <h3>delicious food</h3>
                                <div class="price">$49.99</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="swiper-slide slide" data-name="food-3">
                            <img src={Malagueta} alt=""/>
                            <h3>delicious food</h3>
                            <div class="price">$49.99</div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide slide" data-name="food-4">
                                <img src={Chicken} alt=""/>
                                <h3>delicious food</h3>
                                <div class="price">$49.99</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide slide" data-name="food-5">
                                <img src={Vegano} alt=""/>
                                <h3>delicious food</h3>
                                <div class="price">$49.99</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide slide" data-name="food-6">
                                <img src={Kids} alt=""/>
                                <h3>delicious food</h3>
                                <div class="price">$49.99</div>
                            </div>
                        </SwiperSlide>
                        
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </section>
    )
}

