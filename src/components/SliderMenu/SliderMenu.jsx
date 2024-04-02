import React, { useEffect } from 'react';
import CardMenu from '../CardMenu/CardMenu';
import data from '../../DB/data';
import './SliderMenu.css';

const SliderMenu = () => {
    useEffect(()=>{
        
    }, []);

    const handleEvent = (index)=>{
        const boxs = document.querySelectorAll('.sliderMenu-box');
        const targetBox =  boxs[index];
        const buttons = document.querySelectorAll('.sliderMenu-buttons button');
        const targetButton = buttons[index];

        //Activo la animacion para los contenedores del menu
        boxs.forEach((box)=>{
            box.classList.remove('active');
        })
        targetBox.classList.add('active');        
        
        //Cambio de color al button selecionado
        buttons.forEach((button)=>{
            button.classList.remove('active');
        })
        targetButton.classList.add('active');
    }

    return (
        <div className='sliderMenu'>
            <div className="sliderMenu-buttons">
                <button className='active' onClick={()=>{handleEvent(0)}}>Cocktails</button>
                <button onClick={()=>{handleEvent(1)}}>HOT & COLD JUICES</button>
                <button onClick={()=>{handleEvent(2)}}>LUNCH & DINNER</button>
                <button onClick={()=>{handleEvent(3)}}>BREAKFAST</button>
                <button onClick={()=>{handleEvent(4)}}>HAPPY HOUR</button>                
            </div>
            <div className="sliderMenu-box active"><CardMenu bgColor='peach' data={data[0]}/></div>
            <div className="sliderMenu-box"><CardMenu bgColor='peach' data={data[1]}/></div>
            <div className="sliderMenu-box"><CardMenu bgColor='peach' data={data[2]}/></div>
            <div className="sliderMenu-box"><CardMenu bgColor='peach' data={data[3]}/></div>
            <div className="sliderMenu-box"><CardMenu bgColor='peach' data={data[4]}/></div>
        </div>
    );
};

export default SliderMenu;