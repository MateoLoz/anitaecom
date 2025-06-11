import { CartSection } from "./components/CartSection"
import { LogoSection } from "./components/LogoSection"
import { NavSection } from "./components/NavSection"
import './style/navbar.css'
import { HamburgerMenu } from "./components/HamburguerMenu"
import { useMenu } from "./hook/useWidth"
import { Modal } from "./components/Modal"
import { Cart } from "../Cart/Cart"

export const NavBar = () => {
    return(
        <>
        <div className="navbar">
           <LogoSection  size={'180px'}/>
          <NavSection/>
          <CartSection/>
        </div>
        </>
    )
}



export const MobileNav = () => {
    const {menu} = useMenu()
    return (
        <>
         <div className="navbar" >
         <LogoSection size={'22px'}/>
         <CartSection/>
         <HamburgerMenu/>
         </div>
         <div>
            {menu ? <Modal/> : null}
         </div>
        </>
    )
}


export const EvalNav = () => {

 const { width } = useMenu()

    return(
    <>
      { width > 920 
      ? <NavBar/>
       : <MobileNav/>
       }
    </>
    
)
}