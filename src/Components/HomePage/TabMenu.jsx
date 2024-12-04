import React, { useState } from 'react'
import '../../Components/HomePage/TabMenu.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);


function TabMenu() {

    const tabRef=useRef();
       

    useGSAP(()=>{
     gsap.from(tabRef.current,{opacity:0,scale:.5,duration:1,delay:3})
              
    });
  
  
    const [active,setActive]=useState('tab1');
    //   function handleCheck(){
    //     setActive(!active);
    //     console.log('hello')

    //   }
     

  return (
    <div className='tabMenu' ref={tabRef}>
        <div>
            <div onClick={() => setActive('tab1')}
                className={active === 'tab1' ? 'active':''}>
            <a href="#access"
             >access</a>
            </div>
            <div onClick={() => setActive('tab2')}
                 className={active === 'tab2' ? 'active':''}>
            <a href="#community">community</a>
            </div>
            <div onClick={() => setActive('tab3')}
                className={active === 'tab3' ? 'active':''}>
            <a   href="#features">features</a>
            </div>
            <div onClick={() => setActive('tab4')}
                className={active === 'tab4' ? 'active':''}>
            <a href="#games">games</a>
            </div>
            
       
        </div>
    </div>
  )
}

export default TabMenu