import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputConfirmPassword from "./components/InputConfirmPassword";
import InputId from "../../components/InputId";
import InputNickname from "../../components/InputNickname";
import InputPassword from "../../components/InputPassword";
import Layout from "@/components/@common/Layout";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import useJoinForm from "@/features/hooks/useJoinForm";
import InputEmail from "@/components/InputEmail";
import { PATH } from "@/utils/routes";
import { useJoin } from "@/features/queries/useJoin";
import usePageNavigation from "@/features/hooks/usePageNavigation";

export interface JoinProps {
  email: string;
  id: string;
  nickname: string;
  password: string;
  passwordType: string;
  confirmPassword: string;
  loginType: string;
  setPasswordType: Dispatch<SetStateAction<string>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

const JoinPage = () => {
  const { navigate } = usePageNavigation();
  const {
    handleSubmit,
    formState: { isDirty, isValid },
    control,
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

  const joinMutation = useJoin({
    onSuccess: () => {
      navigate(PATH.HOME);
    },
  });

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    joinMutation.mutate({
      email: data.email,
      id: data.id,
      nickname: data.nickname,
      password: data.password,
      loginType: "EMAIL",
    });
  };

  const {
    id,
    idState,
    email,
    emailState,
    nickname,
    nicknameState,
    password,
    passwordState,
    confirmPassword,
    confirmPasswordState,
  } = useJoinForm(control);

  return (
    <Layout css={{ rowGap: "14px" }} maxWidth="328px" paddingBottom="120px">
      <Title as="h2">회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputEmail email={email} emailState={emailState} />
          <InputId id={id} idState={idState} />
          <InputNickname nickname={nickname} nicknameState={nicknameState} />
          <InputPassword password={password} passwordState={passwordState} />
          <InputConfirmPassword
            confirmPassword={confirmPassword}
            confirmPasswordState={confirmPasswordState}
          />
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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
