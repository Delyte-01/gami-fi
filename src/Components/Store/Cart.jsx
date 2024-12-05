import React from 'react'
import { Link } from 'react-router-dom';
import '../../Components/Store/Cart.css'
import { useGlobal } from '../Context/Context'
import { IoMdClose } from "react-icons/io";
// import { Link } from 'react-router-dom';

function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice,handleCart,cartVisible } = useGlobal();
  return (
    <div className='cart' >
       <div className='overlay'
       onClick={handleCart}></div>
       <div>
        <div>
            <h2>your cart</h2>
            <span 
            onClick={handleCart} className='cursor vga'><IoMdClose /></span>
        </div>
        <div>
            <ul>
                 {cart.length !== 0 ? 
                 (cart.map((item) => (
                   <>
                   <div>
                        <div>
                            <div>
                                <div className='image-cardB'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <h4>{`$ ${item.price}.00 usd`}</h4>
                                    <div
                                    onClick={() => removeFromCart(item.id)}
                                    className='cursor '>remove</div>
                                </div>
                            </div>
                            <div>
                                <div
                                 onClick={() => decreaseQuantity(item.id)}
                                >-</div>
                                <div>{item.quantity}</div>
                                <div
                                 onClick={() => increaseQuantity(item.id)}>+
                                 </div>
                            </div>
                            
                        </div>

                    </div>
                   </>
                  ))):(
                    <div className='empty'>
                       <h2 >no items found.</h2>
                    </div>
                  )} 
            </ul>
           {cart.length !== 0 
                      &&(
                            <>
                             <div className='totalDiv'>
                            <p>subtotal</p>
                            <h3>${getTotalPrice()}</h3>
                             </div>
                            </>  
                      )
                }
        </div>
        </div>
    </div>
  )
}

export default Cart