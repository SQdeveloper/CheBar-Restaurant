import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Our Menu</Link></li>
                        <li><Link to='/'>Take Away</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>                    
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
    );
};

export default Footer;