import { ConcealIcon } from "@/assets";
import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { JoinProps } from "../JoinPage";

interface InputConfirmPasswordProps {
  confirmPassword: ControllerRenderProps<JoinProps, "confirmPassword">;
  confirmPasswordState: ControllerFieldState;
}

const InputConfirmPassword = ({
  confirmPassword,
  confirmPasswordState,
}: InputConfirmPasswordProps) => {
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");
  const [isPassWordConfirm, setIsPassWordConfirm] = useState<boolean>(false);

  return (
    <>
      <InputUser
        {...confirmPassword}
        labelText="비밀번호 확인"
        onChange={(e) => confirmPassword.onChange(e.target.value)}
        type={confirmPasswordType}
        icon={
          <ConcealIcon
            confirmPassword={confirmPasswordType}
            setConfirmPassword={setConfirmPasswordType}
            isActive={isPassWordConfirm}
          />
        }
        onFocus={() => setIsPassWordConfirm(true)}
        isActive={isPassWordConfirm}
      />
      <ValidateMessage color="error">
        {confirmPasswordState?.error?.message}
      </ValidateMessage>
    </>
  );
};
export default InputConfirmPassword;
