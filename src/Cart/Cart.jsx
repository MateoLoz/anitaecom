
import { RemoveIcon } from "../icons/RemoveIcon"
import { CheckOut } from "./components/CheckOut"
import { useCart } from "./hook/useCart"

import './style/cart.css'

export const Cart = () => {

  const {openCart} = useCart()


return(
    <>
    <div className="padre">
    <div className="container">
     <header className="controls">
        <span className="title">Mi carrito</span><button onClick={()=>openCart()} className="remove"><RemoveIcon width={'14px'}/></button>
     </header>
    <CheckCart/>
    </div>
    </div>
    </>
)
}


const CheckCart = () => {
  const {cart} = useCart()
  const lenght = cart.length
  return(
    <>
    {lenght > 0 
    ? <>
    <RowedCartItems/>
    <CheckOut/>
    </> : <EmptyCart/>}
    </>
  ) 
}


const RowedCartItems = () => {
  const {cart, finalprice } = useCart()



  return(
    <>
       <main className="content-cart">
       {cart.map(item => (
        <CartItem id={item.id} imagen={item.imagen} nombre={item.titulo} talle={item.talle} precio={item.precio}/>
       ))}
     </main>

     <aside className="total">
        <h2 className="total-tittle">Total:</h2> <h2 className="total-price">${finalprice}</h2>
       </aside>
    </>
  )
}


const CartItem = ({id, imagen,nombre,talle,precio }) => {
  const {removeItemCart} = useCart()
  return (
    <>
    <article className="items-in-cart" key={id}>
         <section>
            <img className="img-content" src={imagen} alt="" />
         </section>

         <section className="details">
                <h2 className="title-prod">{nombre}</h2>
                <span className="talle">Us {talle}</span>
                <span className="price">Ars: ${precio}</span>
         </section>
         <section className="delete-quantity">
          <button onClick={()=>removeItemCart(id)}><RemoveIcon width={'12px'}/></button>
         </section>
       </article>
    </>
  )
}

const EmptyCart = () => {
  return(
    <h2 className="empty-car">El carrito esta vacio!</h2>
  )
}