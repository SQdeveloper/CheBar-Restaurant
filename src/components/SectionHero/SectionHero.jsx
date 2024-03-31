import React from 'react';
import './SectionHero.css';

const SectionHero = ({title, subtitle}) => {
    return (
        <section className='section-hero' style={{backgroundImage: `linear-gradient(rgba(0,0,0,.7) 100%, transparent), url('https://chebararuba.com/wp-content/uploads/2024/01/che-bar-aruba5-1536x1024.jpeg')`}}>
            <span className='subtitle'>{subtitle}</span>
            <h2 className='section-hero-title title'>{title}</h2>
        </section>
    );
};

export default SectionHero;