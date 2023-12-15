import Button, { ButtonProps } from "@/components/@common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoogleLogo, KakaoLogo } from "@/assets";
import IconButton from "@/components/IconButton";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import { PATH } from "@/utils/routes";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { DevTool } from "@hookform/devtools";
import InputId from "../join/components/InputId";
import InputPassword from "../join/components/InputPassword";
import useLoginForm from "@/features/hooks/useLoginForm";
import { loginApi } from "@/apis/user";
import { useNavigate } from "react-router-dom";
import { JoinProps } from "../join/JoinPage";

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<Partial<JoinProps>>({
    mode: "onBlur",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const { id, idState, password, passwordState } = useLoginForm(control);

  const onSubmit: SubmitHandler<Partial<JoinProps>> = async (data) => {
    const { id, password } = { ...data };

    await loginApi({ id, password });

    navigate("/");
  };

  return (
    <Layout maxWidth="328px">
      <Title as="h1">로그인</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputId id={id} idState={idState} />
        <InputPassword password={password} passwordState={passwordState} />
        <LoginButton
          type="submit"
          text="로그인"
          background={theme.color.purple}
          justifyContent="center"
        />
        <ButtonContainer>
          <LinkText to={PATH.JOIN} text="회원가입" top={0} />
          <ButtonWrapper>
            <LinkText to={PATH.FIND_ID} text="아이디 찾기" top={0} />
            <span>/</span>
            <LinkText to={PATH.FIND_PW} text="비밀번호 찾기" top={0} />
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
      </form>
      <DevTool control={control} />
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
