import { CartIcon } from "./icons/CartIcon"

export const AddToCart = () => {
    return(
        <>
        <button className="btn-container">
            <div className="btn-content">
                <CartIcon/>
                <h4>(0)</h4>
            </div>
        </button>
        </>
    )
}