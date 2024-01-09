import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import SubmitButton from "@/components/SubmitButton";
import useUpdateMyPw from "@/features/hooks/useUpdateMyPw";
import InputPassword from "@/components/InputPassword";
import { useForm } from "react-hook-form";
import { useAuthResetPw } from "@/features/queries/useAuthResetPw";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { PATH } from "@/utils/routes";

export interface UpdateMyPwProps {
  newPassword: string;
  confirmNewPassword: string;
}

export interface PostRestPwProps {
  password: string;
  token: string;
}

const UpdateMyPwPage = () => {
  const { navigate } = usePageNavigation();
  const {
    formState: { isDirty, isValid },
    control,
    handleSubmit,
  } = useForm<UpdateMyPwProps>({
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

  const resetPwMutation = useAuthResetPw();

  const onSubmit = (data: UpdateMyPwProps) => {
    resetPwMutation.mutate(
      { password: data.newPassword },
      {
        onSuccess: () => navigate(PATH.HOME),
      }
    );
  };

  return (
    <Layout maxWidth="328px">
      <Title as="h2" css={{ marginBottom: "14px" }}>
        비밀번호 변경
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputPassword
          password={newPassword}
          passwordState={newPasswordState}
          labelText="새 비밀번호"
        />
        <InputPassword
          password={confirmNewPassword}
          passwordState={confirmNewPasswordState}
          labelText="새 비밀번호 확인"
        />
        <SubmitButton type="submit" text="완료" isValid={isDirty && isValid} />
      </form>
    </Layout>
  );
};

export default UpdateMyPwPage;
