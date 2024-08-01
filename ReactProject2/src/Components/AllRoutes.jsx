import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
// import First from '../Pages/First'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Logout from '../Pages/Logout'
import Carousel from '../Pages/Carousel'
import PrivateRoute from '../Context/PrivateRoute'
import Men from '../Pages/Men'
import Beauty from '../Pages/Beauty'
import Women from '../Pages/Women'
import Kids from '../Pages/Kids'
import View from '../View-Card-Dele/View'
import CartView from '../Pages/CartView'


const AllRoutes = () => {
  return (
    <>
    <Routes>

    {/* <Route path='/' element={
       <First/>
    
  }/> */}

    <Route path='/' element={
        <Home/>
    
  }/>
  
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/products' element={ <Products/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/carousel' element={
      <Carousel/>
    }/>
    <Route path='/men' element={<Men/>}/>
    <Route path='/beauty' element={<Beauty/>}/>
    <Route path='/women' element={<Women/>}/>
    <Route path='/kids' element={<Kids/>}/>
    <Route path='/view/:id' element={<View/>}/>
    <Route path='/cartview' element={<CartView/>}/>
    </Routes>
    
    </>
  )
}

export default AllRoutes