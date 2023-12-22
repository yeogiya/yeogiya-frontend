import { getCheckEmail } from "@/apis/user";
import { users } from "@/constants/queryKey";
import { JoinProps } from "@/pages/join/JoinPage";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCheckEmail = (
  options?: UseQueryOptions<unknown, Pick<JoinProps, "email">, AxiosError>
) => {
  const { data } = useQuery({
    queryKey: users.checkEmail,
    queryFn: () => getCheckEmail,
    ...options,
  });
  return { data };
};
