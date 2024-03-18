import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export const Authcontext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser]= useState(null)
    const [ loading , setLoading] = useState(true)
  
// create user fast time
const crateUser =(email, password)=>{
 setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)

}
// login 
 const login = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
 }


useEffect(()=>{
    const xyz = onAuthStateChanged( auth , currentUser=>{
        setUser(currentUser)
        console.log("current user", currentUser);
        setLoading(false)
    })
    return () => {
        xyz();
    }
},[])


    const authInfo ={
      user,
      loading,
      crateUser,
      login
    }

    return (
        <Authcontext.Provider value={authInfo}> 
                  {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;