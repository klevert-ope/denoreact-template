import { Dino } from "../types.ts";

export const fetchDinosaur = async (name: string): Promise<Dino[]> => {
  const response = await fetch(`/api/dinosaurs/${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch dinosaur data");
  }
  return response.json();
};
