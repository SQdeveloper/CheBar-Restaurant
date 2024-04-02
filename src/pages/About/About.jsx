import React from 'react';
import SectionHero from '../../components/SectionHero/SectionHero';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
            <SectionHero image={'https://chebararuba.com/wp-content/uploads/2024/01/che-bar-aruba5-1536x1024.jpeg'} title={'About Us'} subtitle={'che bar'}/>
            <section className="about-first-content">
                <h2 className='title'>Welcome to Chebar, an Argentinean haven in the heart of Aruba!</h2>
                <p>At Chebar, we bring the vibrant flavors of Argentina to the shores of Aruba, creating a one-of-a-kind culinary experience. Our restaurant bar is a welcoming space where you can savor delightful dishes in a cozy and lively atmosphere.</p>
                <p>From the moment you step inside, you’ll be embraced by the warmth of Argentine hospitality. Our dedicated team is committed to providing exceptional service, making your visit a memorable and enjoyable experience.</p>
            </section>
            <div className="about-second-content">
                <Link className='about-second-content-link' to='/ourmenu'>
                    <div className="about-second-content-img">
                        <img src="https://chebararuba.com/wp-content/uploads/2024/01/DRINKS-IN-ARUBA.jpeg" alt="food" />
                    </div>
                    <span className='about-second-content-title'>Cocktail</span>
                </Link>
                <Link className='about-second-content-link' to='/ourmenu'>
                    <div className="about-second-content-img">  
                        <img src="https://chebararuba.com/wp-content/uploads/2023/12/PRODUCT-CHE-BAR-2-768x1152.jpg" alt="food" />
                    </div>
                    <span className='about-second-content-title'>Lunch & Dinner</span>
                </Link>
                <Link className='about-second-content-link' to='/ourmenu'>
                    <div className="about-second-content-img">
                        <img src="https://chebararuba.com/wp-content/uploads/2024/01/CHEBAR-ARGENTINA-768x1152.jpeg" alt="food" />
                    </div>
                    <span className='about-second-content-title'>Hot & Cold Juices</span>
                </Link>
            </div>
            <div className="about-third-content">
                <span className='subtitle'>che bar aruba</span>
                <p>"At Chebar, we blend the Argentine
                    passion for good food with the
                    Caribbean charm of Aruba, creating a
                    unique culinary experience that will
                    delight your senses."
                </p>
            </div>
            <div className="about-fourth-content">
                <section className="about-fourth-bg">
                    <h2 className='title'>Our Philosophy</h2>
                    <p>Our restaurant bar is the perfect place to enjoy unforgettable moments in a cozy and vibrant atmosphere.</p>
                </section>
            </div>
        </div>
    );
};

export default About;