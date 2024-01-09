import { location } from "@/constants/queryKey";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getLocationSearch } from "@/apis/search";

interface useLocationSearchProps {
  status: string;
  body: {
    places: {
      kakaoId: number;
      name: string;
      address: string;
      lat: number;
      lng: number;
      yeogiyaRating: number;
      imageUrl: string;
    }[];
    end: boolean;
  };
}

export const useLocationSearch = (
  keyword: string,
  lat: number,
  lng: number,
  page: number,
  size: number,
  options?: UseQueryOptions<useLocationSearchProps>
) => {
  const { data } = useQuery({
    queryKey: location.search(keyword, lat, lng, page, size),
    queryFn: () => getLocationSearch(keyword, lat, lng, page, size),
    ...options,
  });
  return { data };
};
