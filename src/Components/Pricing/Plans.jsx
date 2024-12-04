import React from 'react'
import '../Pricing/Plans.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


const plansArry=[{
    title:"starter",
    amout:50,
    details:"discounts and sales events",
    details2:"chat with frienss",
    details3:"game soundtracks",
    class:"animatePlans2"
},{
    title:"amateur",
    amout:60,
    details:"game bundles",
    details2:"remote play",
    details3:"live streams",
    class:"animatePlans3"
},{
    title:"advance",
    amout:120,
    details:"profile customisation",
    details2:"curator connect",
    details3:"user-created guides",
    class:"animatePlans4"
}]


function Plans() {
    const plansRef=useRef();
      
    useGSAP(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
            trigger:plansRef.current,
            // markers:true,
            // scrub:true,
            start:"top center",
            end:"bottom center"
        }
      });
              tl.from(".animatePlans",{scale:.5,opacity:0,duration:.5} )
              tl.from(".animatePlans1",{scale:.5,opacity:0,duration:.5})
              tl.from(".animatePlans2",{scale:.5,opacity:0,duration:.5})
              tl.from(".animatePlans3",{scale:.5,opacity:0,duration:.5})
              tl.from(".animatePlans4",{scale:.5,opacity:0,duration:.5})
              
    });
  return (
    <div className='plans' ref={plansRef}>
        <div>
           <h3 className='text-gradient animatePlans'>princing plans</h3>
           <h1 className='animatePlans1'>pricing that suits your needs</h1>
        </div>
        <div>
            {
                plansArry.map(data=>(
                    <>
                    <div className={data.class}>
                        <h1>{data.title}</h1>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                        <div>
                            <span>{data.amout}</span>
                            <span>/month</span>
                        </div>
                        <div>
                            <a href="https://www.pcgamer.com/games/the-top-100-pc-games-2024/">
                            <button>buy now</button>
                            </a>
                           
                        </div>
                        <ul>
                            <li>early access</li>
                            <li>{data.details}</li>
                            <li>{data.details2}</li>
                            <li>{data.details3}</li>
                        </ul>
                        <main></main>
                    </div>
                    </>
                ))
            }
        </div>
        <div></div>
    </div>
  )
}

export default Plans