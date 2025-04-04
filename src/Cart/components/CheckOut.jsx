import { useCart } from "../hook/useCart"

export const CheckOut = () => {
    const {cartitems} = useCart()
return (
    <>
     <aside className="checkout">
        <button className="checkout-btn">Comprar ({cartitems})</button>
       </aside>
    </>
)
}