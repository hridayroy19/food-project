import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const Authcontext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

const [loading,setLoading]=useState(true)

const creatUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const sigIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// google login

const signInWithgoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}


const logOut =()=>{
    setLoading(true);
    return signOut(auth)
}

useEffect(()=>{
 const unSubcripe = onAuthStateChanged(auth,currentUser =>{
        // console.log('user in the auth',currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unSubcripe()
    }
},[])
    const authInfo = {
        user,
        creatUser,
        sigIn,
        logOut,
        signInWithgoogle,
        loading,
    }
    return (
    <Authcontext.Provider value={authInfo}>
            {
                children
            }
    </Authcontext.Provider>
    );
};

export default AuthProvider;