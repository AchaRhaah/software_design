import { createSlice } from '@reduxjs/toolkit'
import { addUserThunk } from '../thunks/usersThunk'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'getUsers',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    }, 
    resetUser: (state) => {
        state.user = initialState.user
    }
    }, 
    extraReducers(builder) {
      builder.addCase(addUserThunk.fulfilled, (state, action) => {
        if (action.payload && action.payload.status === 400) return

        state.user = {...state.user, ...action.payload}
      })
    }
})

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer