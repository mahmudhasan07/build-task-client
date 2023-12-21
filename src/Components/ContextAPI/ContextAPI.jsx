import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from "../User/Firebase.config";

export const Context = createContext()
const ContextAPI = ({ children }) => {
    const [loading, setloading] = useState(true)
    const[user, setuser] = useState()

    const auth = getAuth(app)

    const CreateUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const SignUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const LogOut = () => {
        setloading(true)
        return signOut(auth)
    }
    const UpdateInfo = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(customar)=>{
            setuser(customar)
            setloading(false)

        })
    },[auth])

    const data = {CreateUser, SignUser, LogOut,UpdateInfo, loading, user}
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default ContextAPI;