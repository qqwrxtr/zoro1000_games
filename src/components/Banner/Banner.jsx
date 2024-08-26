import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import './banner.css';

import slider1 from "./../../assets/img/slider1.png";
import slider2 from "./../../assets/img/slider2.png";
import slider3 from "./../../assets/img/slider3.png";
import slider4 from "./../../assets/img/slider4.png";
import smslide1 from "./../../assets/img/425x440_1.png"
import smslide2 from "./../../assets/img/425x440_2.png"
import smslide3 from "./../../assets/img/425x440_3.png"
import smslide5 from "./../../assets/img/425x440_5.png"
import mdslide1 from "./../../assets/img/768x440_1.png"
import mdslide2 from "./../../assets/img/768x440_2.png"
import mdslide3 from "./../../assets/img/768x440_3.png"
import mdslide5 from "./../../assets/img/768x440_5.png"


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
                delay: 6000, 
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
                <div className="swiper d-lg-block d-none">
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
                        <div className="swiper-slide">
                            <img src={slider4} alt="slider2" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper swipermd d-md-block d-lg-none d-sm-none d-none">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={mdslide1} alt="slider1" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={mdslide2} alt="slider4" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={mdslide3} alt="slider2" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={mdslide5} alt="slider2" className='img-fluid'/>
                        </div>
                    </div>
                </div>
                <div className="swiper d-sm-block d-md-none">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={smslide1} alt="slider1" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={smslide2} alt="slider4" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={smslide3} alt="slider2" className='img-fluid'/>
                        </div>
                        <div className="swiper-slide">
                            <img src={smslide5} alt="slider2" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
