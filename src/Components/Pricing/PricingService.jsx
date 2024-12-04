import React from 'react'
import '../Pricing/PricingService.css'
import { FaEnvelope } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


function PricingService() {
    const servicePriceRef=useRef();
      
    useGSAP(()=>{
        gsap.from(".basic",{scale:.5,opacity:0,duration:1,delay:2})
      let tl = gsap.timeline({
        scrollTrigger:{
            trigger:servicePriceRef.current,
            // markers:true,
            // scrub:true,
            start:"top center",
            end:"bottom center"
        }
      });
              tl.from(".animateService",{scale:.5,opacity:0,duration:.5} )
              tl.from(".animateService1",{scale:.5,opacity:0,duration:.5})
              tl.from(".animateService3",{scale:.5,opacity:0,duration:.5})
              
    });
     
  return (
    <div className='pricingService' ref={servicePriceRef}>
        <div className='basic'>
            <h3 className='text-gradient'>basic pack</h3>
            <h1>services includes in every plan</h1>
        </div>
        <div>
            <div className='animateService'>
                <div>
                    <span ><FaEnvelope /></span>
                    <h3>
                    30 Supported Languages</h3>
                </div>
                <div>
                    <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                </div>
            </div>
            <div className='animateService1'>
                <div>
                    <span><BsDatabaseFillCheck /></span>
                    <h3>
                    Fast Networking</h3>
                </div>
                <div> <p>Neque porro quisquam est, qui dolorem ipsum.</p></div>
            </div>
            <div className='animateService3'>
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

export default PricingService