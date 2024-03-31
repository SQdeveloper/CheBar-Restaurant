import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({toggleMenu}) => {    
    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li>
                        <Link onClick={()=>{toggleMenu(); window.scrollTo(0,0)}} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{toggleMenu(); window.scrollTo(0,0)}} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{toggleMenu(); window.scrollTo(0,0)}} to='/ourmenu'>Our menu</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{toggleMenu(); window.scrollTo(0,0)}} to='/takeaway'>Take Away</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{toggleMenu(); window.scrollTo(0,0)}} to='/contactus'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-footer">
                <div className="menu-footer-redes">
                    <a href="">
                        <img src="/images/redes/facebook.svg" alt="facebook" />                        
                    </a>
                    <a href="">
                        <img src="/images/redes/instagram.svg" alt="instagram" />
                    </a>
                </div>
                <div>
                    <div className="menu-footer-title">Contact Us</div>
                    <span>info@gmail.com</span>
                </div>
                <div>
                    <div className="menu-footer-title">Talk to us</div>
                    <span>120 343 4344</span>
                </div>
            </div>
            <div className="menu-logotipo">
                <img src="/images/logo/Logo.png" alt="logo" />
            </div>
        </div>
    );
};

export default Menu;