import React from 'react';
import { Link } from 'react-router-dom';
import './SwiperBoxHero.css';

const SwiperBoxHero = ({titlePart1, titlePart2, image}) => {
    return (
        <section className='swiperBoxHero' style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5) 100%, transparent) , url('/images/bg/${image}')`}}>
            <div className="swiperBoxHero-text">
                <div className="swiperBoxHero-subtitle">
                    che bar
                </div>
                <h2 className='swiperBoxHero-title'>
                    <span>{titlePart1}</span>
                    <span>{titlePart2}</span>                    
                </h2>
                <Link className='swiperBoxHero-ancle' to='/'>
                    explore more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                </Link>
            </div>
        </section>
    );
};

export default SwiperBoxHero;