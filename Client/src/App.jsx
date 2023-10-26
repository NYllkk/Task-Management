import './App.css'
import Header from './Components/header/Header'
import SignUp from "./Components/registration/SignUp"
import { useEffect, useState } from 'react'
import SignIn from "./Components/registration/SignIn"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './Components/pages/home/Home'
import Dashboard from './Components/pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App















{/* <input type="text" value={text} onChange={handleClick} /> */ }
{/* <SignIn /> */ }
// useEffect(()
// const [text, SetText] = useState(" ")
// useEffect(() => {
//   const id = setInterval(() => {
//     console.log("this is one ", Date.now())
//   }, 2000);sss
//   return () => {
//     clearInterval(id)
//   }
// }, [text])

// const handleClick = e => {
//   console.log(e.target.value)
//   SetText(e.target.value)
// }