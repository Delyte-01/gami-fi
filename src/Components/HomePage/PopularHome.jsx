import React from 'react'
import '../../Components/HomePage/PopularHome.css'
import Button from '../Button'
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


    

function PopularHome() {
    const popularRef=useRef();
       

    useGSAP(()=>{
      let tl5 =gsap.timeline({
          scrollTrigger:{
            trigger:popularRef.current,
            // markers:true,
            start:"20% center",
            end:"bottom center",
            // scrub:2
          }
         });
  
         tl5.from(".popular1",{scale:.5,opacity:0,x:-50})
         tl5.from(".popular2",{scale:.5,opacity:0,x:50})
         tl5.from(".popular3",{scale:.5,opacity:0,x:50})
        })
  return (
    <div className='popularGames' id='games' ref={popularRef}>
            <div></div>
            <div>
                <div>
                    <h1>Popular Games</h1>
                </div>
                <div className='cursor' >
                    <h3 ><a className='text-gradient ' href="/store">view all</a></h3>
                    <span
                    ><FaArrowRight /></span>
                </div>
            </div>

            <div>
                <div className='popular1'>
                    <div>
                        <div>
                            <p>18 million players</p>
                            <div className='val'>
                                <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980622/box6-removebg-preview_jqkwf6.png" alt="" />
                            </div>
                            <p>Tactical shooter with 5v5 matches and unique characters.</p>
                        </div>
                        <div>
                            <input type="text" placeholder='free access' />
                            <button> <a href="https://www.microsoft.com/en-in/store/top-free/games/pc?msockid=075b3a8c0a4f6c673ed52f860b8f6d9b">play</a></button>
                        </div>
                    </div>
                    <div className='image-cdd'>
                        <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980623/box1-removebg-preview_rzb0jv.png" alt="" />
                    </div>
                </div>

                <div >
                    <div className='popular2'>
                        <div>
                            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980622/box2-removebg-preview_xj9whx.png" alt="" />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980622/box5-removebg-preview_jtc0zg.png" alt="" />
                                </div>
                                <div>
                                   <button><a href="/store">store</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='popular3'>
                        <div className='image-cd'>
                            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1731570285/download__1_-removebg-preview_rmsfwf.png" alt="" />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1731570284/62b42e7970c5b803cf6c63c8_Mask_group_jp6vas.png" alt="" />
                                </div>
                                <div>
                                   <button ><a href="/store">store</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PopularHome