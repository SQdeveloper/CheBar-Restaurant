import React from 'react';
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

const CardMenu = () => {
    const data = [
        {
            subtitle: "Every cocktail’s a fiesta waiting to erupt. Take a sip and feel the fireworks. Or don't, and miss out. Your call.",
            types: [
                {
                    title: 'Classic cocktails, with a twist.',
                    options: [
                        {
                            name: 'SAKE-JITO',
                            price: '11'
                        },
                        {
                            name: 'SPIKED SCREWDRIVER',
                            price: '12'
                        },
                        {
                            name: 'PINK MULE',
                            price: '12'
                        },
                        {
                            name: 'COCO MARTINI',
                            price: '14'
                        },
                        {
                            name: 'SUNSHINE SPRITZ',
                            price: '13'
                        }
                    ]
                },
                {
                    title: 'Espresso inspired',
                    options: [
                        {
                            name: 'BLACK DIAMOND',
                            price: '14'
                        },
                        {
                            name: 'FLAT WHITE MARTINI',
                            price: '15'
                        },
                        {
                            name: 'INSOMNIAC',
                            price: '17'
                        },
                        {
                            name: 'CHOCOLATE ORANGE ESPRESSO MARTINI',
                            price: '15'
                        }                        
                    ]
                }
            ]
        },
        {
            subtitle: "Every cocktail’s a fiesta waiting to erupt. Take a sip and feel the fireworks. Or don't, and miss out. Your call.",
            types: [
                {
                    title: 'Classic cocktails, with a twist.',
                    options: [
                        {
                            name: 'SAKE-JITO',
                            price: '11'
                        }
                    ]
                }
            ]
        }
    ]

    return (            
        <section className='cardMenu'>
            <h2 className='cardMenu-title'>{data[0].title}</h2>
            <span className="cardMenu-subtitle">{data[0].subtitle}</span>            
            <div className="cardMenu-content-groups">
                {data[0].types.map((type,index)=>(
                    <GroupMenu key={index} title={type.title} options={type.options}/>
                ))}
            </div>
        </section>            
    );
};

export default CardMenu;