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
import { Link } from "react-router-dom";
import { PATH } from "@/utils/routes";
import LinkText from "@/components/@common/LinkText";

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
      <InputProfile css={{ marginBottom: "8px" }} />
      <InputNickname nickname={nickname} nicknameState={nicknameState} />
      <InputUser labelText="이메일" value={"ABCDEFG2@gmail.com"} disabled />
      <InputUser
        labelText="아이디"
        value={"ididid"}
        css={{ marginTop: "24px" }}
        disabled
      />
      <SubmitButton
        type="submit"
        text="완료"
        isValid={isDirty && isValid}
        css={{ marginTop: "24px" }}
      />
      <LinkText
        to={PATH.MY_PASSWORD}
        text="비밀번호 변경"
        fontSize={1}
        color={theme.color.black}
        css={{ marginTop: "24px" }}
      />
      <LinkText
        to={PATH.MY_PASSWORD}
        text="회원탈퇴"
        fontSize={1}
        css={{ marginTop: "24px" }}
      />
    </Layout>
  );
};

export default MyPage;
