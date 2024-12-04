import React from 'react'
import '../About/AboutContent3.css'
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


function AboutContent3() {
    const aboutContent3Ref=useRef();
  useGSAP(()=>{
    let tl4 =gsap.timeline({
        scrollTrigger:{
          trigger:aboutContent3Ref.current,
        //   markers:true,
          start:"10% center",
          end:"bottom center",
        //   scrub:true
        }
       });

       tl4.from(".aboutmaincontent2",{scale:.5,opacity:0})
       tl4.from(".aboutmaincontent3",{scale:.5,opacity:0})
       tl4.from(".aboutmaincontent4",{scale:.5,opacity:0})
    //    tl4.from(".aboutmaincontent5",{scale:.5,opacity:0})
       tl4.from(".aboutmaincontent1",{scale:.2,opacity:0,x:400})
      })
  return (
    <div className='aboutContent3' ref={aboutContent3Ref}>
        <div>
            <h1 className='aboutmaincontent2'>How it works</h1>
            <p className='aboutmaincontent3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, itaque labore voluptate repellat dicta ab pariatur et harum veniam, asperiores, soluta quaerat. Modi dicta repellendus excepturi accusamus unde sapiente amet?</p>
            <div>
                <button className='aboutmaincontent4'>
                  <a href="/store"> play now</a>
                   
                </button>
            </div>
        </div>
        <div className='aboutmaincontent1'>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982330/62b9c4adb562caab5308fa3f_florian-olivo-Mf23RF8xArY-unsplash_1_xvkriu.png" alt="" />
        </div>
    </div>
  )
}

export default AboutContent3