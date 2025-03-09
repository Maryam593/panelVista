import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id : null,
    loading :false,
    error : null
}

const profileSlice = createSlice({
    name : "profile",
    initialState,
 reducers : {
    setProfileId : (state,action) => {
        state.id = action.payload
    },
    setLoading : (state,action) => {
        state.loading = action.payload
    },
    setError : (state,action) => {
        state.error = action.payload
    }
 }
})
export const { setProfileId, setLoading, setError } = profileSlice.actions;
export default profileSlice.reducer;
