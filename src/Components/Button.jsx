import React from 'react'
import '../../src/Components/Button.css'


function Button({title,anySvg}) {
  return (
    <div className='buttonDiv'>
        <h2>{title}</h2>
        <span
        // className='svg'
        style={{display:'flex', alignItems:'center',justifyContent:'center',fontSize:'15px',fontWeight:'900'}}>{anySvg}</span>
        
    </div>
  )
}

export default Button