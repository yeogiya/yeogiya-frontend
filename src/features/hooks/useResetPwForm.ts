import { Control, useController } from "react-hook-form";

export interface ResetPwProps {
  passwordToken: string;
  newPassword: string;
  confirmNewPassword: string;
}

const useResetPwForm = (control: Control<ResetPwProps>) => {
  const { field: passwordToken, fieldState: passwordTokenState } =
    useController({
      name: "passwordToken",
      control,
      rules: {
        required: "이메일로 전송된 인증 번호를 입력해주세요.",
      },
    });
  const { field: newPassword, fieldState: newPasswordState } = useController({
    name: "newPassword",
    control,
    rules: {
      required: "새 비밀번호를 입력해주세요.(영문+숫자+특수문자 조합 8~20자)",
      minLength: {
        value: 8,
        message: "영문+숫자+특수문자 조합 8~20자로 입력해주세요.",
      },
      validate: (value) => {
        if (!value.match(/(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/))
          return "영문+숫자+특수문자 조합 8~20자로 입력해주세요.";
      },
    },
  });

  const { field: confirmNewPassword, fieldState: confirmNewPasswordState } =
    useController({
      name: "confirmNewPassword",
      control,
      rules: {
        required: "비밀번호를 한번 더 입력해주세요.",
        validate: (value) => {
          if (value !== newPassword.value)
            return "비밀번호가 일치하지 않습니다.";
        },
      },
    });

  return {
    passwordToken,
    passwordTokenState,
    newPassword,
    newPasswordState,
    confirmNewPassword,
    confirmNewPasswordState,
  };
};

export default useResetPwForm;
