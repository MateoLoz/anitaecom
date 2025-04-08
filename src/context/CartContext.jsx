import { createContext, useState } from "react";

const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

const initialStateSize = JSON.parse(window.localStorage.getItem('talle')) || [0]
const initialcartcount = initialState.length 
const initialFinalPrice = JSON.parse(window.localStorage.getItem('final')) || 0
const initialStateModal = window.localStorage.getItem('modalcart') || false
export const CartContext = createContext()
export function  CartProvider  ({children}) {

const [cart,setCart] = useState(initialState)
const [cartitems,setCartItems] = useState(initialcartcount)
const [size,setSize] = useState(initialStateSize)
const [finalprice,setFinalPrice] = useState(initialFinalPrice)
const [open,setOpen] = useState(initialStateModal)
const [preference,setpreference] = useState(null)
return(
    <CartContext.Provider value={{
        cart,
        setCart,
        cartitems,
        setCartItems,
        size,
        setSize,
        finalprice,
        setFinalPrice,
        open,
        setOpen,
        preference,
        setpreference
    }}>
     {children}
    </CartContext.Provider>
)

}