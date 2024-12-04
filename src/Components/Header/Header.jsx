import React, { useState } from 'react'
import '../Header/Header.css'
import Logo from './Logo'
import Nav from './Nav'
import { HiShoppingCart } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../Context/Context';
import Cart from '../Store/Cart';
// import '../../index.css'




function Header() {
  const {handleCart,cartVisible} = useGlobal();
  const [visible,setVisible]= useState(false);
  const navigate= useNavigate();
  const handleClick=()=>{
    setVisible(!visible);
  }

  const handleHome=()=>{
      navigate("/")
  }
  return (
    <>
     <div className={`overlay ${visible ? 'overlay':'close'}`}
      onClick={handleClick}></div>
      <div className={cartVisible?"open":"close"}>
      <Cart />
      </div>
     
    <div className='header container'>
      <div onClick={handleHome} className='cursor'>
        <Logo />
      </div>
      <div>
        <Nav visible={visible} handleClick={handleClick} setVisible={setVisible} />
      </div>
      <div>
        <div className='svg vga'
        onClick={handleCart}>
          <HiShoppingCart />
          </div>
        <div
        onClick={handleClick}  className='svg harmburger vga'><RiMenu2Line /></div>
        <div className='button'><a href="https://play.google.com/store/games?device=windows">
        <Button title={'buy now'} /></a>
        
          </div>
      </div>
    
    </div>
    </>
  )
}

export default Header