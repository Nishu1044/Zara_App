import React, { useContext, useState } from 'react'
import {Heading,Input,Button,VStack,Container} from '@chakra-ui/react'
import axios from 'axios'
import {AuthContext} from '../Context/AuthContextProvider'
import {Navigate} from 'react-router-dom'


const Login = () => {
const [email,setEmail] = useState("")
const [password ,setPassword] = useState("")



  const {Login,authDetails:{isLoggedIn}} = useContext(AuthContext)


  async function HandleClick(){

  try {

   let res = await axios({
    method:"post",
    url:`https://reqres.in/api/login`,
    data:{
      email,password
    }
   })
   console.log(res.data.token)
  // save this token in login 
  Login(res.data.token)
    
  } catch (error) {
   console.log(error);
  }

  }

  if(isLoggedIn){
    return <Navigate to="/" />
  }
  


  return (
   <>
   
   <Container marginTop={10} marginBottom={20}>
    <VStack spacing={10} >
    <Heading>
      <h1>Login Page</h1>
    </Heading>  

    <Input 
    placeholder='Email' 
    type='email'
    value={email}
    onChange={(e)=> {setEmail(e.target.value)}} 
    />

    <Input 
    placeholder='Password' 
    type='password'
    value={password}
    onChange={(e)=> {setPassword(e.target.value)}}
    />

    <Button 
    variant="outline" 
    color="green.400"
    onClick={HandleClick}
    >Login</Button>
</VStack>
</Container> 
   
   </>
  )
}

export default Login;