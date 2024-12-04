import React from 'react'
import '../Components/Start.css'
import Button from './Button'
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);



function Start() {
   const startRef=useRef();
      
  useGSAP(()=>{
   gsap.from(".store",{
      scale:.2,
      opacity:0,
      scrollTrigger:{
          trigger:startRef.current,
          start:"top center",
          end:"bottom center",
          // markers:true,
          // scrub:true
      }
   })
       
      })
  return (
    <div className='start store' ref={startRef}>
        <div><h1>Deepen the functionality of your game with these high-value features</h1></div>
        <div>
            <a href="https://www.gamesradar.com/best-pc-games/"><Button title={"start now"}/></a>
            
        </div>
    </div>
  )
}

export default Start