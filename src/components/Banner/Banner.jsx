import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import './banner.css';

import slider1 from "./../../assets/img/slider1.png";
import slider2 from "./../../assets/img/slider2.png";

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
        <div className="container banner">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={slider1} alt="slider1" className='img-fluid'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={slider2} alt="slider2" className='img-fluid'/>
                    </div>
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
};

export default Banner;
