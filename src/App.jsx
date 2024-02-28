import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Products from './Pages/Products'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Newcollection from './Components/Newcollection/Newcollection'




function App() {
   return (
    <>
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}/>
      <Route path='/women' element={<Shopcategory banner={women_banner} category="women" />}/>
      <Route path='/kid' element={<Shopcategory banner={kid_banner} category="kid" />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<Products/>}>
        <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      <Route path='login' element={<LoginSignup/>}/>
     </Routes>
    <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
