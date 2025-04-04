import {EvalNav} from '../navbar/NavBar'
import { useCart } from '../Cart/hook/useCart'
export const CheckOutPage = () => {
    const {cart} = useCart()
return (
    <>
    <header>
    <EvalNav/>
    </header>
     
     <div className='checkout-container'>
      <article>
        {/* Aca se renderizara el carrito display junto con el botton de mercado pago */}
      </article>
      <article>
      {/* Aca se renderizara el botton de mercadopago para pagar */}
      </article>
     </div>
     
    </>
)
}