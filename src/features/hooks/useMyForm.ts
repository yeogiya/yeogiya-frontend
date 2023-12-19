import { Control, useController } from "react-hook-form";

import { MyProps } from "@/pages/my/MyPage";
import { checkNicknameAPI } from "@/apis/user";

const useMyForm = (control: Control<MyProps>) => {
  const { field: nickname, fieldState: nicknameState } = useController({
    name: "nickname",
    control,
    rules: {
      required: "닉네임을 입력해주세요.",
      validate: async (value) => {
        const { duplicated } = await checkNicknameAPI(value);
        if (duplicated) return "이미 사용 중인 닉네임입니다.";
      },
    },
  });

  return {
    nickname,
    nicknameState,
  };
};

export default useMyForm;
