import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { JoinProps } from "../JoinPage";

interface InputNicknameProps {
  nickname: ControllerRenderProps<JoinProps, "nickname">;
  nicknameState: ControllerFieldState;
}

const InputNickname = ({ nickname, nicknameState }: InputNicknameProps) => {
  const [isNickname, setIsNickname] = useState<boolean>(false);

  return (
    <>
      <InputUser
        {...nickname}
        type="text"
        labelText="닉네임"
        onChange={(e) => {
          nickname.onChange(e);
        }}
        onFocus={() => setIsNickname(true)}
        isActive={isNickname}
      />
      <ValidateMessage color="error">
        {nicknameState?.error?.message}
      </ValidateMessage>
    </>
  );
};
export default InputNickname;
