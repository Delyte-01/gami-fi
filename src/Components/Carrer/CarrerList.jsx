import React from 'react';
import '../Carrer/CarrerList.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);
function CarrerList() {
    const careerListRef=useRef();
    useGSAP(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
            trigger:careerListRef.current,
            // markers:true,
            // scrub:true,
            start:"top center",
            end:"bottom center"
        }
      });
              tl.from(".animateCareerList",{scale:.5,opacity:0} )
              tl.from(".animateCareerList1",{scale:.5,opacity:0,duration:1})
              
              
    });
  return (
    <div className='careerList' ref={careerListRef}>
             <div className='animateCareerList'>
                <h4>careers list</h4>
                <h1>Join our big family</h1>
                <p>Nam libero tempore, cum soluta nobis est eligendi opio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
             </div>
             <div className='animateCareerList1'>
                <div>
                    <div>
                        <h4>position</h4>
                        <h3 className='text-gradient'>Game designer</h3>
                    </div>
                    <div>
                        <h4>location</h4>
                        <p>california</p>
                    </div>
                    <div>
                        <h4>type</h4>
                        <p>full time</p>
                    </div>
                    <div><button >apply now</button></div>
                </div>
                <div>
                <div>
                        <h4>position</h4>
                        <h3 className='text-gradient'>web designer</h3>
                    </div>
                    <div>
                        <h4>location</h4>
                        <p>london</p>
                    </div>
                    <div>
                        <h4>type</h4>
                        <p>full time</p>
                    </div>
                    <div><button >apply now</button></div>
                </div>
                <div>
                <div>
                        <h4>position</h4>
                        <h3 className='text-gradient'>technical instructure</h3>
                    </div>
                    <div>
                        <h4>location</h4>
                        <p>paris</p>
                    </div>
                    <div>
                        <h4>type</h4>
                        <p>full time</p>
                    </div>
                    <div><button >apply now</button></div>
                </div>
             </div>
             <div></div>
    </div>
  )
}

export default CarrerList