import React from "react";
import { Link } from "react-router-dom";
import useDinosaur from "../hooks/useDinosaur.ts";

export default function Dinosaur(): React.JSX.Element {
  const { data, isLoading, isError, error } = useDinosaur();

  if (isLoading) {
    return <div>Loading...</div>;
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
    <>
      <div>
        <h1 class="h1">{data.name}</h1>
        <p>{data.description}</p>
      </div>
      <Link to="/">
      <button type="button" class="btn btn-primary text-white">
        <i class="bi bi-arrow-left-short"></i> Back to all dinosaurs
      </button>
      </Link>
    </>
  );
}
