import {
  Controller,
  SubmitHandler,
  useController,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import CheckButton from "@/components/CheckButton";
import ConcealIcon from "@/assets/ConcealIcon";
import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import ValidateMessage from "@/components/ValidateMessage";
import styled from "@emotion/styled";
import { checkEmailApi } from "@/apis/user";
import useJoinForm from "@/features/hooks/useJoinForm";

export interface JoinProps {
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
  const [uncheckedEmail, setUncheckedEmail] = useState<string | null>(null);
  const {
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
    watch,
    setError,
    setValue,
    trigger,
    clearErrors,
    control,
    register,
  } = useForm<JoinProps>({
    mode: "onChange",
    defaultValues: {
      email: "",
      confirmEmail: false,
      id: "",
      confirmId: false,
      nickname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { email, emailState } = useJoinForm(control);

  // const confirmEmail = register("confirmEmail", {
  //   required: "이메일 중복 확인을 해주세요.",
  // });

  // const email = register("email", {
  //   required: "이메일을 입력해주세요.",
  //   pattern: {
  //     value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  //     message: "이메일 형식이 잘못 되었습니다.",
  //   },
  //   validate: (value) => {
  //     if (value !== watch("email")) return "이메일 중복 확인을 해주세요.";
  //     if (value && !emailVerification) return "이메일 중복 확인을 해주세요.";
  //   },
  // });

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    console.log(data);
  };

  const checkDuplicateEmail = checkEmailApi(uncheckedEmail);

  const handleVerifyEmail = () => {
    const data = checkDuplicateEmail?.data;

    setEmailVerification(true);
    setUncheckedEmail(getValues("email"));

    if (uncheckedEmail && data.body.duplicated) {
      setError("email", { message: "이미 있음" });
      console.log(errors.email?.message, "errors>>");
    }
  };

  const handleCheckEmail = (type: "email" | "id") => {
    const id = getValues("id");
    const {
      body: { duplicated },
    } = checkDuplicateEmail?.data;
    console.log(111);

    if (type === "email") {
      if (!uncheckedEmail)
        return setError("email", {
          message: `이메일을 입력해주세요`,
        });

      if (uncheckedEmail) {
        if (duplicated) {
          confirmEmail.onChange(false);
          return setError("confirmEmail", {
            message: `이미 가입된 이메일입니다`,
          });
        }
        if (!duplicated) {
          console.log(222);

          confirmEmail.onChange(true);
        }
      }
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
    <Layout css={{ rowGap: "14px" }}>
      <Title as="h1">회원가입</Title>
      <Form onClick={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputWrapper>
            <InputUser
              // {...register("email")}
              {...email}
              type="text"
              labelText="이메일"
              onFocus={() => setIsEmailActive(true)}
              isActive={isEmailActive}
              // checkDuplicateEmail={checkDuplicateEmail}
              // setError={setError}
              // onChange={(e) => email.onChange(e)}
              // inputRef={email.ref}
              onChange={(e) => {
                email.onChange(e);
                setEmailVerification(false);
              }}
            />
            <CheckButton
              // {...confirmEmail}
              onClick={handleVerifyEmail}
              type="text"
              text="중복확인"
              isActive={isEmailActive}
            />
          </InputWrapper>
          {
            <ValidateMessage
              color={errors.email || errors.confirmEmail ? "error" : "success"}
            >
              {emailState?.error?.message ||
                confirmEmailState?.error?.message ||
                (emailVerification && "사용 가능한 이메일입니다")}
            </ValidateMessage>
          }
          <InputWrapper>
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
                  <InputUser
                    control={control}
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
                  <CheckButton
                    onClick={() => {
                      onChange(true);
                      // handleDuplicateCheck("id");
                      setIdVerification(true);
                    }}
                    type="button"
                    text="중복확인"
                    isActive={idActive}
                  />
                );
              }}
            />
          </InputWrapper>
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
                  control={control}
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
                  control={control}
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
                  control={control}
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
        </InputContainer>
        <SubmitButton
          type="submit"
          text="회원가입 완료"
          isValid={isDirty && isValid}
          css={{ maxWidth: "328px", marginTop: "0" }}
        />
      </Form>
    </Layout>
  );
};

export default JoinPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  margin-right: -61px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  column-gap: 16px;

  button {
    margin-bottom: 10px;
  }
`;
