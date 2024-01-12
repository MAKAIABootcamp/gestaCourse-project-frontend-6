import { createUserWithEmailAndPassword, updateProfile ,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth, firestore } from "../../firebase/firebaseConfig";
import { setAuthenticated, setError, setUser } from "./userSlice";
import { createUserInCollection, getUserFromCollection, loginFromFirestore, updateProfileInFirestore } from "../../services/useServices";
import { collection, doc, setDoc } from "@firebase/firestore";

export const createAnAccountAsync = (newUser) => async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      await updateProfile(auth.currentUser, {
        displayName: newUser.name,
      });
      dispatch(
        setUser({
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          accessToken: user.accessToken,
          telefono: newUser.telefono,
          type_id: newUser.cc,
          id_number: newUser.id,
        })
      );
      dispatch(setAuthenticated(true));
      dispatch(setError(false));
      await createUserInCollection(user.uid, {
        name: newUser.nombre,
        lastname: newUser.apellidos,
        email: user.email,
        accessToken: user.accessToken,
        telefono: newUser.telefono,
        type_id: newUser.cc,
        id_number: newUser.id,
      });

    } catch (error) {
      console.warn(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
export  const loginWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    return  async (dispatch) => {
    try {
      const userCredencial = await signInWithPopup(auth, provider)
      const userLogged = await loginFromFirestore(userCredencial.user)
      dispatch(setAuthenticated(true))
      dispatch(setUser(userLogged))
    } catch (error) {
        console.log(error);
        dispatch(setError({error: true , code: error.code , message: error.message}));
    }
}
}

export const loginWithEmailAndPassword = (email,password) => async (dispatch) => {
    try {
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        const userLogged = await getUserFromCollection(user.uid)

        if (userLogged) {
          dispatch(setAuthenticated(true))
          dispatch(setUser({ email: userLogged.email, id: userLogged.id, name: userLogged.name, accessToken: userLogged.accessToken, id_number: userLogged.id_number, telefono: userLogged.telefono, type_id: userLogged.type_id,lastname: userLogged.lastname, address: userLogged.address }))
          dispatch(setError(false))
        } else {
          dispatch(setAuthenticated(false))
          dispatch(
            setError({ error: true })
          )
        }
    } catch (error) {
        console.log(error);
        dispatch(setError({error: true , code: error.code , message: error.message}));
    }
}

export const logoutAsync = () => {
  return async dispatch => {
    try {
      await signOut(auth);
      dispatch(setAuthenticated(false));
      dispatch(setUser(null));
      dispatch(setError(null));
      sessionStorage.clear();
    } catch (error) {
      console.error(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const updateUserAsync = (user) => {
  return async dispatch => {
    try {
      dispatch(setUser(user));
      dispatch(setError(null));
    } catch (error) {
      console.error(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const updateUserDataAsync = (user) => {
  return async dispatch => {
    try {
      await updateProfileInFirestore(user.id, user);
      dispatch(setUser(user));
      dispatch(setError(null));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}