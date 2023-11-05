import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import useJoinForm from "@/features/hooks/useJoinForm";
import { useState } from "react";

const InputNickname = ({ control }) => {
  const [isNickname, setIsNickname] = useState<boolean>(false);
  const { nickname, nicknameState } = useJoinForm(control);
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
