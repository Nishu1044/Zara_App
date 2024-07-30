import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
// import Carousel from './Carousel'


const Logout = () => {
  const {Logout} = useContext(AuthContext)


  return (
    <>
    
    <button style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "red",fontWeight:"bold" ,margin:"15px",marginLeft:"680px"}}
      onClick={Logout}>
      logout</button>
    {/* <Carousel /> */}
    </>
  )
}

export default Logout