
import { EvalNav } from "../navbar/navbar";
import { Cart } from "../Cart/Cart";
import Card from "../components/Card";
import { useCart } from "../Cart/hook/useCart";
import { Footer } from "../Footer/Footer";
import { ProductsProvider } from "../context/ProductsContext.jsx";
import { NavigationPages } from "../navigation/NavigationPages.jsx";
import { Filters } from "../filters/Filters.jsx";
export const ProductsPage = () => {
    const {open} = useCart()
    return (
       <ProductsProvider>
       <div className="container-padre">
       <EvalNav/>
       {open  == true ? <Cart/> : null }
       <main>
        <Filters/>
       <Card/>
       <NavigationPages/>
       </main>
       <Footer/>
       </div>
       
       </ProductsProvider>
        

    )
}




