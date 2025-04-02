import { createContext, useState } from "react";

const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
export const CartContext = createContext()

export function  CartProvider  ({children}) {
const [cart,setCart] = useState(initialState)
const [cartitems,setCartItems] = useState(cart.length)


return(
    <CartContext.Provider value={{
        cart,
        setCart,
        cartitems,
        setCartItems
    }}>
     {children}
    </CartContext.Provider>
)

}