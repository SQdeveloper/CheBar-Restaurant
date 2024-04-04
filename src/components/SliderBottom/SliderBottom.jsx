import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './SliderBottom.css';
import { Link } from 'react-router-dom';

const Box = ({title,url, redirection})=>{
    return(
        <Link onClick={()=>{scrollTo(0,0)}} to={`/${redirection}`} className='swiper-bottom-box'>
            <img src={url} alt="bg" />
            <div className="swiper-bottom-box-secondary">
                {title}
                <img src="/images/chevron-right.svg" alt="" />
            </div>
        </Link>
    )
}

const SliderBottom = () => {
    const [views, setViews] = useState(4);
    const [space, setSpace] = useState(0);

    useEffect(()=>{        
        if(window.innerWidth > 1024) {
            setViews(4);
        }
        else if(window.innerWidth <= 1024 && window.innerWidth > 768) {
            setViews(3);
        }
        else if(window.innerWidth <= 768) {
            setViews(1);
            setSpace(30);
        }
    },[])
    
    return (                
        <Swiper
        slidesPerView={views}
        spaceBetween={space}            
        navigation={true}
        pagination={{type: 'fraction'}}
        modules={[Pagination, Navigation]}
        className="swiper-bottom"            
        >
            <SwiperSlide><Box redirection='contact-us' url='https://chebararuba.com/wp-content/uploads/2024/01/Che-Bar-1-768x768.jpeg' title='Where we are?'/></SwiperSlide>
            <SwiperSlide><Box redirection='menu' url='https://chebararuba.com/wp-content/uploads/2024/01/Menu-768x768.jpeg' title='Drinks'/></SwiperSlide>
            <SwiperSlide><Box redirection='about' url='https://chebararuba.com/wp-content/uploads/2024/01/Chebar.jpeg' title='About Us'/></SwiperSlide>
            <SwiperSlide><Box redirection='menu' url='https://chebararuba.com/wp-content/uploads/2024/01/B-768x768.jpeg' title='BreakFast'/></SwiperSlide>
            <SwiperSlide><Box redirection='menu' url='https://chebararuba.com/wp-content/uploads/2024/01/Empanadas-Argentinas-768x768.jpeg' title='Dinner'/></SwiperSlide>                    
        </Swiper>
    );
};

export default SliderBottom;