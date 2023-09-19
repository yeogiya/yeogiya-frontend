import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import BasicButton from "@/components/BasicButton";
import styled from "@emotion/styled";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FindIdProps {
  email: string;
  findWithEmail: boolean;
}

const FindIdPage = () => {
  const navigate = useNavigate();
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

  const onSubmit: SubmitHandler<FindIdProps> = (data) => {
    console.log(data);
  };

  const maskingId = (id) => {
    if (id.length <= 2) return id.replace(id.substring(0, 1), "*");

    return (
      id[0] + id[1] + id[2] + "*".repeat(id.substring(1, id.length - 3).length)
    );
  };

  return (
    <Layout>
      <Title as="h1">아이디 찾기</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
          }}
          render={({ field: { onChange, value } }) => {
            const [activeColor, setActiveColor] = useState(value && "#000");
            return (
              <>
                <InputUser
                  type="text"
                  labelText="이메일"
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  onFocus={() => setActiveColor("#000")}
                  activeColor={activeColor}
                  onBlur={() => !value && setActiveColor("#D9D9D9")}
                />
                <ValidateMessage color="error">
                  {errors?.email?.message}
                </ValidateMessage>
                {value && id === value && (
                  <MaskingId>{maskingId(id)}</MaskingId>
                )}
                <BasicButton
                  type="button"
                  text="이메일로 찾기"
                  gridGap="80px"
                  background={!isValid ? "#d7d7d7" : "#614AD3"}
                  justifyContent="center"
                  onClick={() => {
                    const uncheckedEmail = getValues("email");
                    if (uncheckedEmail === "aaa@aaa.aaa") {
                      return setError("email", {
                        message: "이메일이 일치하는 계정이 없습니다.",
                      });
                    }
                    setValue("email", value, { shouldDirty: true });
                    setId(uncheckedEmail);
                  }}
                />
              </>
            );
          }}
        />
        <BasicButton
          type="button"
          text="비밀번호 찾으러 가기"
          gridGap="80px"
          color="#747474"
          justifyContent="center"
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
  background: #d9d9d9;
  padding: 28px 128px;
`;

const ValidateMessage = styled.p<{ color: "error" }>`
  margin-top: 10px;
  font-size: 0.75rem;
  color: ${({ color }) => (color === "error" ? "#D93F2E" : "#868686")};
`;
