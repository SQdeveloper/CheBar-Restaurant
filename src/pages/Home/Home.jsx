import React from 'react';
import SwiperHero from '../../components/SwiperHero/SwiperHero';
import PlateAnimation from '../../components/PlateAnimation/PlateAnimation';
import CardMenu from '../../components/CardMenu/CardMenu';
import data from '../../DB/data';
import SliderBottom from '../../components/SliderBottom/SliderBottom';
import './Home.css';

const Home = () => {    
    return (
        <div className='home'>        
          <SwiperHero/>     
          <div className="home-info">
            <section className="home-info-content">
              <span className='subtitle'>about che bar</span>  
              <h2 className='home-info-title title'>Che Bar — Where the flavor of Buenos Aires meets the attitude of the Caribbean!</h2>
              <p className='home-info-paragraph'>"Listen up, amigos! We’re the spice in your Aruban beach life and the kick in your cocktail. No messing around; we’re Argentinian and we don’t do bland."</p>
              <a className='home-info-ancle button-style' href="">
                <img src="/images/redes/whatsapp.svg" alt="whatsapp" />
                whatsapp chat
              </a>
            </section>
            <img src="/images/details/face.png" alt="face photo svg" />
          </div>       
          <section className="home-ourmenu">
            <PlateAnimation/>
            <h2 className='home-ourmenu-title'>Our Menu</h2>
            <div className="home-ourmenu-questions">
              <details name='question'>
                <summary>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m18,0c-2.578,0-4.823,1.616-5.659,4H2.765c-1.142,0-2.152.695-2.573,1.771-.41,1.045-.16,2.161.676,2.934l6.668,6.16c.434.395.936.667,1.465.818v6.317h-3c-.553,0-1,.448-1,1s.447,1,1,1h8c.553,0,1-.448,1-1s-.447-1-1-1h-3v-6.318c.53-.152,1.034-.425,1.471-.823l3.483-3.218c.655.238,1.342.358,2.046.358,3.309,0,6-2.691,6-6S21.309,0,18,0Zm-6.881,13.386c-.637.581-1.6.58-2.232.005L2.199,7.214c-.271-.251-.208-.555-.146-.713.095-.242.331-.501.711-.501h14.471c.38,0,.616.259.711.501.062.158.126.461-.171.735l-6.656,6.149Zm6.881-3.386c-.087,0-.174-.003-.26-.009l1.418-1.31c.811-.75,1.061-1.865.65-2.91-.421-1.076-1.432-1.771-2.573-1.771h-2.703c.698-1.216,2.002-2,3.468-2,2.206,0,4,1.794,4,4s-1.794,4-4,4Z"></path></svg>
                  Cocktail
                  </div>
                  <span className='signal-plus'>+</span>
                  <span className="signal-menos"></span>
                </summary>
                <CardMenu data={data[0]}/>
              </details>
              <details name='question'>
                <summary>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M20,10h-.115A3.1,3.1,0,0,0,17,6L3,6c-5.451.372-2,8.651-.589,10.912A6.877,6.877,0,0,0,8.216,20h3.567a6.875,6.875,0,0,0,5.742-3H20C24.814,16.907,25.759,9.822,20,10Zm-8.217,8H8.216a4.881,4.881,0,0,1-4.131-2.179C3.541,15.3.494,8,3,8L17,8a.973.973,0,0,1,.729.325,1.028,1.028,0,0,1,.261.8C17.427,13.384,16.368,17.811,11.783,18ZM20,15H18.588a16.82,16.82,0,0,0,.954-3c1.209-.081,2.546.216,2.458,1.143A1.984,1.984,0,0,1,20,15ZM9.025,3V1a1,1,0,0,1,2,0V3A1,1,0,0,1,9.025,3Zm4,0V1a1,1,0,0,1,2,0V3A1,1,0,0,1,13.025,3Zm-8,0V1a1,1,0,0,1,2,0V3A1,1,0,0,1,5.025,3ZM20,23a1,1,0,0,1-1,1H1a1,1,0,0,1,0-2H19A1,1,0,0,1,20,23Z"></path></svg>
                  Hot and Cold Juices
                  </div>
                  <span className='signal-plus'>+</span>
                  <span className="signal-menos"></span>
                </summary>
                <CardMenu data={data[1]}/>                
              </details>
              <details name='question'>
                <summary>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m15,16.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm-1.5-5.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm6.5,1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5ZM9.283,1.671c-.38-.397-.372-1.028.022-1.412.395-.382,1.021-.378,1.406.012.054.054.796.851,1.422,2.323.192-.295.414-.58.675-.841C13.987.575,15.602.158,16.749.016c.622-.076,1.224.132,1.664.572.44.44.648,1.047.572,1.664-.142,1.147-.559,2.761-1.737,3.94-1.668,1.668-4.229,1.809-5.044,1.809-1.203,0-1.203-.993-1.203-1,0-3.496-1.646-5.255-1.717-5.329Zm3.771,4.274c.829-.101,1.995-.385,2.778-1.168.777-.777,1.063-1.937,1.167-2.772v-.003c-.841.102-2,.389-2.777,1.166-.782.782-1.067,1.948-1.168,2.777Zm8.626-1.037c-.327-.445-.951-.542-1.398-.214-.445.327-.541.953-.214,1.398,1.263,1.722,1.931,3.765,1.931,5.908,0,5.514-4.486,10-10,10S2,17.514,2,12c0-3.559,1.916-6.878,5-8.663.479-.277.642-.888.365-1.366-.277-.479-.89-.643-1.366-.365C2.299,3.747,0,7.729,0,12c0,6.617,5.383,12,12,12s12-5.383,12-12c0-2.572-.802-5.024-2.319-7.092Z"></path></svg>
                  Lunch and Dinner
                  </div>
                  <span className='signal-plus'>+</span>
                  <span className="signal-menos"></span>
                </summary>
                <CardMenu data={data[2]}/>
              </details>
              <details name='question'>
                <summary>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"><g>	<g>		<path d="M430.435,212.5H167.182c4.547-18.529,6.328-36.447,5.058-52.071c-2.166-26.665-13.091-45.558-30.76-53.198   c-35.878-15.512-84.3,22.235-112.646,87.791c-0.744,1.717-1.455,3.463-2.163,5.209c-4.238,1.611-8.194,3.894-11.692,6.822   C5.459,215.018,0,227.115,0,240.239v76.562c-0.002,9.555,2.803,18.352,7.911,25.48c-0.488,2.024-0.837,4.086-1.01,6.177   c-1.027,12.387,3.691,24.798,12.945,34.055l57.272,57.271c8.437,8.438,19.323,13.084,30.651,13.084   c3.095,0,6.133-0.36,9.084-1.024c7.627,6.837,17.849,10.786,28.971,10.786h76.567h164.543c7.776,0,14.472-5.489,15.997-13.114   l14.777-73.887h12.727c44.975,0,81.565-36.59,81.565-81.565C512,249.088,475.411,212.5,430.435,212.5z M128.532,137.176   c10.869,4.699,16.784,34.961,4.737,75.832l-70.983-12.703C84.616,153.648,115.753,131.657,128.532,137.176z M32.626,240.239   c0-3.49,1.169-6.39,3.291-8.167c2.121-1.775,5.181-2.415,8.617-1.799l81.762,14.632L32.626,311.76V240.239z M116.065,415.392   c-2.232,3.126-5.178,4.847-8.298,4.847c-2.651,0-5.273-1.22-7.581-3.528l-57.269-57.266c-2.495-2.495-3.739-5.439-3.502-8.289   c0.236-2.848,1.947-5.546,4.816-7.594l109.604-78.23c3.166-2.259,7.383-3.504,11.877-3.504c5.896,0,11.563,2.149,15.161,5.747   l11.178,11.178c3.893,3.893,5.862,9.794,5.76,15.567c-0.009,0.219-0.022,0.437-0.022,0.656c-0.178,3.928-1.313,7.762-3.493,10.816   L116.065,415.392z M230.558,426.712c-1.777,2.124-4.677,3.292-8.167,3.292h-76.567c-0.033,0-0.063-0.004-0.096-0.004   l70.965-99.425l15.666,87.522C232.973,421.53,232.335,424.59,230.558,426.712z M249.621,329.365   c40.869-12.049,71.132-6.133,75.833,4.736c5.518,12.762-16.47,43.912-63.128,66.244L249.621,329.365z M388.368,355.971   c-0.009,0.042-0.017,0.084-0.025,0.125l-14.782,73.908h-97.604c60.373-28.725,94.284-74.533,79.446-108.854   c-7.642-17.668-26.534-28.592-53.198-30.759c-18.539-1.507-40.299,1.283-62.482,7.891c-2.685-4.145-5.934-8.001-9.683-11.437   c-1.449-11.589-6.483-22.727-14.916-31.161l-10.559-10.559h205.973L388.368,355.971z M430.435,343.003h-6.202l19.223-96.104   c20.683,5.716,35.918,24.688,35.918,47.165C479.374,321.048,457.422,343.003,430.435,343.003z"></path>	</g></g><g>	<g>		<path d="M267.963,119.399c-7.998-7.998-11.534-11.92-11.533-21.091c-0.001-9.17,3.536-13.093,11.536-21.089   c6.372-6.37,6.374-16.698,0.004-23.07s-16.697-6.373-23.069-0.003c-8.905,8.901-21.098,21.091-21.096,44.163   c-0.002,23.07,12.189,35.26,21.091,44.162c7.998,7.998,11.534,11.92,11.534,21.091c0,9.009,7.304,16.313,16.312,16.313   c9.01,0,16.313-7.304,16.313-16.313C289.055,140.49,276.865,128.3,267.963,119.399z"></path>	</g></g><g>	<g>		<path d="M354.965,119.399c-7.997-7.998-11.533-11.92-11.533-21.091s3.537-13.093,11.537-21.089   c6.372-6.37,6.374-16.698,0.004-23.07c-6.371-6.372-16.698-6.373-23.07-0.003c-8.905,8.901-21.096,21.091-21.096,44.163   c-0.002,23.07,12.19,35.26,21.091,44.162c7.999,7.998,11.534,11.92,11.534,21.091c0,9.009,7.305,16.313,16.313,16.313   c9.01,0,16.313-7.304,16.313-16.313C376.058,140.49,363.868,128.3,354.965,119.399z"></path>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    Breakfast
                  </div>
                  <span className='signal-plus'>+</span>
                  <span className="signal-menos"></span>
                </summary>
                <CardMenu data={data[3]}/>
              </details>
              <details name='question'>
                <summary>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve"><g>	<g>		<path d="M439.67,83.481c0-46.139-37.336-83.478-83.478-83.478c-40.719,0-74.179,28.988-81.811,66.782H156.75L138.295,11.42   c-2.916-8.746-12.37-13.473-21.119-10.559c-8.747,2.916-13.476,12.371-10.559,21.119l14.936,44.807H89.064   c-10.69,0-18.638,9.929-16.287,20.365l7.591,33.692c6.669,29.603,5.879,60.323-2.285,88.838   c-7.693,26.871-7.671,54.614,0.069,82.458c14.492,52.129,57.929,93.287,110.662,104.85c5.699,1.25,11.413,2.172,17.118,2.78v78.84   h-50.087c-9.22,0-16.695,7.475-16.695,16.695c0,9.22,7.475,16.695,16.695,16.695H289.41c9.22,0,16.695-7.475,16.695-16.695   c0-9.22-7.475-16.695-16.695-16.695h-50.087v-78.901c75.517-8.398,133.564-72.05,133.564-149.271   c0-11.894-1.432-23.763-4.258-35.28c-4.214-17.171-6.661-33.224-7.389-48.376C404.779,164.118,439.67,128.232,439.67,83.481z    M335.317,100.178c-3.498,15.526-6.608,27.41-7.496,47.825c-0.002,0.022-0.001,0.045-0.003,0.067   c-0.776,17.951,0.711,36.831,4.471,56.906l-46.227,16.789c-18.696,6.791-39.568,5.474-57.264-3.61   c-7.712-3.959-15.953-6.839-24.469-8.635l-36.447-109.342H335.317z M112.942,113.504l-3.003-13.326h22.743l36.03,108.091   c-6.572,0.89-13.11,2.391-19.513,4.524l-40.904,13.635c0.544-2.529,1.17-5.048,1.888-7.555   C119.885,184.99,120.839,148.553,112.942,113.504z M195.966,364.372c-40.805-8.949-74.422-40.813-85.642-81.177   c-1.946-7-3.265-13.981-3.971-20.923l53.407-17.801c19.146-6.382,38.78-4.316,53.79,3.388   c25.93,13.311,56.514,15.239,83.913,5.288l41.363-15.023c0.44,4.085,0.673,8.194,0.673,12.31   C339.497,324.031,271.88,381.017,195.966,364.372z M362.675,133.134c1.208-8.535,1.633-9.71,9.805-45.983   c2.349-10.427-5.59-20.365-16.287-20.365h-47.245c6.751-19.145,25.103-33.391,47.245-33.391c27.682,0,50.087,22.401,50.087,50.086   C406.279,109.025,387.297,129.907,362.675,133.134z"></path>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    Happy Hour
                  </div>
                  <span className='signal-plus'>+</span>
                  <span className="signal-menos"></span>
                </summary>
                <CardMenu data={data[4]}/>
              </details>
            </div>
            <button className='button-style'>WhatsApp Chat</button>
            <button className='button-style'>
              <svg aria-hidden="true" className="e-font-icon-svg e-far-arrow-alt-circle-right" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>
              View Menu
            </button>
          </section>

          <section className="home-contentSwiper">
            <h2>Happy hour daily 4$ on select items from 5-11pm</h2>            
            <div className="home-swiper">
              <div className="home-slider">                
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Che-Bar-1-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Menu235-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Chebar.jpeg" alt="" /></div>                                              
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Menu2-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/233-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Menu-Chebar-768x768.jpeg" alt="" />
                  </div>                              
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/B-768x768.jpeg" alt="" />
                  </div>                              
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Che-Bar-1-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Menu235-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Chebar.jpeg" alt="" /></div>                                              
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Menu2-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/233-768x768.jpeg" alt="" />
                  </div>
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/Menu-Chebar-768x768.jpeg" alt="" />
                  </div>                              
                  <div className="home-slider-box">
                    <img src="https://chebararuba.com/wp-content/uploads/2024/01/B-768x768.jpeg" alt="" />
                  </div>                              
              </div>
            </div>
          </section>
          <div className="home-vibes">
            <img src="/images/details/vibes.png" alt="" />
          </div>
          <div className="home-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.1128753776047!2d-70.0460909261967!3d12.57480822345606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e85380432ece79d%3A0xc3f6b588c0643141!2zQ2jDqSBCYXI!5e0!3m2!1ses-419!2spe!4v1711763588174!5m2!1ses-419!2spe" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <SliderBottom/>          
        </div>        
    );
};

export default Home;