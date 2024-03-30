import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './SliderBottom.css';

const Box = ({title,url})=>{
    return(
        <div className='swiper-bottom-box'>
            <img src={url} alt="bg" />
            <div className="swiper-bottom-box-secondary">
                {title}
                <img src="/images/chevron-right.svg" alt="" />
            </div>
        </div>
    )
}

const SliderBottom = () => {
    return (                
        <Swiper
            slidesPerView={4}
            spaceBetween={0}            
            navigation={true}
            pagination={{type: 'fraction'}}
            modules={[Pagination, Navigation]}
            className="swiper-bottom"
        >
            <SwiperSlide><Box url='https://chebararuba.com/wp-content/uploads/2024/01/Che-Bar-1-768x768.jpeg' title='Drinks'/></SwiperSlide>
            <SwiperSlide><Box url='https://chebararuba.com/wp-content/uploads/2024/01/Menu-768x768.jpeg' title='Where we are?'/></SwiperSlide>
            <SwiperSlide><Box url='https://chebararuba.com/wp-content/uploads/2024/01/Chebar.jpeg' title='About Us'/></SwiperSlide>
            <SwiperSlide><Box url='https://chebararuba.com/wp-content/uploads/2024/01/B-768x768.jpeg' title='BreakFast'/></SwiperSlide>
            <SwiperSlide><Box url='https://chebararuba.com/wp-content/uploads/2024/01/Empanadas-Argentinas-768x768.jpeg' title='Dinner'/></SwiperSlide>                    
        </Swiper>
    );
};

export default SliderBottom;