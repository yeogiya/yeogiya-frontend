import { JoinProps } from "./../pages/JoinPage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const BASE_URL = "http://13.209.150.130:8080/api/public/v1.0.0";

// export const checkEmailApi = (uncheckedEmail: string | null) => {
//   const { error, isLoading, data, refetch } = useQuery({
//     queryKey: ["join", "email", uncheckedEmail],
//     queryFn: async () => {
//       const res = axios.get("/mock/check-email", {
//         params: {
//           email: uncheckedEmail,
//         },
//       });
//       return res;
//     },
//     enabled: !!uncheckedEmail,
//   });
//   return data;
// };

export const checkEmailDuplicate = (email: string) =>
  axios.get(`/mock/check-email?email=${email}`);

export const checkEmailApi = (email: string) => {};
