import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: 'course', 
  initialState: {
    courses: [],
    error: null,
    searchedCourse: null,
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course)=> course.id === action.payload.id ? { ...action.payload }: course)
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(( item ) => item.id !== action.payload)
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    searchCourseById: (state, action) => {
      const searchId = action.payload;
      console.log(state.courses);
      const foundCourse = state.courses.find((course) => course.id === searchId);
      console.log(foundCourse)
      state.searchedCourse = foundCourse;
      state.error = foundCourse ? null : 'Curso no encontrado';
    },
  }
})

export const { setCourses, addCourse, updateCourse, deleteCourse, setError, searchCourseById } = courseSlice.actions

export default courseSlice.reducer