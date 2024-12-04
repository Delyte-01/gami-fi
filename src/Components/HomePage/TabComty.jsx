import React,{useState} from 'react'
import '../../Components/HomePage/TabCompty.css'
import { FaArrowRight } from "react-icons/fa";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

function TabComty() {
  const comptyRef=useRef();
       

  useGSAP(()=>{
    let tl3 =gsap.timeline({
        scrollTrigger:{
          trigger:comptyRef.current,
        //   markers:true,
          start:"top center",
          end:"bottom center",
        }
       });

       tl3.from(".def",{scale:.5,opacity:0,duration:1})
      })
    const [activeTab, setActiveTab] = useState('tab1');
  return (
   
<div className='tabComty' id='community' ref={comptyRef}>
    <div className='def'>
      <div>
            <div  >
            <button
            className={activeTab ==="tab1" ? "label":"nolabel"}
           onClick={() => setActiveTab('tab1')}>Join the Community</button>
            </div>
            <div >
            <button
            className={activeTab ==='tab2' ? "label":"nolabel"}
             onClick={() => setActiveTab('tab2')}>Experience Playo Hardware</button>
            </div>
        
         {/* <button onClick={() => setActiveTab('tab3')}>Tab 3</button> */}
      </div>

         {/* Tab Content */}
      <div>
        {activeTab === 'tab1' ? (
          <div>
            <div>
        
                <div><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982435/62b316c5ab8b8f47a93a8315_Group_5_zoly2i.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982436/62b316a9c2f0390a3c62daeb_Group_3_cfpoup.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982436/62b316b8b2a4441e00bb8ecf_Group_4_kmyb8r.png" alt="" /></div>
            </div>
            <div>
                <h1>Meet new people</h1>
                <p>Join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                <div>
                    <h3>visit the community</h3>
                    <span><FaArrowRight /></span>
                </div>
            </div>
          </div>
        ) :  (
          <div>
             <div>
                <div><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982436/62b316a9c2f0390a3c62daeb_Group_3_cfpoup.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982436/62b316b8b2a4441e00bb8ecf_Group_4_kmyb8r.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730982435/62b316c5ab8b8f47a93a8315_Group_5_zoly2i.png" alt="" /></div>
            </div>
            <div>
                <h1>Experience Playo Hardware</h1>
                <p>Join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                <div>
                    <h3>visit the store</h3>
                    <span><FaArrowRight /></span>
                </div>
            </div>
          </div>
        ) }
        
        </div>
           
      </div>

            
    </div>
    
  )
}

export default TabComty