import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { addEnrollment, setEnrollments, setError } from "./enrollmentSlice";
import { firestore } from "../../firebase/firebaseConfig";
import { deleteCourse, updateCourse } from "../courses/courseSlice";

const enrollmentCollection = collection(firestore, 'enrollment')

export const getDataEnrollment = () => {
    return async (dispatch) => {
        try {
            const tempArr = []
            const response = await getDocs(enrollmentCollection);
            response.forEach((doc) => {
                tempArr.push({ ...doc.data(), id: doc.id })
            });
            dispatch(setEnrollments(tempArr))
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            );
        }
    };
}

export const createDataEnrollment = (data) => {
    return async (dispatch) => {
        try {
            let tempObject = {...data}
            const response = await addDoc(enrollmentCollection, data);
            tempObject.id = response.id;
            dispatch(addEnrollment(tempObject))
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            );
        }
    }
}

export const updateDataEnrollment = (data) => {
    const documentRef = doc(enrollmentCollection, data.id); /** Referencia del documento */
    return async (dispatch) => {
        try {
            dispatch(updateCourse(data))
            delete data.id;
            await setDoc(documentRef,data);
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            );
        }
    }
}

export const deleteDataEnrollment = (id) => {
    const documentRef = doc(enrollmentCollection, id); /** Referencia del documento */
    return async (dispatch) => {
        try {
            dispatch(deleteCourse(id))
            await setDoc(documentRef);
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            );
        }
    }
}