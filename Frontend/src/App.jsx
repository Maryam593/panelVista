import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Authentication/Login'
import SignUp from './Pages/Authentication/SignUp'
import DashBoard from './Components/DashBoard/DashBoard'
import Layout from './Layout/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/o/Auth/user/login' element = {<Login/>}/>
        <Route path='/o/auth/user/sign-up' element = {<SignUp/>}/>
        <Route path='/user/dashboard' element = {<Layout><DashBoard/></Layout>}/>
      </Routes>
    </>
  )
}

export default App
