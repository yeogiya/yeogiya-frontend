import Button, { ButtonProps } from "@/components/@common/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import GoogleLogo from "@/assets/GoogleLogo";
import IconButton from "@/components/IconButton";
import InputUser from "@/components/@common/InputUser";
import KakaoLogo from "@/assets/KakaoLogo";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface LoginProps {
  id: string;
  password: string;
}

const LoginPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginProps>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    const { id, password } = { ...data };
    console.log(id, password);
  };

  return (
    <Layout>
      <Title as="h1">로그인</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="id"
          render={({ field: { onChange, value } }) => {
            return (
              <InputUser
                type="text"
                labelText="아이디"
                placeholder="아이디를 입력해주세요"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
              />
            );
          }}
        />
        {errors.id && <span>This field is required</span>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <InputUser
                type="password"
                labelText="비밀번호"
                placeholder="비밀번호를 입력해주세요"
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
              />
            );
          }}
        />
        <LoginButton
          type="submit"
          text="로그인"
          background="#614AD3"
          justifyContent="center"
        />
      </form>

      <ButtonContainer>
        <LinkText to="/join" text="회원가입" />
        <ButtonWrapper>
          <LinkText to="/find/id" text="아이디 찾기" />
          <span>/</span>
          <LinkText to="/find/pw" text="비밀번호 찾기" />
        </ButtonWrapper>
      </ButtonContainer>
      <IconButton
        type="submit"
        text="Google로 로그인"
        background="#fff"
        border="1px solid #CCC;"
        icon={<GoogleLogo />}
      />
      <IconButton
        type="submit"
        text="카카오로 로그인"
        background="#FEE500"
        icon={<KakaoLogo />}
      />
    </Layout>
  );
};

export default LoginPage;

const LoginButton = styled(Button)<ButtonProps>`
  margin-top: 20px;
  padding: 13px 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 3px;

  span {
    color: ${theme.color.black50};
    font-size: 14px;
  }
`;
