import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";

const InputEmail = ({ email, emailState }) => {
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);

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
        }}
      />
      <ValidateMessage color="error">
        {emailState?.error?.message}
      </ValidateMessage>
    </>
  );
};

export default InputEmail;
