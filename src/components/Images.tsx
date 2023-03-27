import React from 'react'
import { Bluetooth } from './vectorImgs/Bluetooth'
import { Headphone } from './vectorImgs/Headphone'
import { Smartphone } from './vectorImgs/Smartphone'
import { Tablet } from './vectorImgs/Tablet'

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../index.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const mobileMediaQuery = window.matchMedia('(max-width: 450px)').matches;



export const Images: React.FC = () => {

    if (mobileMediaQuery) {
        return (<div className='Mainblock-vector'>
            <img id='MainBlock_berries' src="/images/Box 2.png" alt="" />

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='vector_container'>
                        <Headphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='vector_container'>
                        <Smartphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='vector_container'>
                        <Tablet />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='vector_container'>
                        <Bluetooth />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='vector_container'>
                        <Headphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='vector_container'>
                        <Smartphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        )
    } else {
        return (
            <div className='Mainblock-vector'>
                <div className='Mainblock-vector-up'>
                    <div className='vector_container'>
                        <Headphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='vector_container'>
                        <Smartphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='Mainblock-vector-mid'>
                    <div className='vector_container'>
                        <Tablet />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img src="/images/Box 2.png" alt="" />
                    <div className='vector_container'>
                        <Bluetooth />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='Mainblock-vector-bot'>
                    <div>
                        <Headphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <Smartphone />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        )
    }
}