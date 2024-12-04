import React from 'react'
import '../About/Aboutcontent1.css'
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


function AboutContent1() {
  const aboutContent1Ref=useRef();
  useGSAP(()=>{
    let tl4 =gsap.timeline({
        scrollTrigger:{
          trigger:aboutContent1Ref.current,
          // markers:true,
          start:"20% center",
          end:"bottom center",
          // scrub:true
        }
       });

       tl4.from(".content1",{scale:.5,opacity:0,x:-400})
       tl4.from(".content2",{scale:.5,opacity:0})
       tl4.from(".content3",{scale:.5,opacity:0},"+=.2")
       tl4.from(".content4",{scale:.5,opacity:0})
      })
  return (
    <div className='aboutContent1' ref={aboutContent1Ref}>
        <div>
            <div className='content1'>
                <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982330/62b989fd94f04c540716c3eb_Group_17_vxatst.png" alt="" />
            </div>
            <div>
                <h1 className='content2'>get ready to play awesome games</h1>
                <p className='content3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, explicabo? Vitae vel nostrum dolor nisi. Provident nostrum dicta eos, aspernatur dolore fugit voluptates obcaecati delectus, tenetur, cumque eum itaque libero.</p>
                <div>
                  <button className='content4'><a href="https://www.gamesradar.com/best-pc-games/">play now</a></button></div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default AboutContent1