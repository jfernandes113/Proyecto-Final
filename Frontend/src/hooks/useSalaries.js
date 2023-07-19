import { useQuery } from "react-query";
import { salaries } from "../services";

export const useSalaries = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["salaries"],
    queryFn: salaries.getSalaries,
  });

  return { data, isLoading };
};