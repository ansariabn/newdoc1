
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

// import React, { createContext, useState, useContext } from "react"

export const AuthContext = createContext({
    user: null,
    userLogin :(token) => {},
    userLogout :()=> {},
})
export const AuthProvider = ({Children}) =>{
    const [user, setUser] = useState(null);

    const userLogin = (token)=> {
        // const decodeUser = jwt_decode(token)
        // localStorage.setItem("userid", decodeUser.sub)
        // localStorage.setItem("userRole", decodeUser.roles)
        // localStorage.setItem("token", token)
        // setUser(decodeUser)
    }
    const userLogout = ()=> {
        localStorage.removeItem("userid")
        localStorage.removeItem("userRole")
        localStorage.removeItem("token")
        setUser(null)
    }



    return(
        <AuthContext.Provider value= {{user, userLogin, userLogout}}>
            {Children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=> {
    return useContext(AuthContext)
}