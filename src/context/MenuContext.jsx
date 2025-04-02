import { createContext } from "react";
import { useState } from "react";


export const MenuContext = createContext()

export function MenuProvider  ({children})  {

        const [menu,setmenu] = useState(false)
    
        const updatemenu = () => {
            setmenu(!menu)
        }
    


    return(
        <MenuContext.Provider value={{
            menu,
            updatemenu
        }}>
            {children}
        </MenuContext.Provider>
    )
}

