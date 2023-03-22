import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCart(state, action) {
      state.isCartOpen = true
    },
    closeCart(state, action) {
      state.isCartOpen = false
    },
    toggleCart(state, action) {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const { openCart, closeCart, toggleCart } = uiSlice.actions
export default uiSlice.reducer

export const selectIsCartOpen = state => state.ui.isCartOpen
