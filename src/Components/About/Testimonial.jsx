import React from 'react'
import '../About/Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
// import './styles.css';



const helo = ""






function Testimonial() {
  return (
    <div className='testimonial'>
        <>
        <div></div>
        <div><h1>Testimonials</h1></div>
        <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img 
                        className='imag'src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982327/62bd9e75ea57f8843e7efbb9_Rectangle_928_krju4j.png" alt="" />
                    </div>
                    <div>
                        <h3>john mask</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed tincidunt vivamus nec pharetra dolor erat blandit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                        className='imag' src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733153415/2_eg9aoo.png" alt="" />
                    </div>
                    <div>
                        <h3>Methew Maccolins
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed tincidunt vivamus nec pharetra dolor erat blandit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img 
                        className='imag'src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733153415/3_up4q9b.png" alt="" />
                    </div>
                    <div>
                        <h3>ted mosby
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed tincidunt vivamus nec pharetra dolor erat blandit.</p>
                    </div>
                </SwiperSlide>  <SwiperSlide>
                    <div>
                        <img 
                        className='imag'src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733153415/1_cgx07u.png" alt="" />
                    </div>
                    <div>
                        <h3>Mathew kelvin
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed tincidunt vivamus nec pharetra dolor erat blandit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='imag' src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982329/62bda011f764795c5ed5570e_Rectangle_930_ol6msg.png" alt="" />
                    </div>
                    <div>
                        <h3>barney maclerance
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed tincidunt vivamus nec pharetra dolor erat blandit.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    </div>
  )
}

export default Testimonial