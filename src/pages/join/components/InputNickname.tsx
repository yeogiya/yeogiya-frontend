import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";

const InputNickname = ({ nickname, nicknameState }) => {
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
