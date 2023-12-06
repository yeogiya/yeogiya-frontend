import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { JoinProps } from "../JoinPage";

interface InputIdProps {
  id: ControllerRenderProps<JoinProps, "id">;
  idState: ControllerFieldState;
}

const InputId = ({ id, idState }: InputIdProps) => {
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
      />
      <ValidateMessage color="error">{idState?.error?.message}</ValidateMessage>
    </>
  );
};

export default InputId;
