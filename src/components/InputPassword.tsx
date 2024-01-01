import { ConcealIcon } from "@/assets";
import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { Dispatch, InputHTMLAttributes, SetStateAction, useState } from "react";
import { ControllerFieldState } from "react-hook-form";

export interface InputPasswordProps {
  password: InputHTMLAttributes<HTMLInputElement>;
  passwordState: ControllerFieldState;
  labelText?: string;
}

const InputPassword = ({
  password,
  passwordState,
  labelText,
}: InputPasswordProps) => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [isPassword, setIsPassword] = useState<boolean>(false);

  return (
    <>
      <InputUser
        {...password}
        type={passwordType}
        labelText={labelText || "비밀번호"}
        onChange={(e) => {
          password.onChange(e);
        }}
        icon={
          <ConcealIcon
            passwordType={passwordType}
            setPasswordType={setPasswordType}
            isActive={isPassword}
          />
        }
        onFocus={() => setIsPassword(true)}
        isActive={isPassword}
      />
      <ValidateMessage color="error">
        {passwordState?.error?.message}
      </ValidateMessage>
    </>
  );
};
export default InputPassword;
