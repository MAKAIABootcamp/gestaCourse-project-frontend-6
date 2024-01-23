import { addDoc, collection, doc,getDoc, getDocs, setDoc } from "firebase/firestore";
import { addEnrollment, deleteEnrollment, setEnrollments, setError, updateEnrollment } from "./enrollmentSlice";
import { firestore } from "../../firebase/firebaseConfig";

const enrollmentCollection = collection(firestore, 'enrollment')
const usersCollection = collection(firestore, 'users')

export const getNameStudent= (id) => {
    return async (dispatch) => {
        try {
            const response = await getDoc(usersCollection, id);
            console.log(response);
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            );
        }
    };
}

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
            dispatch(updateEnrollment(data))
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
            dispatch(deleteEnrollment(id))
            await setDoc(documentRef);
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            );
        }
    }
}