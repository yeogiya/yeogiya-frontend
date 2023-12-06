import { ConcealIcon } from "@/assets";
import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";
import { JoinProps } from "../JoinPage";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface InputPasswordProps {
  password: ControllerRenderProps<JoinProps, "password">;
  passwordState: ControllerFieldState;
}

const InputPassword = ({ password, passwordState }: InputPasswordProps) => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [isPassword, setIsPassword] = useState<boolean>(false);

  return (
    <>
      <InputUser
        {...password}
        type={passwordType}
        labelText="비밀번호"
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
