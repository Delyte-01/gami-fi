import React from 'react'
import '../../Components/Carrer/TaskProgress.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);



function TaskProgress() {
    const careerRef=useRef();
      
    useGSAP(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
            trigger:careerRef.current,
            // markers:true,
            // scrub:true,
            start:"top center",
            end:"bottom center"
        }
      });
              tl.from(".animateCareer",{scale:.5,opacity:0,x:40} )
              tl.from(".animateCareer1",{scale:.5,opacity:0,duration:1,x:-40})
              
              
    });
  return (
    <div className='taskProgress' ref={careerRef}>
        <div className='animateCareer'>
            <div>
                <h3>our values</h3>
                <h1>Managing tasks, progress, and success</h1>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div>
                <div><span>95+</span>
                <p>Nam libero tempore, cum soluta nobis.</p></div>
                <div><span>135K</span>
                <p>Nam libero tempore, cum soluta nobis.</p></div>
            </div>
        </div>

        <div className='animateCareer1'>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982321/62c55fb4b88d133ca509c320_01_process_peljzb.jpg" alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default TaskProgress