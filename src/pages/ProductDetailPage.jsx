
import { EvalNav } from "../navbar/navbar"
import './styles/productdetail.css'
import { ImageProductDetail } from "../ProductDetails/ImageProductDetail"
import { ProductDetailContainer } from "../ProductDetails/ProductDetailContainer"
import { useLocation } from "react-router"
export const ProductDetailPage = () => {
    const location = useLocation()

const {titulo , image , ProductInfo , descripcion , precio, talles} = location.state || {}

console.log(location.state)


    return(<>
    <EvalNav/>
      <div className="productdetail-container">
      { location.state != undefined ? <>
        <ImageProductDetail img={image}/>
        <ProductDetailContainer nombre={titulo} brevedescrip={ProductInfo} precio={precio} talles={talles} descripcion={descripcion} />
      </> 
      : <h4>No se encontro el producto!</h4>
      }
  
        
      </div>
    </>)
}