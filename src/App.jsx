import './App.css'
import Topbar from './Topbar';
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes,Navigate } from "react-router-dom";
import About from './About';
import Tour from './Tour';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
       
        <Route path="/" element={<Topbar/>} >
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tours" element={<Tour/>} />
        </Route>
    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


