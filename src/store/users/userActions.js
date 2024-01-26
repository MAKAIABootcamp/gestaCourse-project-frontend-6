import { createUserWithEmailAndPassword, updateProfile ,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { setAuthenticated, setError, setRol, setUser } from "./userSlice";
import { createUserInCollection, getUserFromCollection, loginFromFirestore, updateProfileInFirestore } from "../../services/useServices";


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
          fullName: user.nombre,
          email: user.email,
          accessToken: user.accessToken,
          telefono: newUser.telefono,
          type_id: newUser.cc,
          id_number: newUser.id,
          photoURL: newUser.photoURL,
          rol: 'student',
        })
      );
      dispatch(setAuthenticated(true));
      dispatch(setError(false));
      dispatch(setRol('student'));
      await createUserInCollection(user.uid, {
        fullName: newUser.nombre,
        email: user.email,
        accessToken: user.accessToken,
        telefono: newUser.telefono,
        type_id: newUser.cc,
        id_number: newUser.id,
        photoURL: newUser.photoURL,
        rol: 'student',
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
      dispatch(setError(false))
      dispatch(setRol(userLogged.rol))
    } catch (error) {
        console.error(error);
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
          dispatch(setUser({ email: userLogged.email, id: userLogged.id, fullName: userLogged.fullName, accessToken: userLogged.accessToken, id_number: userLogged.id_number, telefono: userLogged.telefono, type_id: userLogged.type_id, address: userLogged.address, photoURL: userLogged.photoURL , rol: userLogged.rol }))
          dispatch(setError(false))
        } else {
          dispatch(setAuthenticated(false))
          dispatch(setRol(userLogged.rol))
          dispatch(
            setError({ error: true })
          )
        }
    } catch (error) {
        console.error(error);
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
      dispatch(setRol(null));
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
      console.error(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}