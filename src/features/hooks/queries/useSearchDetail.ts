import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getSearchDetail } from "@/apis/search";

interface useSearchDetailProps {
  status: string;
  body: {
    lat: number;
    lng: number;
    category: string;
    google: object;
    naver: object;
    kakao: object;
  };
}

export const useSearchDetail = (
  placeId: string,
  keyword: string,
  options?: UseQueryOptions<useSearchDetailProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: ["rest"],
    queryFn: () => getSearchDetail(placeId, keyword),
    ...options,
  });
  return { data };
};
