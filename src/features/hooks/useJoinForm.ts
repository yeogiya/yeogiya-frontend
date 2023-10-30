import { JoinProps } from "@/pages/JoinPage";
import { Control, useController } from "react-hook-form";

const useJoinForm = (control: Control<JoinProps>) => {
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

  const { field: confirmEmail, fieldState: confirmEmailState } = useController({
    name: "confirmEmail",
    control,
    rules: {
      required: "이메일 중복 확인을 해주세요.",
    },
  });

  const { field: id, fieldState: idState } = useController({
    name: "id",
    control,
    rules: {
      required: "아이디를 입력해주세요.",
    },
  });

  const { field: confirmId, fieldState: confirmIdState } = useController({
    name: "confirmId",
    control,
    rules: {
      required: "아이디 중복 확인을 해주세요.",
    },
  });

  const { field: nickname, fieldState: nicknameState } = useController({
    name: "nickname",
    control,
    rules: {
      required: "닉네임을 입력해주세요.",
    },
  });

  const { field: password, fieldState: passwordState } = useController({
    name: "password",
    control,
    rules: {
      required: "비밀번호를 입력해주세요. (영문+숫자+특수문자 조합 8~20자)",
      validate: (value) => {
        if (!value.match(/(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/))
          return "영문+숫자+특수문자 조합 8~20자로 입력해주세요.";
      },
    },
  });
  const { field: confirmPassword, fieldState: confirmPasswordState } =
    useController({
      name: "confirmPassword",
      control,
      rules: {
        required: "비밀번호를 한번 더 입력해주세요.",
        validate: (value) => {
          return value === password.value
            ? true
            : "비밀번호가 일치하지 않습니다.";
        },
      },
    });

  return {
    email,
    emailState,
    confirmEmail,
    confirmEmailState,
    id,
    idState,
    confirmId,
    confirmIdState,
    nickname,
    nicknameState,
    password,
    passwordState,
    confirmPassword,
    confirmPasswordState,
  };
};

export default useJoinForm;
