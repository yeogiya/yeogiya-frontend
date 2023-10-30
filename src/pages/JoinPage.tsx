import { SubmitHandler, useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import CheckButton from "@/components/CheckButton";
import ConcealIcon from "@/assets/ConcealIcon";
import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import ValidateMessage from "@/components/ValidateMessage";
import styled from "@emotion/styled";
import { BASE_URL } from "@/apis/user";
import useJoinForm from "@/features/hooks/useJoinForm";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

export interface JoinProps {
  email: string;
  id: string;
  nickname: string;
  password: string;
  passwordType: string;
  confirmPassword: string;
  confirmEmail: string;
  confirmId: boolean;
  setPasswordType: Dispatch<SetStateAction<string>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

const JoinPage = () => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");
  const [emailVerification, setEmailVerification] = useState<boolean>(false);
  const [idVerification, setIdVerification] = useState<boolean>(false);
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);
  const [isNickName, setIsNickName] = useState<boolean>(false);
  const [idActive, setIdActive] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPassWordConfirm, setIsPassWordConfirm] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
    setError,
    trigger,
    control,
    clearErrors,
  } = useForm<JoinProps>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      confirmEmail: "",
      id: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    email,
    emailState,
    confirmEmail,
    confirmEmailState,
    id,
    idState,
    confirmId,
    confirmIdState,
    nickname,
    // nicknameState,
    password,
    passwordState,
    confirmPassword,
    confirmPasswordState,
  } = useJoinForm(control);

  const onSubmit: SubmitHandler<JoinProps> = async (data) => {
    const res = await axios.post(`${BASE_URL}/members/sign-up`, {
      email: data.email,
      id: data.id,
      nickname: data.nickname,
      password: data.password,
      loginType: "EMAIL",
    });
    console.log(res.data);
  };

  const handleVerifyEmail = async () => {
    const checkBeforeEmail = await trigger("email");
    if (!checkBeforeEmail) return;

    if (checkBeforeEmail) {
      try {
        const res = await axios.get(`${BASE_URL}/members/email-exists`, {
          params: {
            email: email.value,
          },
        });

        if (res.data.body.duplicated) {
          confirmEmail.onChange(false);
          return setError("email", {
            type: "duplicate",
            message: "이미 가입된 이메일입니다.",
          });
        } else {
          confirmEmail.onChange(true);
          clearErrors("confirmEmail");
          setEmailVerification(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleVerifyId = async () => {
    const checkBeforeId = await trigger("id");
    if (!checkBeforeId) return;

    if (checkBeforeId) {
      try {
        const res = await axios.get(`${BASE_URL}/members/id-exists`, {
          params: {
            id: id.value,
          },
        });

        if (res.data.body.duplicated) {
          confirmId.onChange(false);
          return setError("id", {
            type: "duplicate",
            message: "이미 사용 중인 아이디입니다.",
          });
        } else {
          confirmId.onChange(true);
          clearErrors("confirmId");
          setIdVerification(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Layout css={{ rowGap: "14px" }}>
      <Title as="h1">회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputWrapper>
            <InputUser
              {...email}
              type="text"
              labelText="이메일"
              onFocus={() => setIsEmailActive(true)}
              isActive={isEmailActive}
              onChange={(e) => {
                email.onChange(e);
                trigger("confirmEmail");
                setEmailVerification(false);
                confirmEmail.onChange(false);
              }}
              onBlur={() => trigger(["email", "confirmEmail"])}
            />
            <CheckButton
              {...confirmEmail}
              onClick={handleVerifyEmail}
              type="button"
              text="중복 확인"
              isActive={isEmailActive}
            />
          </InputWrapper>
          {
            <ValidateMessage
              color={errors.email || errors.confirmEmail ? "error" : "success"}
            >
              {emailState?.error?.message ||
                confirmEmailState?.error?.message ||
                (email.value &&
                  emailVerification &&
                  "사용 가능한 이메일입니다.")}
            </ValidateMessage>
          }
          <InputWrapper>
            <InputUser
              {...id}
              type="text"
              labelText="아이디"
              onChange={(e) => {
                id.onChange(e);
                trigger("confirmId");
                setIdVerification(false);
                confirmId.onChange(false);
              }}
              onFocus={() => setIdActive(true)}
              onBlur={() => trigger(["id", "confirmId"])}
              isActive={idActive}
            />

            <CheckButton
              onClick={handleVerifyId}
              type="button"
              text="중복확인"
              isActive={idActive}
            />
          </InputWrapper>
          <ValidateMessage
            color={errors.id || errors.confirmId ? "error" : "success"}
          >
            {idState?.error?.message ||
              confirmIdState?.error?.message ||
              (id.value && idVerification && "사용 가능한 아이디입니다.")}
          </ValidateMessage>
          <InputUser
            {...nickname}
            type="text"
            labelText="닉네임"
            onChange={(e) => nickname.onChange(e)}
            onFocus={() => setIsNickName(true)}
            isActive={isNickName}
          />
          <ValidateMessage color={!errors.nickname ? "success" : "error"}>
            {errors?.nickname?.message}
          </ValidateMessage>
          <InputUser
            {...password}
            type={passwordType}
            labelText="비밀번호"
            onChange={(e) => {
              password.onChange(e);
            }}
            icon={
              <ConcealIcon
                passwordType={passwordType}
                setPasswordType={setPasswordType}
                isActive={isPassword}
              />
            }
            onFocus={() => setIsPassword(true)}
            isActive={isPassword}
          />
          {errors?.password?.message ? (
            <ValidateMessage
              color={
                passwordState.error?.message ===
                "영문+숫자+특수문자 조합 8~20자로 입력해주세요."
                  ? "error"
                  : "default"
              }
            >
              {errors?.password?.message}
            </ValidateMessage>
          ) : (
            !passwordState.error?.message &&
            watch("password") && (
              <ValidateMessage color="success">
                사용 가능한 비밀번호입니다.
              </ValidateMessage>
            )
          )}
          <InputUser
            {...confirmPassword}
            labelText="비밀번호 확인"
            onChange={(e) => confirmPassword.onChange(e.target.value)}
            type=""
            icon={
              <ConcealIcon
                confirmPassword={confirmPasswordType}
                setConfirmPassword={setConfirmPasswordType}
                isActive={isPassWordConfirm}
              />
            }
            onFocus={() => setIsPassWordConfirm(true)}
            onBlur={() => trigger("confirmPassword")}
            isActive={isPassWordConfirm}
          />
          {errors?.confirmPassword?.message ? (
            <ValidateMessage
              color={
                confirmPasswordState.error?.message ===
                "비밀 번호가 일치하지 않습니다."
                  ? "error"
                  : "default"
              }
            >
              {errors?.confirmPassword?.message}
            </ValidateMessage>
          ) : (
            !confirmPasswordState.error?.message &&
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
          isValid={isDirty && isValid && emailVerification}
          css={{ maxWidth: "328px", marginTop: "0" }}
        />
      </Form>
      <DevTool control={control} />
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
