import { patchUserInfo } from "@/apis/user";
import { users } from "@/constants/queryKey";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { MyPageProps } from "@/pages/my/MyPage";

export interface userInfoProps {
  nickname: string;
  profileImg: File;
}

export type userInfoDataProps = Pick<MyPageProps, "nickname"> & {
  profileImg: File;
};

export const useChangeUserInfo = (
  options?: UseMutationOptions<unknown, unknown, unknown, unknown>
) => {
  const { mutate } = useMutation({
    mutationKey: users.info,
    mutationFn: async (userInfo: userInfoProps) => {
      const formData = new FormData();

      formData.append("nickname", userInfo.nickname);
      formData.append("profileImg", userInfo.profileImg);

      return patchUserInfo(formData);
    },
    ...options,
  });

  return { mutate };
};
