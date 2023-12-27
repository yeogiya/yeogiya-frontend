import { SubmitHandler, useForm } from "react-hook-form";
import InputEmail from "./components/InputEmail";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import { PATH } from "@/utils/routes";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import { getFindId } from "@/apis/user";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useState } from "react";
import { FindIdResProps } from "@/types/users";

export interface FindIdProps {
  email: string;
}

const FindIdPage = () => {
  const [findId, setFindId] = useState<string>("");
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
    setError,
  } = useForm<FindIdProps>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FindIdProps> = async (data) => {
    const response = await getFindId(data.email);
    const { body } = response as FindIdResProps;

    setFindId(body.id);

    if (!findId)
      return setError("email", {
        message: "이메일이 일치하는 계정이 없습니다.",
      });
  };

  return (
    <Layout css={{ rowGap: "14px" }} maxWidth="328px">
      <Title as="h2">아이디 찾기</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail
          control={control}
          setFindId={setFindId}
          findId={findId}
          isValid={isValid}
        />
        <SubmitButton
          type="submit"
          text="이메일로 찾기"
          isValid={isDirty && isValid}
          css={{ marginTop: "45px" }}
        />
        <LinkText
          to={PATH.FIND_PW}
          text="비밀번호 찾으러 가기"
          color={theme.color.black50}
        />
      </Form>
    </Layout>
  );
};

export default FindIdPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    + button {
      margin-top: 55px;
    }
  }

  p {
    + button {
      margin-top: 30px;
    }
  }
`;
