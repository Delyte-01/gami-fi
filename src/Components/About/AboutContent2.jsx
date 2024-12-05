import React from 'react'
import '../About/AboutContent2.css'
import { FaArrowRight } from "react-icons/fa6";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

function AboutContent2() {
    const aboutContent2Ref=useRef();
  useGSAP(()=>{
    let tl4 =gsap.timeline({
        scrollTrigger:{
          trigger:aboutContent2Ref.current,
        //   markers:true,
          start:"top center",
          end:"bottom center",
        //   scrub:true
        }
       });

       tl4.from(".aboutcontent2",{scale:.5,opacity:0})
       tl4.from(".aboutcontent3",{scale:.5,opacity:0})
       tl4.from(".aboutcontent4",{scale:.5,opacity:0})
       tl4.from(".aboutcontent5",{scale:.5,opacity:0})
       tl4.from(".aboutcontent1",{scale:.5,opacity:0})
      })
  return (
    <div className='aboutContent2' ref={aboutContent2Ref}>
        <div></div>
        <div>
            <div className='aboutcontent2'>
                <h1>why playo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit elementum et rutrum lectus facilisi. Ac morbi urna sit sagittis, quisque malesuada aenean pretium.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit elementum et rutrum lectus facilisi. Ac morbi urna sit sagittis, quisque malesuada aenean pretium.</p>
                <div>
                    <a href="/store"> <h3 className='text-gradient cursor'>explore</h3></a>
                    <span>
                    <FaArrowRight />
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <div className='aboutcontent3'>
                        <h3>12m+</h3>
                        <p>total sell</p>
                    </div>
                    <div className='aboutcontent4'>
                        <h3>18k+</h3>
                        <p>games</p>
                    </div>
                    <div className='aboutcontent5'>
                        <h3>15+</h3>
                        <p>languages</p>
                    </div>
                </div>
                <div className='aboutcontent1'>
                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982330/62b9b1a1a9d7fc3858ca4cd5_Group_21_1_bsc4mc.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent2