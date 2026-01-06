import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password)  => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribe;
        }
    }, [])

    const updateUserProfile = profileInfo => {
      return updateProfile(auth.currentUser, profileInfo);
    }





    // Google Sign in
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo={
         user,
         loading,
         createUser,
         logIn,
         logOut,
         updateUserProfile,
         googleLogIn,

    }



  return (
    <AuthContext.Provider value={authInfo}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider