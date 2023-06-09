import { createSlice } from '@reduxjs/toolkit'
import { addCollectorThunk, fetchAllCollectors, fetchCollectorByID, loginCollector } from '../thunks/collectorsThunk'

const initialState = {
  collectors: [],
  collector: {},
}

export const collectorSlice = createSlice({
  name: 'getCollectors',
  initialState,
  reducers: {
    }, 
    extraReducers(builder) {  
      builder.addCase(addCollectorThunk.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.collector = {...state.collector, ...action.payload}
      });
      builder.addCase(fetchCollectorByID.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.collector = action.payload
      });
      builder.addCase(fetchAllCollectors.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.collectors = action.payload;
      });
      builder.addCase(loginCollector.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.collector = action.payload
      })
    }
})

// Action creators are generated for each case reducer function
export const { } = collectorSlice.actions

export default collectorSlice.reducer