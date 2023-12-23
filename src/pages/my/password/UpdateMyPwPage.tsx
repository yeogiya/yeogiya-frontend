import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import SubmitButton from "@/components/SubmitButton";
import useUpdateMyPw from "@/features/hooks/useUpdateMyPw";
import InputPassword from "@/components/InputPassword";
import { useForm } from "react-hook-form";

export interface updateMyPwProps {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

const UpdateMyPwPage = () => {
  const {
    formState: { isDirty, isValid },
    control,
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

  return (
    <Layout maxWidth="328px">
      <Title as="h2" css={{ marginBottom: "14px" }}>
        비밀번호 변경
      </Title>
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
    </Layout>
  );
};

export default UpdateMyPwPage;
