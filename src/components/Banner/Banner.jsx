import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import './banner.css';

import slider1 from "./../../assets/img/slider1.png";
import slider2 from "./../../assets/img/slider2.png";
import slider3 from "./../../assets/img/slider3.png";
import slider4 from "./../../assets/img/slider4.jpg";

const Banner = () => {
    useEffect(() => {
        new Swiper('.swiper', {
            modules: [Navigation, Autoplay],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            autoplay: {
                delay: 10000, 
                disableOnInteraction: false,
            },
        });
    }, []);

    return (
        <>
            <div className="container title_container">
                <div className="row" >
                    <h2>חריצי קזינו</h2>
                </div>
            </div>
            <div className="container banner">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={slider1} alt="slider1" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={slider3} alt="slider4" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={slider2} alt="slider2" className='img-fluid'/>
                        </div>
                    </div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </>
    );
};

export default Banner;
