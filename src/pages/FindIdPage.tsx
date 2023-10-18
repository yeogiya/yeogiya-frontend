import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { KeyboardEvent, useState } from "react";

import DefaultButton from "@/components/@common/DefaultButton";
import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import LinkText from "@/components/@common/LinkText";
import { PATH } from "@/utils/routes";
import SubmitButton from "@/components/SubmitButton";
import Title from "@/components/@common/Title";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface FindIdProps {
  email: string;
}

const FindIdPage = () => {
  const [id, setId] = useState<string>("");
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
    setValue,
  } = useForm<FindIdProps>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FindIdProps> = (data: FindIdProps) => {
    console.log(data);
  };

  const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const maskingId = (id: string) => {
    if (id.length <= 2) return id.replace(id.substring(0, 1), "*");

    return (
      id[0] + id[1] + id[2] + "*".repeat(id.substring(1, id.length - 3).length)
    );
  };

  return (
    <Layout css={{ rowGap: "14px" }}>
      <Title as="h1">아이디 찾기</Title>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
          }}
          render={({ field: { onChange, value } }) => {
            const [isActive, setIsActive] = useState(false);
            return (
              <>
                <InputUser
                  type="text"
                  labelText="이메일"
                  onChange={(e) => {
                    onChange(e.target.value);
                    setId("");
                  }}
                  onFocus={() => setIsActive(true)}
                  isActive={isActive}
                  onBlur={() => !value && setIsActive(false)}
                />
                {errors?.email?.message && (
                  <ValidateMessage color="error">
                    {errors?.email?.message}
                  </ValidateMessage>
                )}
                {isValid && id && <MaskingId>{maskingId(id)}</MaskingId>}
                <SubmitButton
                  type="button"
                  text="이메일로 찾기"
                  isValid={isValid}
                  onClick={() => {
                    const uncheckedEmail = getValues("email");
                    if (uncheckedEmail === "aaa@aaa.aaa") {
                      return setError("email", {
                        message: "이메일이 일치하는 계정이 없습니다.",
                      });
                    }
                    setValue("email", value, { shouldDirty: true });
                    setId(value);
                  }}
                  css={{ marginTop: "45px" }}
                />
              </>
            );
          }}
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

const MaskingId = styled.p`
  margin: 27px 0;
  border-radius: 7px;
  background: ${theme.color.black30};
  padding: 28px 128px;
`;

const ValidateMessage = styled.p<{ color: "error" }>`
  margin-top: 10px;
  font-size: 0.75rem;
  color: ${({ color }) =>
    color === "error" ? `${theme.color.red}` : `${theme.color.black70}`};
`;
