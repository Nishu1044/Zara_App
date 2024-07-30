import React, { useState } from 'react'
import { createContext } from 'react'


//c p c
// 1
export const AuthContext = createContext()


// 2
const AuthContextProvider = ({children}) => {
const [authDetails, setAuthDetails] = useState({
    isLoggedIn : false,
    token : null
})

const Login = (token) => {
  setAuthDetails({
    isLoggedIn : true,
    token: token
  })
}

const Logout = () => {
    setAuthDetails({
      isLoggedIn : false,
      token: null
    })
  }


  return (
    <>
    <AuthContext.Provider value={{authDetails,Login,Logout}}>
      {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthContextProvider