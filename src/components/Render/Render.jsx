import React from 'react';
import Header from '../Header/Header';

const Render = ({child}) => {
    return (
        <>
            <Header/>
            {child}
        </>
    );
};

export default Render;