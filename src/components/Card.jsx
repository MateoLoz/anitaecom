
import './Card.css'
import { useNavigate } from "react-router";
import { useHref } from "react-router";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

export const Card = () => {

  let href = useHref("/productDetail")
  const navigate = useNavigate()
const {itemsinPage} = useProducts()

const handleDetail = (prod) => {
const {id, titulo , image , ProductInfo , descripcion , precio, talles} = prod
  navigate(href, {state:{id, titulo,image,ProductInfo,descripcion,precio,talles}})
}

const [card,setcard] = useState(false)

const handleCard = ({id , id2}) => {
  console.log(id,id2)

  if(card == false) {
  let img1 = document.getElementById(id)
  let img2 = document.getElementById(id2)
  img1.classList.add('card-desactive')
  img2.classList.remove('card-desactive')
  img2.classList.add('card-active')

  }
  if(card == true) {
    let img1 = document.getElementById(id)
    let img2 = document.getElementById(id2)
    img1.classList.remove('card-desactive')
    img2.classList.remove('card-active')
    img2.classList.add('card-desactive')
  }

 


  setcard(!card)
}

return (
    
       <div className="mainContainer">

        {
          itemsinPage.map((el)=>(
           
             <>
                 <div key={el.id} className="box" onClick={()=> handleDetail(el)}>
                <div className="card" id={el.id} >
                <div className="image" id={`${el.id}-img`} onMouseEnter={()=>handleCard({id:`${el.id}-img1` , id2:`${el.id}-img2`})} onMouseLeave={()=> handleCard({id:`${el.id}-img1` , id2:`${el.id}-img2`})} >
                 <img id={`${el.id}-img1`}  src={el.image[0]} alt="Banner del producto" />
                 <img  className="card-desactive"  id={`${el.id}-img2`}  src={el.image[1]} alt="Banner del producto"/>
                </div>
                <div className="desc">
                  <h1 className="title-card">{el.titulo}</h1>
                  <span className="price-card">${el.precio}</span> 
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