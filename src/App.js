import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Checkout from './pages/Checkout/Checkout'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import Signup from './pages/Login/Signup'
import RequireAuth from './pages/Login/RequireAuth'
import ContactUs from './pages/ContactUs/ContactUs'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service/:serviceId" element={<ServiceDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/checkout" element={<RequireAuth>
          <Checkout/>
        </RequireAuth>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App