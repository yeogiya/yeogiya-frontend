import { updateMyPwProps } from "@/pages/my/password/UpdateMyPwPage";
import { Control, useController } from "react-hook-form";

const useUpdateMyPw = (control: Control<updateMyPwProps>) => {
  const { field: newPassword, fieldState: newPasswordState } = useController({
    name: "newPassword",
    control,
    rules: {
      required: "새로운 비밀번호를 입력해주세요.",
    },
  });

  const { field: confirmNewPassword, fieldState: confirmNewPasswordState } =
    useController({
      name: "confirmNewPassword",
      control,
      rules: {
        required: "새로운 비밀번호를 한번 더 입력해주세요.",
        validate: (value) => {
          if (value !== newPassword.value)
            return "비밀번호가 일치하지 않습니다.";
        },
      },
    });

  return {
    newPassword,
    newPasswordState,
    confirmNewPassword,
    confirmNewPasswordState,
  };
};

export default useUpdateMyPw;
