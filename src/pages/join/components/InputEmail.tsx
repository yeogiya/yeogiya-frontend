import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { JoinProps } from "../JoinPage";

interface InputEmailProps {
  email: ControllerRenderProps<JoinProps, "email">;
  emailState: ControllerFieldState;
}

const InputEmail = ({ email, emailState }: InputEmailProps) => {
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
