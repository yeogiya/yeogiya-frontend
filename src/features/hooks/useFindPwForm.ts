import { getCheckEmail, getCheckId } from "@/apis/user";
import { FindPwProps } from "@/pages/find/pw/FindPwPage";
import { CheckDuplicationProps } from "@/types/users";
import { Control, useController } from "react-hook-form";

const useFindPwForm = (control: Control<FindPwProps>) => {
  const { field: email, fieldState: emailState } = useController({
    name: "email",
    control,
    rules: {
      required: "이메일을 입력해주세요.",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message: "이메일 형식이 잘못 되었습니다.",
      },
      validate: async (value) => {
        const response = await getCheckEmail(value);
        const { body } = response as CheckDuplicationProps;
        if (!body.duplicated) return "해당 이메일로 가입된 계정이 없습니다.";
      },
    },
  });

  const { field: id, fieldState: idState } = useController({
    name: "id",
    control,
    rules: {
      required: "아이디를 입력해주세요.",
      validate: async (value) => {
        const response = await getCheckId(value);
        const { body } = response as CheckDuplicationProps;
        if (!body.duplicated) return "해당 아이디로 가입된 계정이 없습니다.";
      },
    },
  });

  return {
    email,
    emailState,
    id,
    idState,
  };
};

export default useFindPwForm;
