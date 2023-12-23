import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { ConcealIcon } from "@/assets";
import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Modal from "@/components/@common/Modal";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import ValidateMessage from "@/components/ValidateMessage";
import { useModal } from "@/features/hooks/useModal";
import { useState } from "react";

interface ResetPwProps {
  password: string;
  confirmPassword: string;
}

const ResetPwPage = () => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("password");
  const {
    getValues,
    control,
    watch,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<ResetPwProps>({ mode: "onChange" });

  const onSubmit: SubmitHandler<ResetPwProps> = (data) => {
    console.log(data);
  };

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout maxWidth="328px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title as="h2" css={{ marginBottom: "30px" }}>
          비밀번호 재설정하기
        </Title>
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
                labelText="변경할 비밀번호"
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
        <Modal
          isOpen={isOpen}
          close={closeModal}
          text="비밀번호가 변경되었습니다."
        />
        <SubmitButton
          type="submit"
          text="비밀번호 변경하기"
          isValid={isDirty && isValid}
          onClick={() => openModal()}
        />
      </form>
    </Layout>
  );
};

export default ResetPwPage;
