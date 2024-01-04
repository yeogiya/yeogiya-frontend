import { getPlaceSearchList } from "@/apis/search";
import { search } from "@/constants/queryKey";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface usePlaceSearchProps {
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

export const usePlaceSearch = (
  keyword: string,
  options?: UseQueryOptions<usePlaceSearchProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: search.result(keyword),
    queryFn: () => getPlaceSearchList(keyword),
    ...options,
  });
  return { data };
};
