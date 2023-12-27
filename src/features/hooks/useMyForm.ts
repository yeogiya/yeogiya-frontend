import { Control, useController } from "react-hook-form";
import { getCheckNickname } from "@/apis/user";
import { JoinProps } from "@/pages/join/JoinPage";
import { CheckDuplicationProps } from "@/types/users";

const useMyForm = (
  control: Control<Pick<JoinProps, "nickname" | "email" | "id">>
) => {
  const { field: nickname, fieldState: nicknameState } = useController({
    name: "nickname",
    control,
    rules: {
      required: "닉네임을 입력해주세요.",
      validate: async (value) => {
        const response = await getCheckNickname(value);
        const { body } = response as CheckDuplicationProps;
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

  return {
    nickname,
    nicknameState,
    id,
    idState,
    email,
    emailState,
  };
};

export default useMyForm;
