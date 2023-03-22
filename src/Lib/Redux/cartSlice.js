import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      if (state.items[item.id]) {
        delete state.items[item.id]
      } else {
        state.items[item.id] = item
      }
    },
    removeToCart(state, action) {
      const id = action.payload
      if (state.items[id]) {
        delete state.items[id]
      }
    },
    clearCart(state, action) {
      state.items = {}
    },
  },
})

export const { addToCart, removeToCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const getTotalCartPrice = createSelector(
  state => state.cart.items,
  items => {
    let totalCartPrice = 0

    for (let id in items) {
      totalCartPrice += items[id].price
    }

    return totalCartPrice
  },
)
