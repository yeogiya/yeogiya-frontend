import { checkEmailApi, checkIdApi, checkNicknameApi } from "@/apis/user";
import { JoinProps } from "@/pages/join/JoinPage";
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
      validate: async (value) => {
        const { duplicated } = await checkEmailApi(value);
        if (duplicated) return "이미 가입된 이메일입니다.";
      },
    },
  });

  const { field: id, fieldState: idState } = useController({
    name: "id",
    control,
    rules: {
      required: "아이디를 입력해주세요.",
      validate: async (value) => {
        const { duplicated } = await checkIdApi(value);
        if (duplicated) return "이미 사용 중인 아이디입니다.";
      },
    },
  });

  const { field: nickname, fieldState: nicknameState } = useController({
    name: "nickname",
    control,
    rules: {
      required: "닉네임을 입력해주세요.",
      validate: async (value) => {
        const { duplicated } = await checkNicknameApi(value);
        if (duplicated) return "이미 사용 중인 닉네임입니다.";
      },
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
    id,
    idState,
    nickname,
    nicknameState,
    password,
    passwordState,
    confirmPassword,
    confirmPasswordState,
  };
};

export default useJoinForm;
