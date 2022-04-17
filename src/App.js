import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './shared/Header/Header'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Footer from './shared/Footer/Footer'

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App