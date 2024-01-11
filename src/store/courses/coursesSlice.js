import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        error: null,
    },
    reducers:{
        setCourses :  (state ,action) => {
            state.courses = action.payload;
        },
        setError : (state, action) => {
            state.error = action.payload;
        },
        addCourse : (state, action) => {
            state.courses.push(action.payload);
        },
        updateCourse : (state, action) => {
            state.courses = state.courses.map((course)=>course.id === action.payload.id ? {...action.payload} : course)
        },
        deleteCourse : (state, action) => {
            state.courses = state.courses.filter((course)=>course.id !== action.payload)
        }
    }
});

export const {setCourses, setError, setLoading, setCourse,addCourse,updateCourse,deleteCourse} = courseSlice.actions;
export default courseSlice.reducer;