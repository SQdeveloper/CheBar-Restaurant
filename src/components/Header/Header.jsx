import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = ({color='white'}) => {

    const toggleMenu = ()=>{

        document.body.classList.toggle('inhabilitar');

        //Activo la animacion para que las lineas formen una x
        const line = document.querySelectorAll('.header-main-btn-menu-line');

        line[0].classList.toggle('active');
        line[1].classList.toggle('active');

        //Despliego el menu
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }

    return (
        <>
        <Menu toggleMenu={toggleMenu}/> 
        <button onClick={toggleMenu} className='header-main-btn-menu'>                
            <span className={`header-main-btn-menu-line ${color}`}></span>
            <span className={`header-main-btn-menu-line ${color}`}></span>                
        </button>
        <header className='header-main'>
            <Link to='/'><img className='header-main-logo' src="/images/logo/Logo.png" alt="logo" /></Link>
            <div className="header-main-redes">
                <a href="">
                    <img className={`${color}`} src="/images/redes/facebook.svg" alt="facebook" />                        
                </a>
                <a href="">
                    <img className={`${color}`} src="/images/redes/instagram.svg" alt="instagram" />
                </a>
            </div>
        </header>
        </>
    );
};

export default Header;