import { createSlice } from '@reduxjs/toolkit';

const enrrollmentSlice = createSlice({
    name: 'enrollment',
    initialState: {
        enrollments: [],
        error: null,
    },
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addEnrollment: (state, action) => {
            state.enrollments.push(action.payload);
        },
        updateEnrollment: (state, action) => {
            state.enrollments = state.enrollments.map((enrollment) => enrollment.id === action.payload.id ? { ...action.payload } : enrollment)
        },
        deleteEnrollment: (state, action) => {
            state.enrollments = state.enrollments.filter((enrollment) => enrollment.id !== action.payload)
        }
    }
})

export const { setEnrollments, setError, addEnrollment, updateEnrrllment, deleteEnrollment} = enrrollmentSlice.actions;
export default enrrollmentSlice.reducer;