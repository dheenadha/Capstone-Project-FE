import './App.css'
import "./index.css"
import Topbar from './Topbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
       
        <Route element={<Topbar/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tours" element={<Tour/>} />
        </Route>
    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


