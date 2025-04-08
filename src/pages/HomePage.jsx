import { Footer } from "../Footer/Footer"
import { Cart } from "../Cart/Cart"
import { useCart } from "../Cart/hook/useCart"
import { EvalNav } from '../navbar/navbar'


export const HomePage = ( ) => {
const {open} = useCart()
    return(
        <>
       <EvalNav/>
       {open == true ? <Cart/> : null }
       <footer>
        <Footer/>
       </footer>

        </>
    )
}