import { getLocationSearchList } from "@/apis/search";
import { search } from "@/constants/queryKey";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface useLocationSearchProps {
  status: string;
  body: {
    pageToken: string;
    places: {
      placeName: string;
      address: string;
      googleRating: number;
      googlePlaceId: string;
    }[];
  };
}

export const useLocationSearch = (
  keyword: string,
  options?: UseQueryOptions<useLocationSearchProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: search.result(keyword),
    queryFn: () => getLocationSearchList(keyword),
    ...options,
  });
  return { data };
};
