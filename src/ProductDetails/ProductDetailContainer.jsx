import { useState } from "react"
export const ProductDetailContainer = ({nombre , brevedescrip , precio , talles , descripcion}) => {

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
                {talles.map((size)=> (
                    <>
                <article className="article-size">
                  {size}
               </article>
                    </>
                ))}
             
             </section>
             <button className="btn-addToCart">Añadir al carrito</button>

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