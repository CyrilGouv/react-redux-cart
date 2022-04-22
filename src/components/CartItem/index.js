import { remove, increase, decrease } from "../../features/cart/cartSlice"
import { useDispatch } from "react-redux"

import './CartItem.css'


const CartItem = (item) => {

    const dispatch = useDispatch()

    return (
        <div className='CartItem'>
            <div className="cartItem__body">
                
                <div className='cartItem__grid' key={ item.id }>
                    <div className="cartItem__body__item">
                        <div className="item__img">
                            <img src={ item.img } alt={ item.title } />
                        </div>

                        <div className="item__desc">
                            <div className="item__desc__head">
                                <h4>{ item.title }</h4>
                                <span>${ item.price }</span>
                            </div>

                            <button onClick={ () => dispatch(remove(item.id)) } className="item__desc__remove">Remove</button>    
                        </div>
                    </div>

                            <div className="cartItem__body__qty">
                                <button onClick={ () => dispatch(decrease(item.id)) }>-</button>
                                <span>{ item.amount }</span>
                                <button onClick={ () => dispatch(increase(item.id)) }>+</button>
                            </div>

                            <div className="cartItem__body__price">
                                ${ item.price * item.amount }
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default CartItem