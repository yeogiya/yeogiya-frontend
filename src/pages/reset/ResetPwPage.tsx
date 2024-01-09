import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "@/components/@common/Layout";
import Modal from "@/components/@common/Modal";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import { useModal } from "@/features/hooks/useModal";
import { useNavigate } from "react-router-dom";
import InputPassword from "@/components/InputPassword";
import { UpdateMyPwProps } from "../my/password/UpdateMyPwPage";
import { useEmailResetPw } from "@/features/queries/useEmailResetPw";
import useResetPwForm, { ResetPwProps } from "@/features/hooks/useResetPwForm";
import { PATH } from "@/utils/routes";

const ResetPwPage = () => {
  const {
    formState: { isDirty, isValid },
    control,
    handleSubmit,
  } = useForm<ResetPwProps>({
    mode: "onBlur",
    defaultValues: {
      passwordToken: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const {
    passwordToken,
    passwordTokenState,
    newPassword,
    newPasswordState,
    confirmNewPassword,
    confirmNewPasswordState,
  } = useResetPwForm(control);

  const emailResetPw = useEmailResetPw();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UpdateMyPwProps> = (data) => {
    emailResetPw.mutate({
      password: data.newPassword,
      token: passwordToken.value,
    }),
      {
        onSuccess: () => openModal(),
      };
  };

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout maxWidth="328px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title as="h2" css={{ marginBottom: "30px" }}>
          비밀번호 재설정하기
        </Title>
        <InputPassword
          password={passwordToken}
          passwordState={passwordTokenState}
          labelText="인증번호"
        />
        <InputPassword
          password={newPassword}
          passwordState={newPasswordState}
          labelText="변경할 비밀번호"
        />
        <InputPassword
          password={confirmNewPassword}
          passwordState={confirmNewPasswordState}
          labelText="비밀번호 확인"
        />
        <SubmitButton
          type="submit"
          text="비밀번호 변경하기"
          isValid={isDirty && isValid}
          onClick={() => openModal()}
        />
        <Modal
          isOpen={isOpen}
          close={() => closeModal && navigate(PATH.LOGIN)}
          text="비밀번호가 변경되었습니다."
        />
      </form>
    </Layout>
  );
};

export default ResetPwPage;
