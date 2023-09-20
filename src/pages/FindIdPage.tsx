import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import DefaultButton from "@/components/@common/DefaultButton";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { KeyboardEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/components/SubmitButton";

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
    <Layout>
      <Title as="h1">아이디 찾기</Title>
      <form
        onSubmit={() => handleSubmit(onSubmit)}
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
            const [activeColor, setActiveColor] = useState(
              value && `${theme.color.black}`
            );
            return (
              <>
                <InputUser
                  type="text"
                  labelText="이메일"
                  onChange={(e) => {
                    onChange(e.target.value);
                    setId("");
                  }}
                  onFocus={() => setActiveColor(`${theme.color.black90}`)}
                  activeColor={activeColor}
                  onBlur={() =>
                    !value && setActiveColor(`${theme.color.black30}`)
                  }
                />
                <ValidateMessage color="error">
                  {errors?.email?.message}
                </ValidateMessage>
                {isValid && id && <MaskingId>{maskingId(id)}</MaskingId>}
                <SubmitButton
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
                />
              </>
            );
          }}
        />
        <DefaultButton
          text="비밀번호 찾으러 가기"
          color={`${theme.color.black50}`}
          onClick={() => {}}
        />
      </form>
    </Layout>
  );
};

export default FindIdPage;

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
