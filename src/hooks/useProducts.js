
import { ProductsContext } from "../context/ProductsContext";
import { useContext} from "react";
export function useProducts () {
    const {  totalpages,currenntPage,setCurrentPage ,  setProducts , products,itemsinPage} = useContext(ProductsContext)


const cambiarPagina = (nuevaPagina) => {

    if (nuevaPagina >= 1 && nuevaPagina <= totalpages) {
        setCurrentPage(nuevaPagina)
    }
  };



return {cambiarPagina, currenntPage ,  setProducts, products,itemsinPage}

}