import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import BlogIndex from "./pages/BlogIndex"
import PostPage from "./pages/PostPage"
import LoginPage from "./pages/LoginPage"
import AdminPage from "./pages/AdminPage"
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogIndex />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
      
    </>
  )
}

