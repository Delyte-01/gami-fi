import React from 'react'
import '../Pricing/HeroPricing.css'
import Button from '../Button'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

function HeroPricing() {
  const heroPriceRef=useRef();
      
  useGSAP(()=>{
    let tl = gsap.timeline();
            tl.from(".animatePrice",{scale:.5,opacity:0,duration:1} )
            tl.from(".animatePrice2",{scale:.5,opacity:0,duration:.5},1 )
            tl.from(".animatePrice3",{scale:.5,opacity:0,duration:.5},1.2 )
            tl.from(".animatePrice4",{scale:.5,opacity:0,duration:.5},1.6 )
            
  });
   
  return (
    <div className='heroPricing' ref={heroPriceRef}>
        <div></div>
        <div>
            <h1 className='animatePrice'>Simple monthly plans</h1>
            <div className='span animatePrice2' >
                <span>One-click installation</span>
                <span>. Free for 14 days  </span>
                <span>. No credit card required</span>
            </div>
            <div className="animatePrice3">
              <a href="/contact">
              <Button  title={"start trial now"}/></a>
              <a href="/contact"><h3 className='text-gradient animatePrice4'>book demo</h3></a>
                 
            </div>
        </div>
    </div>
  )
}

export default HeroPricing