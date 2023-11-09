import { FindIdProps } from "@/pages/find/id/FindIdPage";
import { Control, useController } from "react-hook-form";

const useFindIdForm = (control: Control<FindIdProps>) => {
  const { field: email, fieldState: emailState } = useController({
    name: "email",
    control,
    rules: {
      required: "이메일을 입력해주세요.",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message: "이메일 형식이 잘못 되었습니다.",
      },
    },
  });
  return {
    email,
    emailState,
  };
};

export default useFindIdForm;
