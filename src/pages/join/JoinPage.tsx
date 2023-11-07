import { SubmitHandler, useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import Layout from "@/components/@common/Layout";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import { joinApi } from "@/apis/user";
import { DevTool } from "@hookform/devtools";
import InputEmail from "./components/InputEmail";
import InputId from "./components/InputId";
import InputPassword from "./components/InputPassword";
import InputNickname from "./components/InputNickname";

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
    await joinApi({
      email: data.email,
      id: data.id,
      nickname: data.nickname,
      password: data.password,
      loginType: "EMAIL",
    });
  };

  return (
    <Layout css={{ rowGap: "14px" }}>
      <Title as="h1">회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputEmail control={control} />
          <InputId control={control} />
          <InputNickname control={control} />
          <InputPassword control={control} />
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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
