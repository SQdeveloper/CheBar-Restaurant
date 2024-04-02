import React from 'react';
import SectionHero from '../../components/SectionHero/SectionHero';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact'>
            <SectionHero image='https://chebararuba.com/wp-content/uploads/2024/01/che-bar-aruba14-1536x1024.jpg' title='Contact Us' subtitle='che bar'/>
            <span className="contact-question title">"Got something to say? Spit it out. We’re all ears and plenty of talk.".</span>
            <div className="contact-banner">
                <div className="contact-banner-image"><img src="https://chebararuba.com/wp-content/uploads/2024/01/che-bar-aruba6.jpg" alt="banner" /></div>
                <section className="contact-banner-info">
                    <span>Ready to claim your throne? Book a seat. Or don’t, and hear about it from those who did.</span>
                    <form action="">
                        <label htmlFor="">
                            full name
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            email
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            phone
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            your message
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </label>
                        <div className="buttom">
                            <div className='policy'>
                                <input type="checkbox" />
                                I accept the privacy policy
                            </div>
                            <button>Send</button>
                        </div>
                    </form>
                </section>
            </div>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.1128753776047!2d-70.0460909261967!3d12.57480822345606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e85380432ece79d%3A0xc3f6b588c0643141!2zQ2jDqSBCYXI!5e0!3m2!1ses-419!2spe!4v1711763588174!5m2!1ses-419!2spe" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactUs;