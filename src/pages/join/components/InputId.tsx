import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";

const InputId = ({ id, idState }) => {
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
