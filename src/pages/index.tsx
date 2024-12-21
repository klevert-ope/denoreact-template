import React from "react";
import Dinosaurs from "../components/Dinosaurs/DinosoursList.tsx";

const Index: React.FC = () => {
  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <Dinosaurs />
    </main>
  );
};

export default Index;
