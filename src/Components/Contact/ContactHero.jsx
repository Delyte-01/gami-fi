import React from 'react'
import '../../Components/Contact/ContactHero.css'
import { FaEnvelope } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);




function ContactHero() {
    const heroContactRef=useRef();
       

  useGSAP(()=>{
    let tl = gsap.timeline();
            tl.from(".animate",{scale:.5,opacity:0,duration:.5},1 )
            tl.from(".animate2",{scale:.5,opacity:0,duration:.5},1.5 )
            tl.from(".animate3",{scale:.5,opacity:0,duration:.5},2 )
            tl.from(".animate4",{scale:.5,opacity:0,duration:.5},2.5 )
            
  });
  return (
    <div className='contactHero' ref={heroContactRef}>
        <div></div>
        <div className='animate'>
            <h1>contact us</h1>
            <p className='text-gradient'>How can we help? Contact our support team</p>
        </div>
        
        <div>
            <div className='animate2'>
                <div>
                    <span ><FaEnvelope /></span>
                    <h3>
                    30 Supported Languages</h3>
                </div>
                <div>
                    <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                </div>
            </div>
            <div className='animate3'>
                <div>
                    <span><BsDatabaseFillCheck /></span>
                    <h3>
                    Fast Networking</h3>
                </div>
                <div> <p>Neque porro quisquam est, qui dolorem ipsum.</p></div>
            </div>
            <div className='animate4'>
                <div>
                    <span><MdPhoneIphone /></span>
                    <h3>Easy sign up and distribution</h3>
                </div>
                <div> <p>Neque porro quisquam est, qui dolorem ipsum.</p></div>
            </div>
        </div>
    </div>
  )
}

export default ContactHero