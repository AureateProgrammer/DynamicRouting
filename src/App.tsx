import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import BlogIndex from "./pages/BlogIndex"
import PostPage from "./pages/PostPage"
import LoginPage from "./pages/LoginPage"
import AdminPage from "./pages/AdminPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
