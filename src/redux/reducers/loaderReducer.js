import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

export const loadingSlice = createSlice({
  name: 'getLoader',
  initialState,
  reducers: {
    setLoading: (state, action) => {
        state.loading = action.payload
    }, 
}, 
})

// Action creators are generated for each case reducer function
export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer