import React, { useState,useEffect } from 'react'
import '../../Components/Store/StoreDetailsPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import { storeArry } from '../../../Data.js/store';
import Button from '../Button';
import Cart from './Cart';
import { useGlobal } from '../Context/Context';
// import { newsArry } from '../../../Data.js/news';




function StoreDetailsPage() {

    const {addToCart,setCartVisible,cartVisible} = useGlobal();
    const [item, setItem] = useState([]);
    const navigate =useNavigate();
    const { id} =useParams();
    console.log(id)
    useEffect(() => {
        const filterItem = storeArry.find(item => item.id === parseInt(id));
        setItem(filterItem);
      }, [id]);
    
    const handleAddToCart = () => {
        addToCart(item);
        setCartVisible(!cartVisible)
        navigate('/store');// Redirect to the cart page after adding item
      };
      console.log(item.desc)

  return (
<div className='storeDetails'>
    <div></div>
    <div>
        <div>
            <img
            className='cursor' src={item.img} alt="" />
        </div>

        <div>
            <div>
                <h1>{item.title}</h1>
                <div><p>item description</p>
                <span>{item.desc}</span>
                </div>
            </div>
            <div>
               <div>
                    <p >total price:</p>
                    <span>$ {item.price}.00 usd</span>
                </div>
                <div
                onClick={handleAddToCart}
                >
                    {/* <a href="#"> */}
                    <Button  title={"add to cart"}/>
                    {/* </a> */}
                   
                </div>
            </div>
        </div>
    </div>
    {/* <div className={cartVisible?"open":"close"}> */}
        {/* <Cart
         /> */}
    {/* </div> */}
 </div>
  )
}

export default StoreDetailsPage