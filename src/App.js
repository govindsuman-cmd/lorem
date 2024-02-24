import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
   <>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signin/>}/>
    </Routes>
   </>
  );
}

export default App;
