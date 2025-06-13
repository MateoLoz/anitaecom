import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function useCart () {
  const {cart, setCart, size, setSize, setCartItems, cartitems, setFinalPrice, finalprice, open, setOpen} = useContext(CartContext);
  const navigate = useNavigate();

  // Función para vaciar el carrito
  const clearCart = () => {
    console.log('Iniciando clearCart');
    setCart([]);
    localStorage.removeItem('cart');
    setCartItems(0);
    setFinalPrice(0);
    localStorage.removeItem('final');
    console.log('clearCart completado');
  };

  const updateSize = (talle) => {
    setSize(talle);
    window.localStorage.setItem('talle', JSON.stringify(talle));
    return size;
  };

const updateCartCount = (operator) => {
    if(operator == '+'){
        setCartItems(()=>cartitems + 1)
        return
    }
    if(operator == '-'){
        setCartItems(()=>cartitems - 1)
        return
    }
    
}

const updateCart = async (item) => {

    if(size == 0){
        return
    }

    const newState = [
        ...cart,
        {
          ...item,
          talle: size
        }
    ];
    
    await setCart(newState);
    localStorage.setItem('cart', JSON.stringify(newState));
    updateCartCount('+');
    getFinalPrice(newState);
    
    try {
      toast.success('¡Producto agregado al carrito!');
      setTimeout(() => {
        navigate('/products');
      }, 1500); // Esperamos un poco para que se vea la notificación
      return newState;
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      toast.error('Error al agregar el producto al carrito. Por favor, intenta nuevamente.');
      return null;
    } finally {
      setSize(0);
    }
}

const removeItemCart = (id) => {
    let arr = [...cart];
    let index = arr.findIndex(item => item.id === id);
    if (index !== -1) {
      arr.splice(index, 1);
      setCart(arr);
      localStorage.setItem('cart', JSON.stringify(arr));
      getFinalPrice(arr);
      updateCartCount('-');
      toast.success('¡Producto eliminado del carrito!');
    }
}

const getFinalPrice = (state) => {
  
 if(state){
    let index =  state.length 
    let arr = structuredClone(state)
    let final = 0
   
   
    for(let i = 0 ; i < index; i++){
       let number = Number(arr[i].precio)
       final = final + number
    }
   
     window.localStorage.setItem('final',JSON.stringify(final))
      setFinalPrice(final)
 }


}



const openCart = () => {

    setOpen(!open)


    return 
}




return {updateSize,size, cartitems , updateCart , cart , finalprice , open ,openCart , removeItemCart}
}