import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputConfirmPassword from "./components/InputConfirmPassword";
import InputId from "../../components/InputId";
import InputNickname from "./components/InputNickname";
import InputPassword from "../../components/InputPassword";
import Layout from "@/components/@common/Layout";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import { joinAPI } from "@/apis/user";
import styled from "@emotion/styled";
import useJoinForm from "@/features/hooks/useJoinForm";
import InputEmail from "@/components/InputEmail";

export interface JoinProps {
  email: string;
  id: string;
  nickname: string;
  password: string;
  passwordType: string;
  confirmPassword: string;
  setPasswordType: Dispatch<SetStateAction<string>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

const JoinPage = () => {
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

  const onSubmit: SubmitHandler<
    Pick<JoinProps, "email" | "id" | "nickname" | "password"> & {
      loginType: string;
    }
  > = async (data) => {
    await joinAPI({
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
      <Title as="h1">회원가입</Title>
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
