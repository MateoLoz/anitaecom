import { Footer } from "../../Footer/Footer";
import { EvalNav } from "../navbar/navbar";
import { Cart } from "../Cart/Cart";
import Card from "../components/Card";
import { useCart } from "../Cart/hook/useCart";
export const ProductsPage = () => {
    const {open} = useCart()
    return (
       <>
       <div className="container-padre">
       <EvalNav/>
       {open  == true ? <Cart/> : null }
       <main>
       <Card/>
       </main>
       <Footer/>
       </div>

       </>
        

    )
}




