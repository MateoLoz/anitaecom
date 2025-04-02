  import { useState,useEffect } from "react"
import { MenuContext } from "../../context/MenuContext"
import { useContext } from "react"

  export function useMenu  ()  {



    const {menu,updatemenu} = useContext(MenuContext)
    
    const [width,setwidth] = useState()

    const updatewidth = () => {
        setwidth(window.innerWidth)
    }


  

    useEffect(()=>{
      updatewidth()
        window.addEventListener('load',updatewidth, )
        window.addEventListener('resize',updatewidth)
      return () => {
        window.removeEventListener('resize',updatewidth)
        window.removeEventListener('load',updatewidth )
       
    }
    },[])

    return {width , updatemenu, menu , }
  }
 