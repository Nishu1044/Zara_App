import React from 'react'
import { AuthContext } from './AuthContextProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  
 const {authDetails} = useContext(AuthContext)
  
   if(!authDetails.isLoggedIn){
    return <Navigate to='/login'/>
   }

  return children
}

export default PrivateRoute