import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@/components/@common/Button";
import CheckButton from "@/components/checkButton";
import { useState } from "react";
import ConcealIcon from "@/assets/ConcealIcon";

interface JoinProps {
  email: string;
  id: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

const JoinPage = () => {
  const [buttonColor, setButtonColor] = useState("#D9D9D9");
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<JoinProps>();

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    const { email, id, nickname, password, confirmPassword } = { ...data };
    setButtonColor("#614AD3");
    console.log(email, id, nickname, password, confirmPassword);
  };

  return (
    <Layout>
      <Title as="h1">회원가입</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <InputUser
                  type="text"
                  labelText="이메일"
                  onChange={(e) => onChange(e.target.value)}
                  value={value || ""}
                />
                <CheckButton type="submit" text="중복확인" />
              </>
            );
          }}
        />
        <Controller
          control={control}
          name="id"
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <InputUser
                  type="text"
                  labelText="아이디"
                  onChange={(e) => onChange(e.target.value)}
                  value={value || ""}
                />
                <CheckButton type="submit" text="중복확인" />
              </>
            );
          }}
        />
        <Controller
          control={control}
          name="nickname"
          render={({ field: { onChange, value } }) => {
            return (
              <InputUser
                type="text"
                labelText="닉네임"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            return (
              <InputUser
                type="password"
                labelText="비밀번호"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                icon={<ConcealIcon />}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => {
            return (
              <InputUser
                type="password"
                labelText="비밀번호 확인"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                icon={<ConcealIcon />}
              />
            );
          }}
          rules={{
            validate: () => {
              return getValues("password") === getValues("confirmPassword");
            },
          }}
        />
        <LoginButton
          type="submit"
          text="회원가입 완료"
          gridGap="80px"
          background={buttonColor}
          justifyContent="center"
          onChange={() => {}}
        />
      </form>
    </Layout>
  );
};

export default JoinPage;

const LoginButton = styled(Button)<ButtonProps>`
  margin-top: 20px;
  padding: 13px 18px;
`;
