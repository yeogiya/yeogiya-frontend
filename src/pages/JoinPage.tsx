import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@/components/@common/Button";
import { Dispatch, SetStateAction, useState } from "react";
import ConcealIcon from "@/assets/ConcealIcon";
import CheckButton from "@/components/CheckButton";

interface JoinProps {
  email: string;
  id: string;
  nickname: string;
  password: string;
  passwordType: string;
  confirmPassword: string;
  setPasswordType: Dispatch<SetStateAction<string>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

const JoinPage = () => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("password");
  const [emailVerification, setEmailVerification] = useState(false);
  const [idVerification, setIdVerification] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    watch,
    setError,
    clearErrors,
  } = useForm<JoinProps>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    console.log(data);
  };

  // console.log(Object.keys(errors), "errors");

  const handleDuplicateCheck = (type: "email" | "id") => {
    const email = watch("email");
    const id = watch("id");

    if (type === "email") {
      if (!email)
        return setError("email", {
          message: `이메일을 입력해주세요`,
        });
      if (email === "test@aa.aa") {
        return setError("email", {
          message: `이미 가입된 이메일입니다`,
        });
      }
      if (email && emailVerification) {
        setEmailVerification(true);
        setError("email", {
          message: `사용 가능한 이메일입니다`,
        });
      }
      return clearErrors("email");
    }

    if (type === "id") {
      if (!id)
        return setError("id", {
          message: "아이디를 입력해주세요.",
        });
      if (id === "aa")
        return setError("id", {
          message: "이미 사용 중인 아이디입니다",
        });
      if (id !== "aa") {
        setError("id", {
          message: `사용 가능한 아이디입니다`,
        });
        setIdVerification(true);
      }
      return clearErrors("id");
    }
  };

  return (
    // <form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Layout>
        <Title as="h1">회원가입</Title>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "이메일 형식이 잘못 되었습니다.",
            },
            // validate: () => {
            //   return !emailVerification && "이메일 중복 확인을 해주세요";
            // },
          }}
          render={({ field: { onChange, value } }) => {
            const [activeColor, setActiveColor] = useState(value && "#000");
            return (
              <>
                <InputUser
                  type="text"
                  labelText="이메일"
                  onChange={(e) => {
                    setEmailVerification(false);
                    onChange(e.target.value);
                    setActiveColor(e.target.value && "#000");
                  }}
                  onFocus={() => setActiveColor("#000")}
                  onBlur={() => !value && setActiveColor("#D9D9D9")}
                  activeColor={activeColor}
                  // value={value || ""}
                />
                <CheckButton
                  onClick={() => handleDuplicateCheck("email")}
                  type="button"
                  text="중복확인"
                  activeColor={activeColor}
                />
              </>
            );
          }}
        />
        {errors?.email?.message && (
          <ValditateMessage
            color={
              errors.email.message !== "사용 가능한 이메일입니다"
                ? "error"
                : "success"
            }
          >
            {errors?.email?.message}
          </ValditateMessage>
        )}
        <Controller
          control={control}
          name="id"
          rules={{
            required: "아이디를 입력해주세요",
            validate: () => {
              if (!idVerification) return "아이디 중복 확인을 해주세요";
              return true;
            },
          }}
          render={({ field: { onChange, value } }) => {
            const [activeColor, setActiveColor] = useState(value && "#000");
            return (
              <>
                <InputUser
                  type="text"
                  labelText="아이디"
                  onChange={(e) => {
                    setIdVerification(
                      getValues("email") !== watch("email") && false
                    );
                    onChange(e.target.value);
                    setActiveColor(e.target.value && "#000");
                  }}
                  value={value || ""}
                  onFocus={() => setActiveColor("#000")}
                  onBlur={() => !value && setActiveColor("#D9D9D9")}
                  activeColor={activeColor}
                />
                <CheckButton
                  onClick={() => handleDuplicateCheck("id")}
                  type="button"
                  text="중복확인"
                  activeColor={activeColor}
                />
              </>
            );
          }}
        />
        <ValditateMessage
          color={errors.id && idVerification ? "success" : "error"}
        >
          {/* <ValditateMessage color={errors.id && idVerification}> */}
          {errors?.id?.message}
        </ValditateMessage>
        <Controller
          control={control}
          name="nickname"
          rules={{ required: "닉네임을 입력해주세요." }}
          render={({ field: { onChange, value } }) => {
            const [activeColor, setActiveColor] = useState(value && "#000");
            return (
              <InputUser
                type="text"
                labelText="닉네임"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                onFocus={() => setActiveColor("#000")}
                onBlur={() => !value && setActiveColor("#D9D9D9")}
                activeColor={activeColor}
              />
            );
          }}
        />
        <ValditateMessage color={!errors.nickname ? "success" : "error"}>
          {errors?.nickname?.message}
        </ValditateMessage>
        <Controller
          control={control}
          name="password"
          rules={{
            required:
              "비밀번호를 입력해주세요. (영문+숫자+특수문자 조합 8~20자)",
            minLength: {
              value: 8,
              message: "영문+숫자+특수문자 조합 8~20자로 입력해주세요.",
            },
            validate: (value) => {
              if (
                !value.match(
                  /(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
                )
              )
                return "영문+숫자+특수문자 조합 8~20자로 입력해주세요.";
            },
          }}
          render={({ field: { onChange, value } }) => {
            const [activeColor, setActiveColor] = useState(value && "#000");
            return (
              <InputUser
                type={passwordType}
                labelText="비밀번호"
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                icon={
                  <ConcealIcon
                    passwordType={passwordType}
                    setPasswordType={setPasswordType}
                    activeColor={activeColor === "#000" ? "#747474" : "#d9d9d9"}
                  />
                }
                onFocus={() => setActiveColor("#000")}
                onBlur={() => !value && setActiveColor("#D9D9D9")}
                activeColor={activeColor}
              />
            );
          }}
        />
        {errors?.password?.message ? (
          <ValditateMessage
            color={
              errors.password.message ===
              "영문+숫자+특수문자 조합 8~20자로 입력해주세요."
                ? "error"
                : "default"
            }
          >
            {errors?.password?.message}
          </ValditateMessage>
        ) : (
          watch("password") && (
            <ValditateMessage color="success">
              사용 가능한 비밀번호입니다.
            </ValditateMessage>
          )
        )}

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => {
            const [activeColor, setActiveColor] = useState(value && "#000");
            return (
              <InputUser
                type={confirmPassword}
                labelText="비밀번호 확인"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                icon={
                  <ConcealIcon
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    activeColor={activeColor === "#000" ? "#747474" : "#d9d9d9"}
                  />
                }
                onFocus={() => setActiveColor("#000")}
                onBlur={() => !value && setActiveColor("#D9D9D9")}
                activeColor={activeColor}
              />
            );
          }}
          rules={{
            validate: () => {
              const password = getValues("password");
              const confirmPassword = getValues("confirmPassword");
              if (!confirmPassword) return "비밀번호를 한번 더 입력해주세요.";
              if (password !== confirmPassword)
                return "비밀 번호가 일치하지 않습니다.";
            },
          }}
        />
        {errors?.confirmPassword?.message ? (
          <ValditateMessage
            color={
              errors.confirmPassword.message ===
              "비밀 번호가 일치하지 않습니다."
                ? "error"
                : "default"
            }
          >
            {errors?.confirmPassword?.message}
          </ValditateMessage>
        ) : (
          watch("confirmPassword") && (
            <ValditateMessage color="success">
              비밀 번호가 일치합니다.
            </ValditateMessage>
          )
        )}
        <LoginButton
          type="submit"
          text="회원가입 완료"
          gridGap="80px"
          background={Object.keys(errors).length === 0 ? "#614AD3" : "#d7d7d7"}
          justifyContent="center"
        />
      </Layout>
    </form>
  );
};

export default JoinPage;

const LoginButton = styled(Button)<ButtonProps>`
  margin-top: 20px;
  padding: 13px 18px;
`;

const ValditateMessage = styled.p<{ color: "default" | "success" | "error" }>`
  margin-top: 10px;
  font-size: 0.75rem;
  color: ${({ color }) =>
    color === "error"
      ? "#D93F2E"
      : color === "success"
      ? "#1736D9"
      : "#868686"};
`;
