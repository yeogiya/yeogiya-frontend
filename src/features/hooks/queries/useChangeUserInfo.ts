import { patchUserInfo } from "@/apis/user";
import { users } from "@/constants/queryKey";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { MyPageProps } from "@/pages/my/MyPage";
import { PATH } from "@/utils/routes";
import { useNavigate } from "react-router-dom";

export interface userInfoProps {
  nickname: string;
  profileImg: File | string;
}

export type userInfoDataProps = Pick<MyPageProps, "nickname"> & {
  profileImg: File;
};

export const useChangeUserInfo = () => {
  const { mutate } = useMutation({
    mutationKey: users.info,
    mutationFn: async (userInfo: userInfoProps) => {
      const { nickname, profileImg } = userInfo;

      // let formData = new FormData();
      // formData.append("nickname", nickname);
      // formData.append("profileImgUrl", profileImgUrl);

      await patchUserInfo(userInfo);
    },
  });

  return { mutate };

  // return useMutation({
  //   mutationKey: users.info,
  //   mutationFn: (body) => patchUserInfo(body),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: users.info });
  //     navigate(PATH.HOME);
  //   },
  //   ...options,
  // });
};
