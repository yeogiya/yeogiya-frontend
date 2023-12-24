import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useToken } from "@/features/hooks/useToken";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { PATH } from "./routes";
import { useReissueToken } from "@/features/hooks/queries/useReissueToken";

const ProtectRoute = () => {
  const { navigate } = usePageNavigation();
  const queryClient = useQueryClient();
  const { accessToken, resetToken } = useToken();
  const { mutateSendTokenReissue } = useReissueToken();

  const resetAccessToken = () => {
    resetToken();

    window.location.href = PATH.HOME;
  };

  const onError = async (errorResponse: unknown) => {
    if (!(errorResponse instanceof Response)) {
      return;
    }

    const { status } = errorResponse;

    if (status === 403) {
      const data = await errorResponse.json();

      if (data.result === 100009) {
        mutateSendTokenReissue();
        return;
      }

      resetAccessToken();
    }
  };

  queryClient.setDefaultOptions({
    queries: {
      retry: false,
    },
    mutations: {
      onError,
    },
  });

  useEffect(() => {
    if (!accessToken) {
      resetToken();
      navigate(PATH.HOME);
    }
  }, []);

  return <Outlet />;
};

export default ProtectRoute;
