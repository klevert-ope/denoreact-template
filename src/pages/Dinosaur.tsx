import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dino } from "../types.ts";

export default function Dinosaur(): React.JSX.Element {
  const { selectedDinosaur } = useParams();
  const [dinosaur, setDinosaur] = useState<Dino>({ name: "", description: "" });

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
      const dino = (await resp.json()) as Dino;
      setDinosaur(dino);
    })();
  }, [selectedDinosaur]);

  return (
    <div>
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.description}</p>
      <Link to="/">🠠 Back to all dinosaurs</Link>
    </div>
  );
}
