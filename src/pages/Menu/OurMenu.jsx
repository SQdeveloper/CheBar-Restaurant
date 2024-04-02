import React from 'react';
import PlateAnimation from '../../components/PlateAnimation/PlateAnimation';
import SliderMenu from '../../components/SliderMenu/SliderMenu';
import './OurMenu.css';

const OurMenu = () => {
    return (
        <section className='ourmenu'>
            <h2 className='title'>Our Menu</h2>
            <PlateAnimation/>
            <p>Welcome to our culinary haven, where every sip and bite is a journey of flavors and experiences. At Che Bar, we take pride in presenting a menu that reflects a harmonious fusion of creativity and taste. Explore our carefully crafted selection of cocktails, juices, and lunch and dinner offerings, each designed to elevate your dining experience.</p>
            <SliderMenu/>
        </section>
    );
};

export default OurMenu;