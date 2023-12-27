import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import SubmitButton from "@/components/SubmitButton";
import useUpdateMyPw from "@/features/hooks/useUpdateMyPw";
import InputPassword from "@/components/InputPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { useResetPw } from "@/features/hooks/queries/useResetPw";
import { TOKEN } from "@/constants/token";

export interface updateMyPwProps {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface postRestPw {
  password: string;
  token: string;
}

const UpdateMyPwPage = () => {
  const {
    formState: { isDirty, isValid },
    control,
    handleSubmit,
  } = useForm<updateMyPwProps>({
    mode: "onBlur",
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const {
    password,
    passwordState,
    newPassword,
    newPasswordState,
    confirmNewPassword,
    confirmNewPasswordState,
  } = useUpdateMyPw(control);

  const resetPwMutation = useResetPw();

  const onSubmit: SubmitHandler<postRestPw> = (data) => {
    resetPwMutation.mutate({
      password: data.password,
      token: localStorage.getItem(TOKEN.ACCESS_TOKEN),
    });
  };

  return (
    <Layout maxWidth="328px">
      <Title as="h2" css={{ marginBottom: "14px" }}>
        비밀번호 변경
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputPassword
          password={password}
          passwordState={passwordState}
          labelText="현재 비밀번호"
        />
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
