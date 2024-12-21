import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchDinosaurs } from "../api/dinosaurs.ts";
import { Dino } from "../types.ts";

const useDinosaurs = (): UseQueryResult<Dino[], unknown> => {
  return useQuery<Dino[]>({
    queryKey: ["Dinosaurs"],
    queryFn: fetchDinosaurs,
    staleTime: 1000 * 60 * 5,
  });
};

export default useDinosaurs;
