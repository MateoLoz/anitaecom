import Data from "./Data";
import './Card.css'
import { useNavigate } from "react-router";
import { useHref } from "react-router";
export const Card = () => {
  let href = useHref("/productDetail")
  const navigate = useNavigate()

const handleDetail = (prod) => {
const {titulo , image , ProductInfo , descripcion , precio, talles} = prod
  navigate(href, {state:{titulo,image,ProductInfo,descripcion,precio,talles}})
}

return (
    
       <div className="mainContainer">

        {
          Data.map((el)=>(
             <>
                 <div key={el.id} className="box" onClick={()=> handleDetail(el)}>
                <div className="card">
                <div className="image">
                 <img src={el.image} alt="" />
                </div>
                <div className="desc">
                       <h1>{el.titulo}</h1>
                       <span>${el.precio}</span> 
                </div>
                </div>
                </div> 
            </>
          ))
        }
        
        </div>
)
}

export default Card;