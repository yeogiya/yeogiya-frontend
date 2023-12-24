import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { InputHTMLAttributes, useState } from "react";
import { ControllerFieldState } from "react-hook-form";

interface InputEmailProps {
  email: InputHTMLAttributes<HTMLInputElement>;
  emailState: ControllerFieldState;
  disabled?: boolean;
}

const InputEmail = ({ email, emailState, ...props }: InputEmailProps) => {
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
        {...props}
      />
      <ValidateMessage color="error">
        {emailState?.error?.message}
      </ValidateMessage>
    </>
  );
};

export default InputEmail;
