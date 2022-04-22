import { createSlice } from "@reduxjs/toolkit"
import { items } from '../../data'


const initialState = {
    cart: items,
    total: 0,
    amount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        reset: (state) => initialState,

        clearCart: (state) => {
            return {
                ...state,
                cart: []
            }
        },

        remove: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        },

        increase: (state, action) => {
            let temp = state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    }
                }

                return item
            })

            return {
                ...state,
                cart: temp
            }
        },

        decrease: (state, action) => {
            let temp = state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        amount: item.amount - 1
                    }
                }

                return item
            }).filter(item => item.amount !== 0)

            return {
                ...state,
                cart: temp
            }
        },

        handleTotals: (state, action) => {
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount

                return cartTotal
            }, {
                total: 0,
                amount: 0
            })

            total = parseFloat(total.toFixed(2))

            return {
                ...state,
                total,
                amount
            }
        }
    }
})

export const { reset, clearCart, remove, increase, decrease, handleTotals } = cartSlice.actions
export default cartSlice.reducer