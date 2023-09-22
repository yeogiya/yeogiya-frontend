import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import ConcealIcon from "@/assets/ConcealIcon";
import CheckButton from "@/components/CheckButton";
import theme from "@/styles/theme";
import SubmitButton from "@/components/SubmitButton";

interface JoinProps {
  email: string;
  id: string;
  nickname: string;
  password: string;
  passwordType: string;
  confirmPassword: string;
  confirmEmail: boolean;
  confirmId: boolean;
  setPasswordType: Dispatch<SetStateAction<string>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

const JoinPage = () => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("password");
  const [emailVerification, setEmailVerification] = useState<boolean>(false);
  const [idVerification, setIdVerification] = useState<boolean>(false);
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);
  const [idActive, setIdActive] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
    watch,
    setError,
    setValue,
    clearErrors,
  } = useForm<JoinProps>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    console.log(data);
  };

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
            validate: () => {
              if (!emailVerification) return "이메일 중복 확인을 해주세요";
              return true;
            },
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <InputUser
                  type="text"
                  labelText="이메일"
                  onChange={(e) => {
                    setValue("confirmEmail", false, {
                      shouldValidate: true,
                    });
                    onChange(e.target.value);
                    e.target.value && setIsEmailActive(true);
                  }}
                  onFocus={() => setIsEmailActive(true)}
                  onBlur={() => !value && setIsEmailActive(false)}
                  isActive={isEmailActive}
                />
              </>
            );
          }}
        />
        <Controller
          control={control}
          name="confirmEmail"
          rules={{
            required: "이메일 중복 확인을 해주세요",
          }}
          render={({ field: { onChange } }) => {
            return (
              <>
                <CheckButton
                  onClick={() => {
                    handleDuplicateCheck("email");
                    setEmailVerification(true);
                    onChange(true);
                  }}
                  type="button"
                  text="중복확인"
                  isActive={isEmailActive}
                />
              </>
            );
          }}
        />
        {
          <ValidateMessage
            color={errors.email || errors.confirmEmail ? "error" : "success"}
          >
            {errors?.email?.message ||
              errors?.confirmEmail?.message ||
              (emailVerification && "사용 가능한 이메일입니다")}
          </ValidateMessage>
        }
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
            return (
              <>
                <InputUser
                  type="text"
                  labelText="아이디"
                  onChange={(e) => {
                    setValue("confirmId", false, {
                      shouldValidate: true,
                    });
                    onChange(e.target.value);
                    e.target.value && setIdActive(true);
                  }}
                  value={value || ""}
                  onFocus={() => setIdActive(true)}
                  onBlur={() => !value && setIdActive(false)}
                  isActive={idActive}
                />
              </>
            );
          }}
        />
        <Controller
          control={control}
          name="confirmId"
          rules={{
            required: "아이디 중복 확인을 해주세요",
          }}
          render={({ field: { onChange } }) => {
            return (
              <>
                <CheckButton
                  onClick={() => {
                    onChange(true);
                    handleDuplicateCheck("id");
                    setIdVerification(true);
                  }}
                  type="button"
                  text="중복확인"
                  isActive={idActive}
                />
              </>
            );
          }}
        />
        <ValidateMessage
          color={errors.id || errors.confirmId ? "error" : "success"}
        >
          {errors?.id?.message ||
            errors?.confirmId?.message ||
            (idVerification && "사용 가능한 아이디입니다")}
        </ValidateMessage>
        <Controller
          control={control}
          name="nickname"
          rules={{ required: "닉네임을 입력해주세요." }}
          render={({ field: { onChange, value } }) => {
            const [isNickName, setIsNickName] = useState(false);
            return (
              <InputUser
                type="text"
                labelText="닉네임"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                onFocus={() => setIsNickName(true)}
                onBlur={() => !value && setIsNickName(false)}
                isActive={isNickName}
              />
            );
          }}
        />
        <ValidateMessage color={!errors.nickname ? "success" : "error"}>
          {errors?.nickname?.message}
        </ValidateMessage>
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
            const [isPassword, setIsPassword] = useState(false);
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
                    isActive={isPassword}
                  />
                }
                onFocus={() => setIsPassword(true)}
                onBlur={() => !value && setIsPassword(false)}
                isActive={isPassword}
              />
            );
          }}
        />
        {errors?.password?.message ? (
          <ValidateMessage
            color={
              errors.password.message ===
              "영문+숫자+특수문자 조합 8~20자로 입력해주세요."
                ? "error"
                : "default"
            }
          >
            {errors?.password?.message}
          </ValidateMessage>
        ) : (
          watch("password") && (
            <ValidateMessage color="success">
              사용 가능한 비밀번호입니다.
            </ValidateMessage>
          )
        )}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => {
            const [isPassWordConfirm, setIsPassWordConfirm] = useState(false);
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
                    isActive={isPassWordConfirm}
                  />
                }
                onFocus={() => setIsPassWordConfirm(true)}
                onBlur={() => !value && setIsPassWordConfirm(false)}
                isActive={isPassWordConfirm}
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
          <ValidateMessage
            color={
              errors.confirmPassword.message ===
              "비밀 번호가 일치하지 않습니다."
                ? "error"
                : "default"
            }
          >
            {errors?.confirmPassword?.message}
          </ValidateMessage>
        ) : (
          watch("confirmPassword") && (
            <ValidateMessage color="success">
              비밀 번호가 일치합니다.
            </ValidateMessage>
          )
        )}
        <SubmitButton
          type="submit"
          text="회원가입 완료"
          isValid={isDirty && isValid}
        />
      </Layout>
    </form>
  );
};

export default JoinPage;

const ValidateMessage = styled.p<{ color: "default" | "success" | "error" }>`
  margin-top: 10px;
  font-size: 0.75rem;
  color: ${({ color }) =>
    color === "error"
      ? `${theme.color.red}`
      : color === "success"
      ? `${theme.color.blue}`
      : `${theme.color.black70}`};
`;
