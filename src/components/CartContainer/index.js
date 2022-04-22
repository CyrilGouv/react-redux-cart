import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, handleTotals } from "../../features/cart/cartSlice"
import CartItem from '../CartItem'

import './CartContainer.css'


const CartContainer = () => {
  
  const dispatch = useDispatch()
  const { cart, total } = useSelector(state => state.cart)


  useEffect(() => {
    dispatch(handleTotals())
  }, [cart])


  return (
    <section className='CartContainer'>
        

        {
          cart.length > 0 ? 
            (
              <>

                <div className="cartContainer__header">
                    <div className="cartContainer__header__items">Items</div>
                    <div className="cartContainer__header__qty">Quantity</div>
                    <div className="cartContainer__header__subtotal">Subtotal</div>
                </div>

                {
                  cart.map(item => <CartItem key={ item.id } { ...item } />)
                }
                


                <div className="cartContainer__footer">
                    <div className="cartContainer__footer__title">Total</div>
                    <div className="cartContainer__footer__total">$<span>{ total }</span></div>
                </div>
                <div className="cartContainer__clear">
                  <button onClick={ () => dispatch(clearCart()) } className="cartContainer__clear__btn">Clear cart</button>
                </div>
              </>
            )
            :
            (
              <h3 className='cartContainer__empty'>Empty</h3>
            )
        }
        
    </section>
  )
}

export default CartContainer