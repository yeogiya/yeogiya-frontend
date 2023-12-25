import { Control, useController } from "react-hook-form";
import { getCheckNickname } from "@/apis/user";
import { duplicatedProps } from "./useJoinForm";
import { useUserInfo } from "./queries/useUserInfo";
import { MyPageProps } from "@/pages/my/MyPage";

const useMyForm = (control: Control<MyPageProps>) => {
  const { data: userInfo } = useUserInfo();
  const { field: nickname, fieldState: nicknameState } = useController({
    name: "nickname",
    control,
    rules: {
      required: "닉네임을 입력해주세요.",
      validate: async (value) => {
        if (userInfo.body.nickname === value) return true;
        const response = await getCheckNickname(value);
        const { body } = response as duplicatedProps;
        if (body.duplicated) return "이미 사용 중인 닉네임입니다.";
      },
    },
  });

  const { field: id, fieldState: idState } = useController({
    name: "id",
    control,
  });

  const { field: email, fieldState: emailState } = useController({
    name: "email",
    control,
  });

  const { field: profileImg, fieldState: profileImgState } = useController({
    name: "profileImg",
    control,
  });

  return {
    nickname,
    nicknameState,
    id,
    idState,
    email,
    emailState,
    profileImg,
    profileImgState,
  };
};

export default useMyForm;
