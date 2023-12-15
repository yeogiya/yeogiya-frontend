import { JoinProps } from "@/pages/join/JoinPage";
import { Control, useController } from "react-hook-form";

const useMyPw = (control: Control<Partial<JoinProps>>) => {
  const { field: password, fieldState: passwordState } = useController({
    name: "password",
    control,
    rules: {
      required: "현재 사용하시는 비밀번호를 입력해주세요.",
    },
  });

  return {
    password,
    passwordState,
  };
};

export default useMyPw;
