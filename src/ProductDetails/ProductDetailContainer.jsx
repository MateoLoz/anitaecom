import { useState } from "react"
import { useCart } from "../Cart/hook/useCart"
export const ProductDetailContainer = ({ id,  img , nombre , brevedescrip , precio , talles , descripcion}) => {
    
  const [drop,setdrop] = useState(false)
    
    const handleDropDown = () => {
    
        if(drop == false) {
         let drop = document.getElementById('dropdown')
         let img = document.getElementById('dropdown-img')
         img.classList.add("rotate")
         drop.classList.add("active")
         console.log(drop.classList)
    }
    if(drop == true) {
        let drop = document.getElementById('dropdown')
        let img = document.getElementById('dropdown-img')
        img.classList.remove("rotate")
        drop.classList.remove("active")
        console.log(drop.classList)
       
       
    }
    
    return setdrop(!drop)
    }

    const {updateCart,updateSize,size} = useCart()

    return(
        <>
           <section className="productdetails-container">
            <aside className="product-details">
              <h2>{nombre}</h2>
              <span>{brevedescrip}</span>
              <h3>Ars ${precio}</h3>
              <div>
                {/* Aqui ira un carrusel de imagenes para ver los colores  */}
              </div>
             <small>Elegi tu talla (Us)</small>
             <section className="product-details-size">
                {talles.map((talle)=> (
                    <>
                <article key={talle} className={ size == talle ? "article-size-selected" : "article-size"} onClick={()=> updateSize(talle)}>
                  {talle}
               </article>
                    </>
                ))}
             
             </section>
             <button className="btn-addToCart" onClick={()=>updateCart({id, imagen:img,titulo:nombre,precio,info:brevedescrip})}>Añadir al carrito</button>

             <small>Envio gratuito a partir de AR $xxx.xxx</small>
             <section className="descripcion-container">
                <div className="descripcion-detail" onClick={()=> handleDropDown()}>
                <span>Descripcion</span> <img id="dropdown-img" className="img-description" src="./src/mocks/down-arrow.png" alt="" width={'22px'}/>
                </div>
                <div id="dropdown" className="descripcion">
                <small>{descripcion}</small> 
                </div>
             </section>
            </aside>
           
        </section>
        </>
    )
}