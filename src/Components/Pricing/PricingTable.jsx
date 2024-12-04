import React from 'react'
import '../Pricing/PricingTable.css'
import { FaMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);



const tableArry =[{
    title:"basic starter",
    users:"up to 2 users",
    instantScreen:"2 gb",
    curatorContent: <FaCheck />,
    liveStreams:<FaMinus />,
    RemotePlay:<FaMinus />,
    Discounts:<FaMinus />,
    ddosProtect: <FaCheck />,
    class:"animateTable2"
    
},{
    title:"advance amateur",
    users:"up 10 users",
    instantScreen:"5 Gb",
    curatorContent: <FaCheck />,
    liveStreams:<FaMinus />,
    RemotePlay: <FaCheck />,
    Discounts: <FaCheck />,
    ddosProtect: <FaCheck />,
      class:"animateTable3"
    
},{
    title:"premium advance",
    users:"up to 20 users",
    instantScreen:"20 gb",
    curatorContent: <FaCheck />,
    liveStreams: <FaCheck />,
    RemotePlay: <FaCheck />,
    Discounts: <FaCheck />,
    ddosProtect: <FaCheck />,
      class:"animateTable4"
    
}]


function PricingTable() {
    const pricingTableRef=useRef();
      
    useGSAP(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
            trigger:pricingTableRef.current,
            // markers:true,
            // scrub:true,
            start:"top center",
            end:"bottom center"
        }
      });
              tl.from(".animateTable",{scale:.5,opacity:0,duration:.5} )
              tl.from(".animateTable1",{scale:.5,opacity:0,duration:.5})
              tl.from(".animateTable2",{scale:.5,opacity:0})
              tl.from(".animateTable3",{scale:.5,opacity:0})
              tl.from(".animateTable4",{scale:.5,opacity:0})
              tl.from(".animateTable5",{scale:.5,opacity:0,x:-400})
              
    });
  return (
    <div className='pricingTable' ref={pricingTableRef}>
        <div></div>
        <div>
            <h3 className='animateTable'>Comparing Table</h3>
            <h2 className='animateTable1'>Compare pricing plans to find the best</h2>
        </div>
        {/* the body */}
        <div>   
        <div className='animateTable5'>
            <div>
                <h1 className='text-gradient'>features</h1>
            </div>
            <div >
                <ul>
                    <li><p>users</p></li>
                    <li><p>instant screenshots</p></li>
                    <li> <p>curator content</p></li>
                    <li>  <p>live streams</p></li>
                    <li>  <p>remote play together</p></li>
                    <li> <p>discounts and sales events</p></li>
                    <li><p>ddos protection</p></li>
                </ul>
            </div>
        </div>
        <div>
            {
                tableArry.map(data=>(
                    <>
                    <div className={data.class}>
                        <div>
                            <h2 className='text-gradient'>
                            {data.title}
                            </h2>
                           
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <p>users</p>
                                     <h3>{data.users}</h3>
                                </li>
                                <li>
                                    <p>instant screenshots</p>
                                    <h3>{data.instantScreen}</h3>
                                </li>
                                <li>
                                    <p>curator content</p>
                                    <span>{data.curatorContent}</span>
                                </li>
                                <li>
                                    <p>live streams</p>
                                    <span>{data.liveStreams}</span>
                                </li>
                                <li>
                                    <p>remote play together</p>
                                    <span>{data.RemotePlay}</span>
                                </li>
                                <li>
                                    <p>discounts and sales events</p>
                                    <span>{data.Discounts}</span>
                                </li>
                                <li>
                                    <p>ddos protection</p>
                                    <span>{data.ddosProtect}</span>
                                </li>
                            </ul>
                            <div><a href="https://www.pcgamer.com/games/the-top-100-pc-games-2024/"><button>purchase</button></a></div>
                        </div>
                    </div>
                    </>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default PricingTable