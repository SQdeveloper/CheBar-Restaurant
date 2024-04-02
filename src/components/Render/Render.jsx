import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Render = ({child, color}) => {
    return (
        <>
            <Header color={`${color}`}/>
            {child}
            <Footer/>
        </>
    );
};

export default Render;