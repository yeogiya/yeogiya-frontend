import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://13.209.150.130:8080/api/public/v1.0.0";

export const checkEmailApi = (uncheckedEmail: string) => {
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ["join", "email", "member"],
    queryFn: async () => {
      return await fetch(
        // `${BASE_URL}/members/email-exists?email=${uncheckedEmail}`
        `/mock/check-email?email=${uncheckedEmail}` // MSW
      ).then((res) => res.json());
    },
  });
  return data;
};
