"use client";
import React from "react";
import { Link } from "react-router-dom";
import useDinosaurs from "../../hooks/useDinosaurs.ts";
import { Dino } from "../../types.ts";
import "../../components/Dinosaurs/dinosaursList.css";

const Dinosaurs: React.FC = () => {
  const { data, isLoading, isError, error } = useDinosaurs();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError && error instanceof Error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {data.map((dinosaur: Dino) => (
        <Link
          to={`/${dinosaur.name.toLowerCase()}`}
          key={dinosaur.name}
          className="list"
        >
          {dinosaur.name}
        </Link>
      ))}
    </div>
  );
};

export default Dinosaurs;
