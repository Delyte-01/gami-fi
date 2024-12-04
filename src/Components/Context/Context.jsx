import { createContext, useContext, useState,useEffect } from "react";



const GlobalContext = createContext();

export const GlobalContextProvider=({children})=>{
    const [cartVisible,setCartVisible] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
      }, []);
      useEffect(() => {
        if (cart.length > 0) {
          localStorage.setItem('cart', JSON.stringify(cart));
        }if (cart.length === 0){
          localStorage.removeItem('cart'); // Remove cart from localStorage
        }
      }, [cart]);


//  Add item to the cart, or increase quantity if it already exists
 const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // Item already in cart, increase the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Add new item to cart with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  // Increase the quantity of an item
  const increaseQuantity = (itemId) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity of an item
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate the total price of the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };



    function handleCart(){
    setCartVisible(!cartVisible)
    };
    return(
<GlobalContext.Provider value={{cartVisible,addToCart
    ,setCartVisible,handleCart,removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice ,cart}}>
    {children}
</GlobalContext.Provider>
    )
}


// Custom hook to access cart state and actions
export const useGlobal = () => useContext(GlobalContext);