import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Index from "./pages/index.tsx";
import Dinosaur from "./pages/Dinosaur.tsx";
import "./App.css";

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:selectedDinosaur" element={<Dinosaur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
