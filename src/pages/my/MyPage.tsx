import Layout from "@/components/@common/Layout";
import theme from "@/styles/theme";
import InputNickname from "../join/components/InputNickname";
import useMyForm from "@/features/hooks/useMyForm";
import { useForm } from "react-hook-form";
import InputUser from "@/components/@common/InputUser";
import SubmitButton from "@/components/SubmitButton";
import { JoinProps } from "../join/JoinPage";
import styled from "@emotion/styled";
import DefaultButton from "@/components/@common/DefaultButton";
import InputProfile from "./components/InputProfile";

export interface MyProps {
  nickname: string;
}

const MyPage = () => {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
    control,
  } = useForm<Pick<JoinProps, "nickname">>({
    mode: "onBlur",
    defaultValues: {
      nickname: "",
    },
  });

  const { nickname, nicknameState } = useMyForm(control);

  return (
    <Layout
      maxWidth="328px"
      css={{ height: "100%", width: "100%" }}
      paddingTop="80px"
      backgroundColor={`${theme.color.white15}`}
    >
      <InputProfile />
      <InputNickname nickname={nickname} nicknameState={nicknameState} />
      <InputUser labelText="이메일" value={"ABCDEFG2@gmail.com"} disabled />
      <InputUser labelText="아이디" value={"ididid"} disabled />
      <SubmitButton
        type="submit"
        text="완료"
        isValid={isDirty && isValid}
        css={{ marginTop: "28px" }}
      />
      <Button text="비밀번호 변경" />
      <Button text="회원탈퇴" />
    </Layout>
  );
};

export default MyPage;

const Button = styled(DefaultButton)`
  color: ${theme.color.black};
  font-weight: 400;
  padding: 0;
  margin-top: 24px;

  :last-child {
    color: ${theme.color.black50};
  }
`;
