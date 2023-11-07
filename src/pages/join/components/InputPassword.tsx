import ConcealIcon from "@/assets/ConcealIcon";
import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import useJoinForm from "@/features/hooks/useJoinForm";
import { useState } from "react";

const InputPassword = ({ control }) => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPassWordConfirm, setIsPassWordConfirm] = useState<boolean>(false);

  const { password, passwordState, confirmPassword, confirmPasswordState } =
    useJoinForm(control);
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
export default InputPassword;
