import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://13.209.150.130:8080/api/public/v1.0.0";

export const checkEmailApi = (uncheckedEmail: string) => {
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ["join", "email", uncheckedEmail],
    queryFn: async (uncheckedEmail) => {
      return await fetch(`/mock/check-email?email=${uncheckedEmail}`).then(
        (res) => res.json()
      );
    },
    enabled: !!uncheckedEmail,
  });
  return data;
};
