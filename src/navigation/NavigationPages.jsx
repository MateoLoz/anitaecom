import './styles/navigation.css'
import { ArrowIcon } from '../icons/ArrowIcon'
import { useProducts } from '../hooks/useProducts'
export const NavigationPages = () => {
const {cambiarPagina,currenntPage} = useProducts()
    return(
        <>
        <div className="navigation-container">
            <button className="navigation-btn" onClick={()=>cambiarPagina(currenntPage - 1)}> <ArrowIcon  prop={'rotate'}/> </button>
            <h3 className="current-page">{currenntPage}</h3>
            <button className="navigation-btn" onClick={()=>cambiarPagina(currenntPage + 1)}> <ArrowIcon/> </button>
        </div>
        </>
    )
}