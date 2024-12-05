import React,{useState,useRef} from 'react'
import PuffLoader
 from "react-spinners/PuffLoader";
import '../index.css'



function Loader({loading}) {
    const [color, setColor] = useState("#fff");
  return (
    <div className='loader' >
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