import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/index.tsx";
import Dinosaur from "./pages/Dinosaur.tsx";
import "./App.css";

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:selectedDinosaur" element={<Dinosaur />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
