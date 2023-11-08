import Button, { ButtonProps } from "@/components/@common/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { GoogleLogo, KakaoLogo } from "@/assets";

import IconButton from "@/components/IconButton";
import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import { PATH } from "@/utils/routes";
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
          background={theme.color.purple}
          justifyContent="center"
        />
      </form>

      <ButtonContainer>
        <LinkText to={PATH.JOIN} text="회원가입" marginTop={0} />
        <ButtonWrapper>
          <LinkText to={PATH.FIND_ID} text="아이디 찾기" marginTop={0} />
          <span>/</span>
          <LinkText to={PATH.FIND_PW} text="비밀번호 찾기" marginTop={0} />
        </ButtonWrapper>
      </ButtonContainer>
      <IconButton
        type="submit"
        text="Google로 로그인"
        background={theme.color.white}
        border={`1px solid ${theme.color.black35}`}
        icon={<GoogleLogo />}
      />
      <IconButton
        type="submit"
        text="카카오로 로그인"
        background={theme.color.yellow}
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
