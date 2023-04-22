import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import MainPage from "./components/MainPage";
import FoodItemPage from "./components/FoodItemPage";
import LikedItems from "./components/LikedItems";
import DislikedItems from "./components/DislikedItems";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<FoodItemPage />} />
      <Route path="/LikedItems" element={<LikedItems />} />
      <Route path="/DislikedItems" element={<DislikedItems />} />
    </Routes>
  );
}

export default App;
