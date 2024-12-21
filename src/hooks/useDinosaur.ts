import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchDinosaur } from "../api/dinosaur.ts";
import { Dino } from "../types.ts";

const useDinosaur = (): UseQueryResult<Dino, Error> => {
  const { selectedDinosaur } = useParams<{ selectedDinosaur: string }>();

  return useQuery({
    queryKey: ["Dinosaur", selectedDinosaur],
    queryFn: () => {
      if (!selectedDinosaur) {
        throw new Error("Selected dinosaur name is missing.");
      }
      return fetchDinosaur(selectedDinosaur);
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!selectedDinosaur,
  });
};

export default useDinosaur;
