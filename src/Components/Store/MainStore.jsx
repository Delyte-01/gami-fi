import React, { useState } from 'react'
import { storeArry } from '../../../Data.js/store'
import '../../Components/Store/MainStore.css'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


function MainStore() {
    const storeRef=useRef();
       

    useGSAP(()=>{
     gsap.from("#store",{
        scale:.2,
        opacity:0,
        scrollTrigger:{
            trigger:storeRef.current,
            start:"top 30%",
            end:"60% top",
            // markers:true,
            // scrub:true
        }
     })
         
        })
  const [storeArr, setStoreArry] =useState( storeArry);
  const navigate = useNavigate();


  const filtercate=(x)=>{
        const filtercat = storeArry.filter((curlem)=>{
            return curlem.type === x
        })
        setStoreArry(filtercat);
  }
  const filterAll=()=>{
    setStoreArry(storeArry)
  }

  return (
    <div className='mainStore ' ref={storeRef} >
      <div className='bg-MainHome'></div>
      <div className='hello'>
        <ul >
            <li className='text-gradient' onClick={filterAll}>all</li>
            <li className='text-gradient' onClick={()=>filtercate("games")}>games</li>
            <li className='text-gradient' onClick={()=>filtercate("merchandise")}>merchandise</li>
            <li className='text-gradient' onClick={()=>filtercate("hardware")}>hardware</li>
        </ul>
      </div>
      <div  id='store' >
            {
                storeArr.map((data)=>(
                    <>
                       
                    <div key={data.id}>
                        <div>
                            <div className='text-gradient cursor'
                            >{data.type}</div>
                            <div>
                                <div
                                className='image-card cursor'>
                                    <img src={data.img} alt={data.title} />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='cursor'>{data.title}</h2>
                                        <h3>${data.price}.00 USD</h3>
                                    </div>
                                    <div onClick={()=> navigate(`/store-details/${data.id}`)}>
                                        {/* <a href={`/store-details/${data.id}`}> */}
                                        <Button title={"Add to Cart"}/>
                                        {/* </a> */}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='desc'>{data.desc}</p>
                        </div>
                        <div className='position'></div>
                    </div>
                    </>
                ))
            }
      </div>
    </div>
  )
}

export default MainStore