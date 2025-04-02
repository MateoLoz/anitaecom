
import { useMenu } from "../hook/useWidth"
import { Modal } from "./Modal"

export const HamburgerMenu = () => {

  const {menu,updatemenu} = useMenu()
    return (
        <>
        <div className={ menu ? "open-menu menu" : "menu"} onClick={()=> updatemenu()}>
            <span className="line"></span>
            <span className="line"></span>
        </div>
       
        </>
    )
}