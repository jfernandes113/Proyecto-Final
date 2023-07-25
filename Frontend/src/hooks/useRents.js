import { useQuery } from "react-query";
import { rents } from "../services";

export const useRents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["rents"],
    queryFn: rents.getRents,
  });

  return { data, isLoading };
};