import { useState } from "react"
import './style/filter.css'
import { useProducts } from "../hooks/useProducts"
export const Filters = () => {
    const {products,  setProducts } = useProducts() 
    const [filter,setfilter] = useState({
        category:'all',
        relevante:false,
        price:0
    })
    const [currentfilter,setcurrentfilter] = useState()
const handlefilters = (e) => {
  
    if(e.target.value != currentfilter) {
     if(e.target.value == 'min'){
        const newState = {
            category:'all',
            relevante:filter.relevante,
            price:e.target.value
        }
        handleproductosMinPrice()
        setfilter(newState)
       
     }
     if(e.target.value == 'max'){
        const newState = {
            category:'all',
            relevante:filter.relevante,
            price:e.target.value
        }
        setfilter(newState)
        handleproductosMaxprice()
       
     }
     if(e.target.value == 'true'){
        const newState = {
            category:'all',
            relevante:e.target.value,
            price:0
        }
        console.log(newState)
        setfilter(newState)
       
     }
     
     setcurrentfilter(e.target.value)
}

}

const handleproductosMaxprice = () => {
    let sorteditems  =  [...products].sort((a,b)=> b.precio - a.precio)
    window.localStorage.setItem('filters',JSON.stringify(sorteditems))
    setProducts(sorteditems)
}
const handleproductosMinPrice = () => {
    let sorteditems  =  [...products].sort((a,b)=> a.precio - b.precio)
    window.localStorage.setItem('filters',JSON.stringify(sorteditems))
    setProducts(sorteditems)
}

    return(
        <>
        <div className="filter-container">
        <select name="" id="" className="select" onClick={(e)=> handlefilters(e)} >
            <option value="All"  >Filtros</option>
            <option id="max" value="max" >Mayor Precio</option>
            <option id="min" value="min" >Menor Precio</option>
            <option id="relevant" value="true" >Mas relevante</option>
        </select>
        </div>
        </>
    )
}