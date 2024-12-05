import React from 'react'
import '../About/AboutHero.css'
import Button from '../Button'
import { IoArrowDown } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


function AboutHero() {
    const heroAboutRef=useRef();
       

    useGSAP(()=>{
      let tl = gsap.timeline();
           tl.from(".im",{ duration:.9,scale:.5})
              tl.from(".animate",{scale:.5,opacity:0,duration:.5},1 )
              tl.from(".animate2",{scale:.5,opacity:0,duration:.5},1.4 )
              tl.fromTo(".animate3",{scale:.5,opacity:0},{opacity:1,scale:1},"-=1" )
              tl.fromTo(".animate4",{scale:.5,opacity:0},{opacity:1,scale:1},"-=1")
              
    });

  return (
    <div className='aboutHero' ref={heroAboutRef}>
        <div>
            <div className='left'></div>
            <div className='right'></div>
        </div>
        <div>
            <img className='im' src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982331/62b97f9dde90106a6108ead2_Group_29_2_1_pb3bss.png" alt="" />
        </div>
        <div>
            <h1 className='animate'>About playo</h1>
            <p className='animate2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis vel dolor amet, unde autem aliquid recusandae soluta atque ipsam fuga provident est aspernatur exercitationem omnis cumque? Tenetur quasi neque mollitia?</p>
            <div>
                <div className='animate3'>
                    <a href="https://www.pcgamer.com/games/the-top-100-pc-games-2024/"><Button title={"learn more"} anySvg={<IoArrowDown />}/></a></div>
                <div  className='animate4'>
                    <a href="https://youtu.be/WxwDJmzDUQ8?si=cB-uc7T7tHP20Xli">  <span  className='cursor'>
                    <IoPlaySharp /></span></a>
                    <h3>watch video</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero