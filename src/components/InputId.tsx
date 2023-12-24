import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { InputHTMLAttributes, useState } from "react";
import { ControllerFieldState } from "react-hook-form";

export interface InputIdProps {
  id: InputHTMLAttributes<HTMLInputElement>;
  idState: ControllerFieldState;
  disabled?: boolean;
}

const InputId = ({ id, idState, ...props }: InputIdProps) => {
  const [idActive, setIdActive] = useState<boolean>(false);

  return (
    <>
      <InputUser
        {...id}
        type="text"
        labelText="아이디"
        onChange={(e) => {
          id.onChange(e);
        }}
        onFocus={() => setIdActive(true)}
        isActive={idActive}
        {...props}
      />
      <ValidateMessage color="error">{idState?.error?.message}</ValidateMessage>
    </>
  );
};

export default InputId;
