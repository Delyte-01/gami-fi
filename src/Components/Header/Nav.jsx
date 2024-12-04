import React, { useState,useEffect,useRef } from 'react'
import Logo from './Logo'
import { IoMdClose } from "react-icons/io";
import '../Header/Nav.css'
import Button from '../Button';
import { BsDashLg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Nav({visible,setVisible,handleclick}) {
    const [open,setOpen]= useState(false);
    const navigate= useNavigate();
    const panelRef = useRef(null); // Reference to the panel element
    const [height, setHeight] = useState('0px'); // Dynamically set height


    
    // Use ResizeObserver to detect content size changes when resizing
  useEffect(() => {
    const handleResize = () => {
      if (panelRef.current) {
        setHeight(open ? `${panelRef.current.scrollHeight}px` : '0px');
      }
    };

    // Initial calculation
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

    const toggleClick=()=>{
        setOpen(!open);
    }
    const handleClick=()=>{
        setVisible(false)
    }
    const handleHome=()=>{
      navigate("/")
  }
    <BsDashLg />

  return (
    <div className={`nav ${visible ? 'open': ''}`}>
        <div>
            <div onClick={handleHome}><Logo /></div>
            <div className='closeBar svg' onClick={handleClick}><IoMdClose /></div>
        </div>
        <div>
            <ul>
                <div>
                    <li><a href="/">home</a></li>
                   
                </div>
                <div>
                    <div  className='page' onClick={toggleClick}
                    >
                    <li><a href="#">pages</a></li>
                    <span>
                        <img 
                         className='svg'
                        src="https://res.cloudinary.com/dk5mfu099/image/upload/v1731061269/arrow_drop_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24_cth3nx.png" alt="" />
                    </span>
                    </div>
                    <div
                     ref={panelRef}
                     style={{
                        height: height,
                        overflow: 'hidden',
                        transition: 'height .5s ease-in-out', // Smooth transition for height
                      }}
                      className={`pages-list ${open ? 'open': ''}`}>
                        <ul>
                            <li>
                                <span className='spanIcon'></span><a href="/">home</a></li>
                            <li>  <span className='spanIcon'></span><a href="/about">about us</a></li>
                            <li>  <span className='spanIcon'></span><a href="/team">team</a></li>
                            <li>  <span className='spanIcon'></span><a href="/pricing">pricing</a></li>
                            <li>  <span className='spanIcon'></span><a href="/store">store</a></li>
                            <li>  <span className='spanIcon'></span><a href="/career">carrer</a></li>
                            <li>  <span className='spanIcon'></span><a href="/contact">contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <li><a href="/store">store</a></li>
                </div>
                <div>
                    <li><a href="/news">news</a></li>
                </div>
                <div>
                    <li><a href="/contact">contact us</a></li>
                </div>
            </ul>
        </div>
        <div>
          <a href="https://play.google.com/store/games?device=windows"><Button title={'buy now'} /></a></div>
    </div>
  )
}

export default Nav