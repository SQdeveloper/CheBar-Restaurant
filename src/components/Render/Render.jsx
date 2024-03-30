import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Render = ({child}) => {
    return (
        <>
            <Header/>
            {child}
            <Footer/>
        </>
    );
};

export default Render;