import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
            <section className="footer-top-direction">
            <h2 className="footer-top-direction-title title">
              J.E. Irausquin Blvd. 382-A, Palm Beach, Aruba
            </h2>
            <div className="footer-top-direction-group">
            <svg aria-hidden="true" className="e-font-icon-svg e-far-clock" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
              Monday to Saturday, from 8.00 a.m. to 11.00 p.m. Sundays, from 3:00 p.m. to 11:00 p.m.
            </div>
            <div className="footer-top-direction-group">
              <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
              297 699 1696            
            </div>
            <div className="footer-top-direction-group">
              <svg aria-hidden="true" className="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
              info@chebararuba.com
            </div>
            <button className="footer-top-direction-group">
              <svg aria-hidden="true" className="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              Whatsapp Chat
            </button>
          </section>
            </div>
            <div className="footer-bottom">
                <img className='footer-bg' src="https://chebararuba.com/wp-content/uploads/2024/01/Shape.png" alt="bg" />
                <div className="footer-content">
                    <div className="footer-group">
                        <img src="https://chebararuba.com/wp-content/uploads/2023/11/cropped-Icono.png" alt="" />
                        <div className="footer-group-country">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 512 512"><circle cx="256" cy="256" fill="#ffda44" r="256"></circle><g fill="#338af3"><path d="m256 512c77.591 0 147.114-34.524 194.061-89.043h-388.122c46.947 54.519 116.47 89.043 194.061 89.043z"></path><path d="m512 256c0-141.384-114.616-256-256-256s-256 114.616-256 256c0 23.107 3.08 45.489 8.819 66.783h494.363c5.738-21.294 8.818-43.676 8.818-66.783z"></path><path d="m20.349 356.174c4.935 11.596 10.704 22.748 17.225 33.391h436.852c6.521-10.644 12.29-21.796 17.227-33.391z"></path></g><path d="m117.317 161.463-50.016-22.074 50.016-22.074 22.073-50.015 22.073 50.015 50.015 22.074-50.015 22.074-22.073 50.015z" fill="#f0f0f0"></path><path d="m139.39 94.867 13.631 30.889 30.89 13.633-30.89 13.632-13.631 30.889-13.633-30.889-30.889-13.632 30.889-13.633z" fill="#d80027"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                            Aruba
                        </div>
                    </div>
                    <div className="footer-group">
                        <span className="footer-group-title">Menu</span>
                        <ul>
                            <li><Link onClick={()=>{scrollTo(0,0)}} to='/'>Home</Link></li>
                            <li><Link onClick={()=>{scrollTo(0,0)}} to='/about'>About</Link></li>
                            <li><Link onClick={()=>{scrollTo(0,0)}} to='/menu'>Our Menu</Link></li>
                            <li><Link onClick={()=>{scrollTo(0,0)}} to='/take-away'>Take Away</Link></li>
                            <li><Link onClick={()=>{scrollTo(0,0)}} to='/contact-us'>Contact Us</Link></li>                    
                        </ul>
                    </div>
                    <div className="footer-group">
                        <div className="footer-group-right">
                            <span className="footer-group-title">Follow Us</span>
                            <ul className='footer-group-contRed'>
                                <li><Link to=''><img className='footer-group-red' src="/images/redes/facebook.svg" alt="image facebook" /></Link></li>
                                <li><Link to=''><img className='footer-group-red' src="/images/redes/instagram.svg" alt="image instagram" /></Link></li>
                                <li><Link to=''><img className='footer-group-red' src="/images/redes/whatsapp.svg" alt="image whatsapp" /></Link></li>
                            </ul>
                            <img className='footer-group-build' src="https://chebararuba.com/wp-content/uploads/2024/01/Tripadvisor-1024x218.png" alt="marca" />
                            <div className="footer-group-last">
                                <span className="footer-group-title">Legal</span>
                                <ul>
                                    <li>Privacy Statement</li>
                                    <li><Link to='/'>Cookie Policie</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    );
};

export default Footer;