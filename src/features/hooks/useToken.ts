import { TokenContext } from "@/contexts/TokenProvider";
import { useContext } from "react";

export const useToken = () => {
  const context = useContext(TokenContext);

  return context;
};
