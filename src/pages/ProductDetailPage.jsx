
import { EvalNav } from "../navbar/navbar"
import './styles/productdetail.css'
import { ImageProductDetail } from "../ProductDetails/ImageProductDetail"
import { ProductDetailContainer } from "../ProductDetails/ProductDetailContainer"
import { Cart } from "../Cart/Cart"
import { useLocation } from "react-router"
import { useCart } from "../Cart/hook/useCart"
import {Footer} from '../footer/Footer'
export const ProductDetailPage = () => {
    const location = useLocation()
const {open} = useCart()
const { _id ,titulo , imagen , info , descripcion , precio, talles} = location.state || {}




    return(<>
    <EvalNav/>
    {open == true ? <Cart/> : null}
      <div className="productdetail-container">
      { location.state != undefined ? <>
        <ImageProductDetail img={imagen[1]}/>
        <ProductDetailContainer id={_id}  img={imagen[0]}  nombre={titulo} brevedescrip={info} precio={precio} talles={talles} descripcion={descripcion} />
      </> 
      : <h4>No se encontro el producto!</h4>
      }
      
      <footer>
       <Footer/>
      </footer>
        
      </div>
    </>)
}