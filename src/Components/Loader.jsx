import React,{useState,useRef} from 'react'
import PuffLoader
 from "react-spinners/PuffLoader";
import '../index.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);



function Loader({loading}) {
  const loaderRef=useRef();
  useGSAP(()=>{
         gsap.to(loaderRef,{
          x:-100
         })
  });
   

    const [color, setColor] = useState("#fff");
  return (
    <div className='loader' ref={loaderRef}>
        {
            loading && 
        <PuffLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
                
            
        }

    </div>
  )
}

export default Loader