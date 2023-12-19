import { Controller, SubmitHandler, useForm } from "react-hook-form";

import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import Modal from "@/components/@common/Modal";
import { PATH } from "@/utils/routes";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useModal } from "@/features/hooks/useModal";
import { useState } from "react";

interface FindPwProps {
  email: string;
  id: string;
}

const FindPwPage = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    getValues,
    setValue,
  } = useForm<FindPwProps>({
    mode: "onChange",
  });

  const submitHandler: SubmitHandler<FindPwProps> = ({ email, id }) => {};

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout css={{ rowGap: "14px" }} maxWidth="328px">
      <Title as="h1">비밀번호 찾기</Title>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: "이메일 형식이 잘못 되었습니다.",
            },
          }}
          render={({ field: { onChange, value, onBlur } }) => {
            const [isActive, setIsActive] = useState(false);
            return (
              <>
                <InputUser
                  type="email"
                  labelText="이메일"
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  onFocus={() => setIsActive(true)}
                  isActive={isActive}
                  onBlur={() => {
                    !value && setIsActive(false);
                  }}
                />
                {errors.email?.message && (
                  <Message color="error">{errors.email?.message}</Message>
                )}
              </>
            );
          }}
        />
        <Controller
          control={control}
          name="id"
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]{4,10}$/,
              message: "아이디 입력이 잘못 되었습니다.",
            },
          }}
          render={({ field: { onChange, value } }) => {
            const [isActive, setIsActive] = useState(false);
            return (
              <>
                <InputUser
                  type="text"
                  labelText="아이디"
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  onFocus={() => setIsActive(true)}
                  isActive={isActive}
                  onBlur={() => !value && setIsActive(false)}
                />
                {errors.id?.message && (
                  <Message color="error">{errors.id?.message}</Message>
                )}
              </>
            );
          }}
        />
        <SubmitButton
          type="button"
          text="비밀번호 찾기"
          isValid={isValid}
          onClick={() => {
            const checkEmail = getValues("email");
            const checkId = getValues("id");
            if (checkEmail === "test@test.com") {
              return setError("email", {
                message: "해당 이메일로 가입된 계정이 없습니다.",
              });
            }
            setValue("email", getValues("email"), { shouldDirty: true });

            if (checkId === "test") {
              return setError("id", {
                message: "해당 아이디로 가입된 계정이 없습니다.",
              });
            }

            setValue("email", "id", {
              shouldDirty: true,
            });

            openModal();
          }}
        />
      </Form>
      <Modal
        isOpen={isOpen}
        close={closeModal}
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
