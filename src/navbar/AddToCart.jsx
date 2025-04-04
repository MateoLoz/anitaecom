import { CartIcon } from "./icons/CartIcon"
import { useCart } from "../Cart/hook/useCart"
export const AddToCart = () => {
const {cartitems,openCart} = useCart()

    return(
        <>
        <button className="btn-container">
            <div className="btn-content" onClick={()=> openCart()}>
                <CartIcon/>
                <h4>({cartitems})</h4>
            </div>
        </button>
        </>
    )
}