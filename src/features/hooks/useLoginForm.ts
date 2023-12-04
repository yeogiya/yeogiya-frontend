import { LoginProps } from "@/pages/login/LoginPage";
import { Control, useController } from "react-hook-form";

const useLoginForm = (control: Control<LoginProps>) => {
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
