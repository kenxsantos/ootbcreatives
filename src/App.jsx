import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
