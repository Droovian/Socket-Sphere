import Home from "./home/Home"
import Login from "./pages/Login"
import SignUp from './pages/Signup'
import { Router, Routes, Route, Link, Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";

function App() {
 
  const {authUser} = useAuthContext();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-slate-50 to-slate-300">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />}/>
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> : <SignUp/>} />
      </Routes>
      <Toaster/>
    </div>  
  )
}

export default App
