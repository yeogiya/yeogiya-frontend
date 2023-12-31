import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { Dispatch, InputHTMLAttributes, SetStateAction, useState } from "react";
import { ControllerFieldState } from "react-hook-form";

interface InputNicknameProps {
  nickname: InputHTMLAttributes<HTMLInputElement>;
  nicknameState: ControllerFieldState;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}

const InputNickname = ({
  nickname,
  nicknameState,
  setIsChanged,
}: InputNicknameProps) => {
  const [isNickname, setIsNickname] = useState<boolean>(false);

  return (
    <>
      <InputUser
        {...nickname}
        type="text"
        labelText="닉네임"
        onChange={(e) => {
          nickname.onChange(e);
          setIsChanged(true);
        }}
        onFocus={() => setIsNickname(true)}
        isActive={isNickname}
      />
      {nicknameState?.error?.message ? (
        <ValidateMessage color="error">
          {nicknameState?.error?.message}
        </ValidateMessage>
      ) : (
        <div style={{ marginTop: "16px" }}></div>
      )}
    </>
  );
};
export default InputNickname;
