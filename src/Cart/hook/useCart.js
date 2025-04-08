import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
export function useCart () {
const {cart , setCart,size,setSize , setCartItems,cartitems , setFinalPrice, finalprice , open , setOpen} = useContext(CartContext)




const updateSize = (talle) => {

    setSize(talle)
    window.localStorage.setItem('talle',JSON.stringify(talle))
    return size
}

const updateCartCount = (operator) => {
    if(operator == '+'){
        setCartItems(()=>cartitems + 1)
        return
    }
    if(operator == '-'){
        setCartItems(()=>cartitems - 1)
        return
    }
    
}


const updateCart = async (item) => {

    if(size == 0){
        return
    }

    const newState = [
        ...cart,
        {
          ...item,
          talle: size
        }
    ]
     await setCart(newState)
    localStorage.setItem('cart',JSON.stringify(newState))
    updateCartCount('+')
    getFinalPrice(newState)
    return newState


}

const removeItemCart = (id) => {
    let arr = cart
    let res = arr.findIndex( item => item.id == id)
    arr.splice(res,1)
     window.localStorage.setItem('cart',JSON.stringify(arr))
      setCart(arr)
      getFinalPrice()
    updateCartCount('-')
}

const getFinalPrice = (state) => {
  
 if(!state){

 
 let index =  cart.length 
 let arr = structuredClone(cart)

 let final = 0


 for(let i = 0 ; i < index; i++){
    let number = Number(arr[i].precio)
    final = final + number
 }

  window.localStorage.setItem('final',JSON.stringify(final))
   setFinalPrice(final)
 }


 if(state){
    let index =  state.length 
    let arr = structuredClone(state)
   
    let final = 0
   
   
    for(let i = 0 ; i < index; i++){
       let number = Number(arr[i].precio)
       final = final + number
    }
   
     window.localStorage.setItem('final',JSON.stringify(final))
      setFinalPrice(final)
 }


}



const openCart = () => {

    setOpen(!open)


    return 
}




return {updateSize,size, cartitems , updateCart , cart , finalprice , open ,openCart , removeItemCart}
}