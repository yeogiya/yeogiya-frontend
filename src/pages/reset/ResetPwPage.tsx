import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "@/components/@common/Layout";
import Modal from "@/components/@common/Modal";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import { useModal } from "@/features/hooks/useModal";
import { useLocation } from "react-router-dom";
import InputPassword from "@/components/InputPassword";
import { updateMyPwProps } from "../my/password/UpdateMyPwPage";
import useUpdateMyPw from "@/features/hooks/useUpdateMyPw";
import { useEmailResetPw } from "@/features/hooks/queries/useEmailResetPw";

const ResetPwPage = () => {
  const {
    formState: { isDirty, isValid },
    control,
    handleSubmit,
  } = useForm<updateMyPwProps>({
    mode: "onBlur",
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const {
    newPassword,
    newPasswordState,
    confirmNewPassword,
    confirmNewPasswordState,
  } = useUpdateMyPw(control);

  const emailResetPw = useEmailResetPw();

  const { search } = useLocation();
  const passwordToken = search.replace("?", "");

  const onSubmit: SubmitHandler<updateMyPwProps> = (data) => {
    emailResetPw.mutate({
      password: data.newPassword,
      token: passwordToken,
    }),
      {
        onSuccess: () => {
          openModal();
        },
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
          password={newPassword}
          passwordState={newPasswordState}
          labelText="변경할 비밀번호
"
        />
        <InputPassword
          password={confirmNewPassword}
          passwordState={confirmNewPasswordState}
          labelText="비밀번호 확인
"
        />
        <SubmitButton
          type="submit"
          text="비밀번호 변경하기"
          isValid={isDirty && isValid}
          onClick={() => openModal()}
        />
        <Modal
          isOpen={isOpen}
          close={closeModal}
          text="비밀번호가 변경되었습니다."
        />
      </form>
    </Layout>
  );
};

export default ResetPwPage;
