import {EvalNav} from '../navbar/NavBar'
import { useCart } from '../Cart/hook/useCart'
import { MercadoPagoBtn } from '../checkout/MercadoPagoBtn'

import { usePreference } from '../hooks/usePreference'
export const CheckOutPage = () => {

    const {cart,finalprice} = useCart()
    const {preference} = usePreference()

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
        {
          preference ?  <div id="wallet_container" >
          <MercadoPagoBtn/>
          </div> : null
        }
      
      </article>
     </div>
     
    </>
)
}