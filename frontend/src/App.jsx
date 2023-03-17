import { useState } from 'react'
import  Home from "pages/home"
import Profile from "pages/profile"
import Login from "pages/login"
import Register from "pages/register"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App(){
 return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="users/*" element={<Profile />} />
      </Routes>
    </Router>
 )
}

export default App
