import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './shared/Header/Header'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Footer from './shared/Footer/Footer'
import Checkout from './pages/Checkout/Checkout'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import Signup from './pages/Login/Signup'
import RequireAuth from './pages/Login/RequireAuth'

const App = () => {
  return (
    <>
      <Header></Header>
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
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App