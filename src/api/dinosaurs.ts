"use server";
import { Dino } from "../types.ts";

export const fetchDinosaurs = async (): Promise<Dino[]> => {
  const response = await fetch(`/api/dinosaurs/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
