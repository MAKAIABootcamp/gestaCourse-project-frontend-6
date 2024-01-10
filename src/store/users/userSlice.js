import { createSlice } from "@reduxjs/toolkit";
const item = sessionStorage.getItem('isAunthenticated');

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAunthenticated:  item != null ? true : false ,
        user: null,
        error: null
    },
    reducers:{
        setUser :  (state ,action) => {
            state.user = action.payload;
        },
        setError : (state, action) => {
            state.error = action.payload;
        },
        setAuthenticated : (state, action) => {
            state.isAunthenticated = action.payload;
        }
    }
})

export const {setUser, setError, setAuthenticated} = userSlice.actions;
export default userSlice.reducer;