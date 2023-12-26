import { getLocationSearchList } from "@/apis/search";
import { getUserInfo } from "@/apis/user";
import { search, users } from "@/constants/queryKey";
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
    queryKey: (keyword: string) => search.search(keyword),
    queryFn: () => getLocationSearchList(keyword),
    ...options,
  });
  return { data };
};
