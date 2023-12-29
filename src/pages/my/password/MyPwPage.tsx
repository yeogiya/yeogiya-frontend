import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import SubmitButton from "@/components/SubmitButton";
import useMyPassword from "@/features/hooks/useMyPw";
import { JoinProps } from "@/pages/join/JoinPage";
import InputPassword from "@/components/InputPassword";
import { PATH } from "@/utils/routes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCurrentPw } from "@/features/hooks/queries/useCurrentPw";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import ValidateMessage from "@/components/ValidateMessage";
import { useState } from "react";

const MyPwPage = () => {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
    control,
  } = useForm<Partial<JoinProps>>({
    mode: "onBlur",
    defaultValues: {
      password: "",
    },
  });

  const { password, passwordState } = useMyPassword(control);
  const checkCurrentPw = useCurrentPw();
  const { navigate } = usePageNavigation();
  const [validateText, setValidateText] = useState<string>("");

  const onSubmit: SubmitHandler<Pick<JoinProps, "password">> = (data) => {
    checkCurrentPw.mutate(data.password, {
      onSuccess: () => {
        navigate(PATH.MY_PASSWORD_UPDATE);
      },
      onError: () => {
        setValidateText("비밀번호가 일치하지 않습니다.");
      },
    });
  };

  return (
    <Layout maxWidth="328px">
      <Title as="h2" css={{ marginBottom: "14px" }}>
        비밀번호 변경
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputPassword
          password={password}
          passwordState={passwordState}
          labelText="현재 비밀번호"
          setValidateText={setValidateText}
        />
        <ValidateMessage color="error">
          {isValid && validateText}
        </ValidateMessage>
        <SubmitButton
          type="submit"
          text="확인"
          isValid={isDirty && isValid}
          onSubmit={handleSubmit(onSubmit)}
        />
      </form>
    </Layout>
  );
};

export default MyPwPage;
