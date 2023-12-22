import { TOKEN } from "@/constants/token";
import { createContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface TokenContextProps {
  accessToken: string;
  refreshToken: string;
  updateToken: (accessToken: string, refreshToken: string) => void;
  resetToken: () => void;
}

export const TokenContext = createContext<TokenContextProps>(
  {} as TokenContextProps
);

export const TokenProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem(TOKEN.ACCESS_TOKEN) || ""
  );
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem(TOKEN.REFRESH_TOKEN) || ""
  );

  const updateToken = (accessToken: string, refreshToken: string) => {
    setAccessToken(() => accessToken || "");
    setRefreshToken(() => refreshToken || "");
    localStorage.setItem(TOKEN.ACCESS_TOKEN, accessToken);
    localStorage.setItem(TOKEN.REFRESH_TOKEN, refreshToken);
  };

  const resetToken = () => {
    setAccessToken(() => "");
    setRefreshToken(() => "");
    localStorage.removeItem(TOKEN.ACCESS_TOKEN);
    localStorage.removeItem(TOKEN.REFRESH_TOKEN);
  };

  const value = { accessToken, refreshToken, updateToken, resetToken } as const;

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};
