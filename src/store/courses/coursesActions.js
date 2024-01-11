import { addDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { firestore } from "../../firebase/firebaseConfig"
import { addCourse, deleteCourse, setCourses, setError, updateCourse } from "./coursesSlice"

const productCollection = collection(firestore, 'courses')

export const getData = () => {
    return async (dispatch)=>{
        try {
            const tempArr = []
            const response = await getDocs(productCollection);
            response.forEach((doc)=>{
                tempArr.push({...doc.data(), id: doc.id})
            });
            dispatch(setCourses(tempArr))
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
              );
        }
    };
}

export const  createData = (data) => {
    return async (dispatch)=>{
        try {
            let tempObject = {...data}
            const response = await addDoc(productCollection, data);
            console.log(response);
            tempObject.id = response.id;
            dispatch(addCourse(tempObject))
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
              );
        }
    }
}

export const  updateData = (data) => {
    const documentRef = doc(productCollection, data.id); /** Referencia del documento */
    return async (dispatch)=>{
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

export const  deleteData = (id) => {
    const documentRef = doc(productCollection, id); /** Referencia del documento */
    return async (dispatch)=>{
        try {
            dispatch(deleteCourse(id))
            await setDoc(documentRef,{});
        } catch (error) {
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
              );
        }
    }
}