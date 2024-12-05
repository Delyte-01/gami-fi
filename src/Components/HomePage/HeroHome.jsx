import React from 'react'
import '../../Components/HomePage/HeroHome.css'
import Button from '../Button'
import { FaArrowDown } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


function HeroHome() {
  const heroRef=useRef();
      
  useGSAP(()=>{
    let tl = gsap.timeline();
         tl.from(".im",{x:50, duration:.9,scale:.5})
            .to(".im", {x:0,scale:1})
            tl.from(".animate",{scale:.5,opacity:0,duration:.5},1 )
            tl.from(".animate2",{scale:.5,opacity:0,duration:.5},1.5 )
            tl.from(".animate3",{scale:.5,opacity:0,duration:.5},2 )
            tl.from(".animate4",{scale:.5,opacity:0,duration:.5},2.5 )
            
  });
   

  return (
    <div className='heroHome ' ref={heroRef}>

        <div className='bg-home'></div>
        <div className='im'>
          <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980623/bac_dku5wv.png" alt="" />
        </div>
        <div>
          <div >
            <h1 className='animate'>Play, Improve
            & Win</h1>
          <p className='animate2'>Playo is the ultimate destination for playing, discussing and creating game.</p>
          </div>

          <div>
            <div className='animate3'>
              <div>
                <p className='online'>Online</p>
                <h2>19,302,927</h2>
              </div>
              <div>
                <p className='playing'>Playing Now</p>
                <h2>4,831,224</h2>
              </div>
            </div>
            <div className='animate4'>
              <a href="https://www.microsoft.com/en-in/store/top-free/games/pc?msockid=075b3a8c0a4f6c673ed52f860b8f6d9b"><Button 
              title="learn more" 
               anySvg={<FaArrowDown />}
               /></a>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroHome