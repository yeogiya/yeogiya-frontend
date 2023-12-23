import { getUserInfo } from "@/apis/user";
import { users } from "@/constants/queryKey";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface userInfoProps {
  status: string;
  body: {
    email: string;
    id: string;
    nickname: string;
    profileImageUrl: string | null;
  };
}

export const useUserInfo = (
  options?: UseQueryOptions<userInfoProps, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: users.info,
    queryFn: getUserInfo,
    ...options,
  });
  return { data };
};
