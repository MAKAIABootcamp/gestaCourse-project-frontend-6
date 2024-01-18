import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAunthenticated: false,
        user: null,
        error: null,
        rol: null,
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
        },
        updateUser : (state, action) => {
            state.user = action.payload;
        },
        setRol : (state, action) => {
            state.rol = action.payload;
        }
    }
})

export const {setUser, setError, setAuthenticated,setRol} = userSlice.actions;
export default userSlice.reducer;