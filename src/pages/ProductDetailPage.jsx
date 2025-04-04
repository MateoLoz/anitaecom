
import { EvalNav } from "../navbar/navbar"
import './styles/productdetail.css'
import { ImageProductDetail } from "../ProductDetails/ImageProductDetail"
import { ProductDetailContainer } from "../ProductDetails/ProductDetailContainer"
import { Cart } from "../Cart/Cart"
import { useLocation } from "react-router"
import { useCart } from "../Cart/hook/useCart"
export const ProductDetailPage = () => {
    const location = useLocation()
const {open} = useCart()
const { id ,titulo , image , ProductInfo , descripcion , precio, talles} = location.state || {}




    return(<>
    <EvalNav/>
    {open == true ? <Cart/> : null}
      <div className="productdetail-container">
      { location.state != undefined ? <>
        <ImageProductDetail img={image}/>
        <ProductDetailContainer id={id}  img={image}  nombre={titulo} brevedescrip={ProductInfo} precio={precio} talles={talles} descripcion={descripcion} />
      </> 
      : <h4>No se encontro el producto!</h4>
      }
  
        
      </div>
    </>)
}