import { useState } from "react"
import { Link } from "react-router"

export const NavSection = () => {
    const [selected,setselected] = useState(false)
  
const handleSelect = (e) => {
    if(selected){
        selected.style.borderBottom = ""
    }

let ref = e.target.id

let element = document.getElementById(`${ref}`)

element.style.borderBottom = "1px solid #000"

setselected(element)

localStorage.setItem('selected', element)


}


    return (
        <>
         <nav className="navigation">
                <ul className="ul-list" onClick={(e)=> handleSelect(e)}>
                  <li  className={selected ? 'selected' :  null}><Link className="product" to="/products" id="product"> Productos</Link></li>
                  <li ><Link className="product" to="/products"  id="about-us">Sobre Nosotros</Link></li>
                  <li ><Link to="/products"  id="contact">Contactanos</Link></li>
                </ul>
                
            </nav>
        </>
    )
}