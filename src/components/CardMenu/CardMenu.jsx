import React from 'react';
import data from '../../DB/data';
import './CardMenu.css';

const GroupMenuOption = ({name, price})=>{
    return(
        <div className="groupMenu-option">
            <span>{name}</span>
            <div className="groupMenu-option-separator"></div>
            <div className="groupMenu-option-price">${price}</div>
        </div>
    )
}

const GroupMenu = ({title, options})=>{
    return(
        <section className="groupMenu">
            <h2 className='cardMenu-title'>{title}</h2>
            <div className="groupMenu-options">
                {options.map((option,index)=>(
                    <GroupMenuOption key={index} name={option.name} price={option.price}/>
                ))}
            </div>
        </section>
    )
}

const CardMenu = ({data, bgColor=''}) => {    

    return (            
        <section className={`cardMenu ${bgColor}`}>
            <h2 className='cardMenu-title'>{data.title}</h2>
            <span className="cardMenu-subtitle">{data.subtitle}</span>            
            <div className="cardMenu-content-groups">
                {data.types.map((type,index)=>(
                    <GroupMenu key={index} title={type.title} options={type.options}/>
                ))}
            </div>
        </section>            
    );
};

export default CardMenu;