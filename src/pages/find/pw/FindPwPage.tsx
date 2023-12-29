import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import Modal from "@/components/@common/Modal";
import { PATH } from "@/utils/routes";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useModal } from "@/features/hooks/useModal";
import InputId from "@/components/InputId";
import useFindPwForm from "@/features/hooks/useFindPwForm";
import InputEmail from "@/components/InputEmail";
import { useFindPw } from "@/features/hooks/queries/useFindPw";
import { useNavigate } from "react-router-dom";

export interface FindPwProps {
  email: string;
  id: string;
}

const FindPwPage = () => {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<FindPwProps>({
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const { email, emailState, id, idState } = useFindPwForm(control);
  const findPwdMutation = useFindPw();

  const submitHandler: SubmitHandler<FindPwProps> = async ({ email, id }) => {
    findPwdMutation.mutate(
      { email, id },
      {
        onSuccess: () => {
          openModal();
        },
      }
    );
  };

  return (
    <Layout css={{ rowGap: "14px" }} maxWidth="328px">
      <Title as="h2">비밀번호 찾기</Title>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <InputEmail email={email} emailState={emailState} />
        <InputId id={id} idState={idState} />
        <SubmitButton
          type="submit"
          text="비밀번호 찾기"
          isValid={isDirty && isValid}
        />
      </Form>
      <Modal
        isOpen={isOpen}
        close={() => {
          closeModal;
          navigate(PATH.LOGIN);
        }}
        text="이메일로 비밀번호 변경 링크를 전송하였습니다."
      />
      <LinkText to={PATH.FIND_ID} text="아이디 찾으러 가기" />
    </Layout>
  );
};

export default FindPwPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  p {
    margin-top: -26px;

    + div {
      margin-top: -9px;
    }

    + button {
      margin-top: -5px;
    }
  }
`;

const Message = styled.p`
  font-size: 12px;
  color: ${({ color }) =>
    color === "error" ? `${theme.color.red}` : `${theme.color.black70}`};
  margin-top: 10px;
  font-style: normal;
`;
