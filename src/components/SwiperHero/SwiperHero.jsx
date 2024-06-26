import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperHero.css';
import SwiperBoxHero from '../SwiperBoxHero/SwiperBoxHero';

const SwiperHero = () => {    

    const infoList = [
        {
            titlePart1: 'live a new',
            titlePart2: 'experience in aruba',
            image: 'che-bar-aruba11-1536x1024.jpg'
        },
        {
            titlePart1: 'get to know our coffee,',
            titlePart2: 'cocktail, and food menu',
            image: 'blueberries-2278921_1280.jpg'
        }
    ]

    return (
        <>
        <Swiper autoplay={{delay: 4000,disableOnInteraction: false,}} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
            {infoList.map((info,index)=>(
                <SwiperSlide key={index}>
                    <SwiperBoxHero image={info.image} titlePart1={info.titlePart1} titlePart2={info.titlePart2} />
                </SwiperSlide>
            ))}             
        </Swiper>
        </>
    );
};

export default SwiperHero;