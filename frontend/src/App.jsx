import Home from "./home/Home"
import Login from "./pages/Login"
import SignUp from './pages/Signup'
import { Router, Routes, Route, Link } from "react-router-dom"

function App() {
 

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-500 to-slate-900">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>  
  )
}

export default App
