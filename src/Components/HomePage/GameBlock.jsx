import React from 'react'
import '../../Components/HomePage/GameBlock.css'
import { FaArrowRight } from "react-icons/fa";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import { useRef } from 'react';
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);



function GameBlock() {
    const gameRef=useRef();
       

  useGSAP(()=>{
    let tl2 =gsap.timeline({
        scrollTrigger:{
          trigger:gameRef.current,
        //   markers:true,
          start:"top center",
          end:"bottom center",
        //   scrub:2,
        //   repeat: 2,
        }
       });

       tl2.from(".imagg1",{scale:.5,opacity:0})
       tl2.from(".imagg2",{scale:.5,opacity:0})
       tl2.from(".imagg3",{scale:.5,opacity:0})
       tl2.from(".imagg4",{scale:.5,opacity:0})
       tl2.from(".imagg5",{scale:.5,opacity:0})
       tl2.from(".imagg6",{scale:.5,opacity:0})
       tl2.from(".imagg7",{scale:.5,opacity:0})
       tl2.from(".imagg8",{scale:.5,opacity:0})
    
            
  });
  return (
    <div className='gameBlock' id='access' ref={gameRef}>
        <div></div>
        <div className='spiral'>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730984211/62b2ce4ed424354c5d27947e_Group_2_vexaj1.png" 
            alt="" />
        </div>
        <div>

            <div>
                <div className='imagg1'><img   src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980661/game3_zsqutw.png" alt="" /></div>
                <div className='imagg2' ><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980661/game4_wgfmid.png" alt="" /></div>
                <div className='imagg3'><img  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980661/game5_hme3rv.png" alt="" /></div>
                <div className='imagg4'><img  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980660/game6_ajfnhm.png" alt="" /></div>
            </div>

            <div>
                <h1>Access Games Instantly</h1>
                <p>With nearly 30,000 games from AAA to indie and everything in-between. Enjoy exclusive deals, automatic game updates, and other great perks.</p>
                <div>
                  <a href="/">Browse the Store</a>
                    <span>
                    <FaArrowRight />
                    </span>
                </div>
            </div>

            <div>
                <div className='imagg5'><img  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980668/game2_xbuuj5.png" alt="" /></div>
                <div className='imagg6'><img  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980705/game1_qk2ywy.png" alt="" /></div>
                <div className='imagg7'><img  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980660/game8_gzc2nv.png" alt="" /></div>
                <div className='imagg8'><img  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980660/game7_wx4ykb.png" alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default GameBlock