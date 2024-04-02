import React from 'react';
import './SectionHero.css';

const SectionHero = ({title, subtitle, image}) => {
    return (
        <section className='section-hero' style={{backgroundImage: `linear-gradient(rgba(0,0,0,.7) 100%, transparent), url('${image}')`}}>
            <span className='subtitle'>{subtitle}</span>
            <h2 className='section-hero-title title'>{title}</h2>
        </section>
    );
};

export default SectionHero;