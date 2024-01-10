import { createUserWithEmailAndPassword, updateProfile ,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { setAuthenticated, setError, setUser } from "./userSlice";
import { json } from "react-router-dom";
export const createAccountAsync = (newUsers) => async (dispatch) => {
    try {
        const {user} = await createUserWithEmailAndPassword(auth, newUsers.email,newUsers.password);
       await updateProfile(auth.currentUser, {
            displayName: newUsers.displayName,
            photoURL: newUsers.photoURL
        });
        dispatch(setUser({
            id: user.id,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            accessToken : user.accessToken
        }));
        dispatch(setAuthenticated(true));
    } catch (error) {
        console.warn(error);
        dispatch(setError({error: true , code: error.code , message: error.message}));
    }
}
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
        })
      );
      dispatch(setAuthenticated(true));
      dispatch(setError(false));
      sessionStorage.setItem('isAunthenticated', true);
      sessionStorage.setItem('user', {
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        accessToken: user.accessToken,
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
        const userCredencial = await signInWithPopup(auth,provider);
        dispatch(setAuthenticated(true))
        dispatch(setUser(userCredencial.user));
        sessionStorage.setItem('isAunthenticated', true);
        console.log(userCredencial.user);
        sessionStorage.setItem('user',JSON.stringify(userCredencial.user.auth));
    } catch (error) {
        console.log(error);
        dispatch(setError({error: true , code: error.code , message: error.message}));
    }
}
}

export const loginWithEmailAndPassword = (email,password) => async (dispatch) => {
    try {
        const userCredencial = await signInWithEmailAndPassword(auth,email,password);
        dispatch(setAuthenticated(true));
        dispatch(setUser(userCredencial.user));
        console.log(userCredencial.user);
        sessionStorage.setItem('isAunthenticated', true);
        sessionStorage.setItem('user',JSON.stringify(userCredencial.user.auth));
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
