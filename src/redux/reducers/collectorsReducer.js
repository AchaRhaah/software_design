import { createSlice } from '@reduxjs/toolkit'
import { addCollectorThunk, fetchAllCollectors, fetchCollectorByID, fetchCollectorRoutes, loginCollector } from '../thunks/collectorsThunk'

const initialState = {
  collectors: [],
  collector: {},
  routes: [],
  route_ids: []
}

export const collectorSlice = createSlice({
  name: 'getCollectors',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = [...action.payload];
    }
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
      });
      builder.addCase(fetchCollectorRoutes.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.routes = action.payload.routes;
        state.route_ids = action.payload.route_ids;
      })
    }
})

// Action creators are generated for each case reducer function
export const { setRoutes } = collectorSlice.actions

export default collectorSlice.reducer