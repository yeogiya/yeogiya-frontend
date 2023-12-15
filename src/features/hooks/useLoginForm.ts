import { JoinProps } from "@/pages/join/JoinPage";
import { Control, useController } from "react-hook-form";

const useLoginForm = (control: Control<Partial<JoinProps>>) => {
  const { field: id, fieldState: idState } = useController({
    name: "id",
    control,
  });

  const { field: password, fieldState: passwordState } = useController({
    name: "password",
    control,
  });

  return {
    id,
    idState,
    password,
    passwordState,
  };
};

export default useLoginForm;
