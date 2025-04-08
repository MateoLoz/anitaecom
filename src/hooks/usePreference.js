import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useCart } from "../Cart/hook/useCart";
import axios from 'axios'
export function usePreference  () {

const {preference,setpreference} = useContext(CartContext)
const {cart} = useCart()
const handlePreference = async () => {
    let pref = await  sendDataToServer()
    setpreference(pref)

}

const sendDataToServer = async () => {
  try {
    const response = await axios.post('https://0bnj3jwf-3036.brs.devtunnels.ms/',{
      cart,
    })
   return response.data.id

  } catch (err){
    console.log(err.message)
  }
}


return {preference,handlePreference}

} 