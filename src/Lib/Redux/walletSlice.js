import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosMBInstance from '../../utils/axiosMBInstance'

const initialState = {
  state: 'LOADING',
  data: {},
}

export const getWallet = createAsyncThunk('wallet/getWallet', async address => {
  return await axiosMBInstance.get(`/getWallet?address=${address}`)
})

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWallet.pending, (state, _action) => {
      state.state = 'LOADING'
    })
    builder.addCase(getWallet.fulfilled, (state, action) => {
      state.state = 'READY'
      state.data = action.payload.data
    })
    builder.addCase(getWallet.rejected, (state, _action) => {
      state.state = 'ERROR'
    })
  },
})

export default walletSlice.reducer
