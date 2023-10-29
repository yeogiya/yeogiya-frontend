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
import InputUser, { InputUserProps } from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import ValidateMessage from "@/components/ValidateMessage";
import styled from "@emotion/styled";
import { checkEmailApi } from "@/apis/user";
import useJoinForm from "@/features/hooks/useJoinForm";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import theme from "@/styles/theme";

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
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");
  const [emailVerification, setEmailVerification] = useState<boolean>(false);
  const [idVerification, setIdVerification] = useState<boolean>(false);
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);
  const [idActive, setIdActive] = useState<boolean>(false);
  const [uncheckedEmail, setUncheckedEmail] = useState<string | null>(null);
  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
    setError,
    trigger,
    control,
    register,
  } = useForm<JoinProps>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      id: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    email,
    emailState,
    // id,
    // idState,
    // nickname,
    // nicknameState,
    // password,
    // passwordState,
    // confirmPassword,
    // confirmPasswordState,
  } = useJoinForm(control);

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    console.log(data);
  };

  const watchEmail = watch("email");

  // const checkDuplicateEmail = checkEmailApi(uncheckedEmail);

  // const handleVerifyEmail = async () => {
  //   try {
  //     const res = await axios.get("/mock/check-email", {
  //       params: {
  //         email: email.value,
  //       },
  //     });
  //     if (res.data.body.duplicated) {
  //       return setError("email", {
  //         type: "required",
  //         message: "이미 가입된 이메일입니다.",
  //       });
  //     }
  //     return setEmailVerification(true);
  //   } catch (err) {}
  // };
  const handleVerifyEmail = async () => {
    const checkBefore = await trigger("email");
    if (!checkBefore) return;

    try {
      const res = await axios.get("/mock/check-email", {
        params: {
          email: email.value,
        },
      });
      if (res.data.body.duplicated) {
        return setError("email", { message: "중복입니다" });
      } else {
        setEmailVerification(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (!!email.value && !emailVerification)
  //     return setError("email", { message: "중복확인꼬" });
  // }, [email.value, emailVerification, setError]);

  // const handleCheckEmail = (type: "email" | "id") => {
  //   const id = getValues("id");
  //   const {
  //     body: { duplicated },
  //   } = checkDuplicateEmail?.data;
  //   console.log(111);

  //   if (type === "email") {
  //     if (!uncheckedEmail)
  //       return setError("email", {
  //         message: `이메일을 입력해주세요`,
  //       });

  //     if (uncheckedEmail) {
  //       if (duplicated) {
  //         return setError("confirmEmail", {
  //           message: `이미 가입된 이메일입니다`,
  //         });
  //       }
  //       if (!duplicated) {
  //         console.log(222);
  //       }
  //     }
  //   }

  //   if (type === "id") {
  //     if (!id)
  //       return setError("id", {
  //         message: "아이디를 입력해주세요.",
  //       });
  //     if (id === "aa")
  //       return setError("id", {
  //         message: "이미 사용 중인 아이디입니다",
  //       });
  //     if (id !== "aa") {
  //       setError("id", {
  //         message: `사용 가능한 아이디입니다`,
  //       });
  //       setIdVerification(true);
  //     }
  //     return clearErrors("id");
  //   }
  // };

  useEffect(() => {
    if (!emailVerification)
      return setError("email", { message: "중복 확인을 해주세요." });
  }, [setError, emailVerification, watchEmail]);

  return (
    <Layout css={{ rowGap: "14px" }}>
      <Title as="h1">회원가입</Title>
      <Form onClick={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputWrapper>
            <InputUser
              {...email}
              type="text"
              labelText="이메일"
              onFocus={() => setIsEmailActive(true)}
              isActive={isEmailActive}
              onChange={(e) => {
                setEmailVerification(false);
                email.onChange(e);
              }}
            />
            <CheckButton
              onClick={handleVerifyEmail}
              type="button"
              text="중복체크"
              isActive={isEmailActive}
            />
          </InputWrapper>
          {
            <ValidateMessage
              color={errors.email || errors.confirmEmail ? "error" : "success"}
            >
              {
                emailState?.error?.message
                // ||(email.value && emailVerification && "사용 가능")
              }
            </ValidateMessage>
          }
          {/* <InputWrapper>
            <InputUser
              {...id}
              type="text"
              labelText="아이디"
              onChange={(e) => {
                setValue("confirmId", false, {
                  shouldValidate: true,
                });
                e.target.value && setIdActive(true);
                id.onChange(e);
              }}
              onFocus={() => setIdActive(true)}
              isActive={idActive}
              // value={value || ""}
              // onBlur={() => !value && setIdActive(false)}
            />

            <CheckButton
              onClick={() => {
                // onChange(true);
                // handleDuplicateCheck("id");
                setIdVerification(true);
              }}
              type="button"
              text="중복확인"
              isActive={idActive}
            />
          </InputWrapper>
          <ValidateMessage
            color={errors.id || errors.confirmId ? "error" : "success"}
          >
            {errors?.id?.message ||
              errors?.confirmId?.message ||
              (idVerification && "사용 가능한 아이디입니다")}
          </ValidateMessage>
          <InputUser
            {...nickname}
            type="text"
            labelText="닉네임"
            // onChange={(e) => onChange(e.target.value)}
            // value={value || ""}
            // onFocus={() => setIsNickName(true)}
            // onBlur={() => !value && setIsNickName(false)}
            // isActive={isNickName}
          />
          <ValidateMessage color={!errors.nickname ? "success" : "error"}>
            {errors?.nickname?.message}
          </ValidateMessage>
          <InputUser
            {...password}
            type={passwordType}
            labelText="비밀번호"
            // onChange={(e) => {
            //   onChange(e.target.value);
            // }}
            icon={
              <ConcealIcon
                passwordType={passwordType}
                setPasswordType={setPasswordType}
                // isActive={isPassword}
              />
            }
            // onFocus={() => setIsPassword(true)}
            // onBlur={() => !value && setIsPassword(false)}
            // isActive={isPassword}
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
          <InputUser
            {...confirmPassword}
            labelText="비밀번호 확인"
            onChange={(e) => confirmPassword.onChange(e.target.value)}
            type=""
            // value={value || ""}
            icon={
              <ConcealIcon
                confirmPassword={confirmPasswordType}
                setConfirmPassword={setConfirmPasswordType}
                // isActive={isPassWordConfirm}
              />
            }
            // onFocus={() => setIsPassWordConfirm(true)}
            // onBlur={() => !value && setIsPassWordConfirm(false)}
            // isActive={isPassWordConfirm}
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
          )}*/}
        </InputContainer>
        <SubmitButton
          type="submit"
          text="회원가입 완료"
          isValid={isDirty && isValid}
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
