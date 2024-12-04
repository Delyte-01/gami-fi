import React from 'react'
import '../../src/Components/HeroGlobal.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);



function HeroGlobal({title}) {
  const heroGlobalRef=useRef();
   
  useGSAP(()=>{
    let tl = gsap.timeline();
            tl.from(".animated",{scale:.5,opacity:0,duration:.5} )
            tl.from(".animated2",{scale:.5,opacity:0,duration:.5})
  });
  return (
    <div className='heroGlobal' ref={heroGlobalRef}>
      <div className='bg-heroHome'></div>
      <div className='animated'>{title}</div>
      <div
      className='text-gradient animated2'
      >
        <span>play .</span>
        <span>improve .</span>
        <span>win</span>
      </div>
    </div>
  )
}

export default HeroGlobal