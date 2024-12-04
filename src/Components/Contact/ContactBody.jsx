import React from 'react'
import '../../Components/Contact/ContactBody.css'
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

function ContactBody() {
    const aboutContactRef=useRef();
    useGSAP(()=>{
      let tl4 =gsap.timeline({
          scrollTrigger:{
            trigger:aboutContactRef.current,
            // markers:true,
            start:"top 20%",
            end:"center center",
            // scrub:true
          }
         });
  
         tl4.from(".aboutcontact2",{scale:.5,opacity:0})
         tl4.from(".aboutcontact3",{scale:.5,opacity:0})
         tl4.from(".aboutcontact4",{scale:.5,opacity:0})
         tl4.from(".aboutcontact5",{scale:.5,opacity:0})
         tl4.from(".aboutcontact1",{scale:.2,opacity:0,x:-400},"-=1")
        })
  return (
    <div className='contactBody' ref={aboutContactRef}>
        <div></div>
        <div>
            <div>
                <h4 className='aboutcontact2'>get in touch</h4>
                <div>
                <h1 className='aboutcontact3'>contact our support team</h1>
                <p className='aboutcontact4'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                </div>
            </div>
            <div className='aboutcontact5'>
                <div><span className='vga'><MdLocationOn /></span>
                <p>3rd Avenue, 83 Manhattan, New York, USA</p></div>
                <div><span className='vga'><IoCallSharp /></span>
                <p>+1 212 425 8617</p></div>
                <div><span className='vga'><MdEmail /></span>
                <p>playo@office.com</p></div>
            </div>
        </div>
        <div>
            <form onSubmit={(e)=> e.preventDefault()} className='aboutcontact1'>
                <div></div>
                <input type="text" placeholder='your name' required/>
                <input type="text" placeholder='your email' required />
                <textarea cols="30" rows="11">your text</textarea>
                <div><button type='submit'>submit </button></div>
            </form>
        </div>
    </div>
  )
}

export default ContactBody