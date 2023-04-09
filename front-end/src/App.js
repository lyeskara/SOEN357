import { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup"; 
import MainPage from "./components/MainPage";
import Settings from "./components/Settings";
function App() {
 

  return (
   <Routes>
           <Route path="/Login" element={<Login />} />
           <Route path="/Signup" element={<Signup />} />
           <Route path="/" element={<MainPage />} />
           <Route path="/settings" element={<Settings />} />

   </Routes>
  );
  
}

export default App;
