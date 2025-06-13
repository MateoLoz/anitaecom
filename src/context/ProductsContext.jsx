import { Children, createContext } from "react";
import { useState } from "react";
import { initialProducts } from "../reducer/productreducer";
export const ProductsContext = createContext()

export function ProductsProvider  ({children})  {
const initialState =  initialProducts

const [products,setProducts] = useState(initialState)
const itemsperpage = 10
const rounded = () => {
let res = Math.ceil(products.length / itemsperpage)
if(res % 1 !== 0){
    res = res + 1
}
return res
}
const [totalpages,setTotalPages] = useState(()=> {
    let res = rounded()
    return res
})

const [currenntPage,setCurrentPage] = useState(1)
const inicio = (currenntPage - 1) * itemsperpage
const fin = inicio + itemsperpage
const itemsinPage = products.slice(inicio,fin)


    return(
        <ProductsContext.Provider value={{
            products,
            setProducts,
            totalpages,
            setTotalPages,
            currenntPage,
            setCurrentPage,
            itemsinPage
        }} >
            {children}
        </ProductsContext.Provider>
    )
}