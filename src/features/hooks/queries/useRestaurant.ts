import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getRestaurant } from "@/apis/search";

export const useRestaurant = (
  options?: UseQueryOptions<unknown, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: ["rest"],
    queryFn: getRestaurant,
    ...options,
  });
  return { data };
};
