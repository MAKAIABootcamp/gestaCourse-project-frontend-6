import { createSlice } from '@reduxjs/toolkit';

const enrollmentSlice = createSlice({
    name: 'enrollment',
    initialState: {
        enrollments: [],
        error: null,
        students: [{Id_student:"",id:"",state:""}],
        studentsInfo: []
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
        },
        getStudents: (state, action) => {
            const searchId = action.payload;
            const studentsFound = state.enrollments.filter((item) => item.Id_course === searchId);
            state.students = studentsFound;
            state.error = studentsFound ? null : 'No tiene estudiantes';
        },
        setStudents: (state, action) => {
            state.students = action.payload;
        },
        setStudentsInfo: (state, action) => {
            state.studentsInfo = action.payload;
        },
    }
})

export const { setEnrollments, setError, addEnrollment, updateEnrollment, deleteEnrollment, getStudents, setStudents, setStudentsInfo } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;