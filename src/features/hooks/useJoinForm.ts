import { Control, useController } from "react-hook-form";
import { getCheckEmail, getCheckId, getCheckNickname } from "@/apis/user";
import { JoinProps } from "@/pages/join/JoinPage";
import { CheckDuplicationProps } from "@/types/users";

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
        const response = await getCheckEmail(value);
        const { body } = response as CheckDuplicationProps;
        if (body.duplicated) return "이미 가입된 이메일입니다.";
      },
    },
  });

  const { field: id, fieldState: idState } = useController({
    name: "id",
    control,
    rules: {
      required: "아이디를 입력해주세요.",
      minLength: {
        value: 5,
        message: "최소 5자 이상 입력해주세요.",
      },
      maxLength: {
        value: 20,
        message: "최대 20자 이하 입력해주세요.",
      },
      pattern: {
        value: /^[a-z0-9_-]{5,20}$/,
        message: "영어 소문자, 숫자, 특수문자(_,-)만 사용 가능합니다.",
      },
      validate: async (value) => {
        const response = await getCheckId(value);
        const { body } = response as CheckDuplicationProps;

        if (body.duplicated) return "이미 사용 중인 아이디입니다.";
      },
    },
  });

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
