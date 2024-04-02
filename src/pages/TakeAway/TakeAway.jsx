import React from 'react';
import './TakeAway.css';

const TakeAway = () => {
    return (
        <section className='takeAway'>
            <h2 className='title'>Take away</h2>
            <div className="takeAway-banner">
                <div className="takeAway-banner-image"><img src="https://chebararuba.com/wp-content/uploads/2024/01/che-bar-aruba4.jpeg" alt="banner" /></div>
                <div className="takeAway-banner-info">
                    <div>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                        2970 6994 1696
                    </div>
                    <hr />
                    <div>
                        <svg aria-hidden="true" className="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                        info@chebararuba.com
                    </div>
                    <a className='button-style' href="">
                        <img src="/images/redes/whatsapp.svg" alt="whatsapp" />
                        whatsapp chat
                    </a>
                </div>
            </div>
            <span className='takeAway-subtitle'>Argentinian Vibe & Buena Vida:</span>
            <p className='takeAway-paragraph'>Sports on the screen, adrenaline in the air, and a ‘no compromises’ Argentinian spirit that pulls no punches. You in?</p>
            <img className='takeAWay-detail-image' src="/images/details/vibes-beige.png" alt="vibes" />
        </section>
    );
};

export default TakeAway;