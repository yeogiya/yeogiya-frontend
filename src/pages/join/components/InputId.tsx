import InputUser from "@/components/@common/InputUser";
import ValidateMessage from "@/components/ValidateMessage";
import useJoinForm from "@/features/hooks/useJoinForm";
import { useState } from "react";

const InputId = ({ control }) => {
  const [idActive, setIdActive] = useState<boolean>(false);

  const { id, idState } = useJoinForm(control);
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
