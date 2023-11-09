import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import useFindIdForm from "@/features/hooks/useFindIdForm";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";

const InputEmail = ({ control, setFindId, isValid, findId }) => {
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);

  const { email, emailState } = useFindIdForm(control);

  return (
    <>
      <InputUser
        {...email}
        type="text"
        labelText="이메일"
        onFocus={() => setIsEmailActive(true)}
        isActive={isEmailActive}
        onChange={(e) => {
          email.onChange(e);
          setFindId("");
        }}
      />

      {isValid && findId ? (
        <MaskingId>{findId}</MaskingId>
      ) : (
        <ValidateMessage color="error">
          {emailState?.error?.message}
        </ValidateMessage>
      )}
    </>
  );
};

export default InputEmail;

const MaskingId = styled.p`
  margin: 27px 0;
  border-radius: 7px;
  background: ${theme.color.black30};
  padding: 28px 128px;
`;
