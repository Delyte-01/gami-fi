import React from 'react'
import '../../Components/HomePage/FeaturesHome.css'
import Button from '../Button'
import { FaArrowRight } from "react-icons/fa";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

function FeaturesHome() {
    const featureRef=useRef();
       

    useGSAP(()=>{
      let tl4 =gsap.timeline({
          scrollTrigger:{
            trigger:featureRef.current,
            // markers:true,
            start:"top 20%",
            end:"bottom center",
            // scrub:true
          }
         });
  
         tl4.from(".feature1",{scale:.5,opacity:0})
         tl4.from(".feature2",{scale:.5,opacity:0})
         tl4.from(".feature3",{scale:.5,opacity:0},"+=.2")
         tl4.from(".feature4",{scale:.5,opacity:0,delay:.4})
        })
  return (
    <div className='features' id='features' >
        <div></div>

        <div>
            <h1>Features</h1>
            <p>We are constantly working to bring new updates and features to Playo, such as:</p>
        </div>

        <div ref={featureRef}>
            <div className='feature1'>
                <div>
                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980623/chat_ps68mg.png" alt="" />
                </div>
                <div>
                    <h2>Playo Chat</h2>
                    <p>Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.</p>
                </div>
            </div>
            <div className='feature2'>
                <div>
                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980623/time_cciwm7.png" alt="" />
                </div>
                <div>
                    <h2>Early Access to Games</h2>
                    <p>Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.</p>
                </div>
            </div>
            <div className='feature3'>
                <div>
                <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980623/chat_ps68mg.png" alt="" />
                </div>
                <div>
                    <h2>Purchases Made Easy</h2>
                    <p>Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want.</p>
                </div>
            </div>
        </div>

        <div className='feature4'>
            <h1>And so much more...</h1>
            <p>Earn achievements, read reviews, explore custom recommendations, and more.</p>
            <div>
                <a href="https://play.google.com/store/games?device=windows">

                <Button
                className="button" title={"install playo"} anySvg={ <FaArrowRight />} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default FeaturesHome