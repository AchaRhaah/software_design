import { createSlice } from '@reduxjs/toolkit'
import { addCustomerThunk, fetchCustomerSubscriptions, loginCustomer } from '../thunks/customerThunk'

const initialState = {
  subscriptions: [],
  customer: {},
}

export const customerSlice = createSlice({
  name: 'getCustomers',
  initialState,
  reducers: {
    }, 
    extraReducers(builder) {
      builder.addCase(addCustomerThunk.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.customer = {...state.customer, ...action.payload}
      });
      builder.addCase(fetchCustomerSubscriptions.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.subscriptions = action.payload
      });
      builder.addCase(loginCustomer.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.customer = action.payload
      })
    }
})

// Action creators are generated for each case reducer function
export const { } = customerSlice.actions

export default customerSlice.reducer