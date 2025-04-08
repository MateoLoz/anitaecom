import { usePreference } from "../../hooks/usePreference"
import { useCart } from "../hook/useCart"
import { useNavigate } from "react-router"
export const CheckOut = () => {
    const {handlePreference} = usePreference()
    const navigate = useNavigate()
    const {cartitems} = useCart()
    const handlecompra = async () => {
        await handlePreference()
        navigate('/checkout')
      }
return (
    <>
     <aside className="checkout">
        <button className="checkout-btn" onClick={()=>handlecompra()}>Comprar ({cartitems})</button>
       </aside>
    </>
)
}