import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import SubmitButton from "@/components/SubmitButton";
import useMyPassword from "@/features/hooks/useMyPw";
import { JoinProps } from "@/pages/join/JoinPage";
import InputPassword from "@/components/InputPassword";
import { PATH } from "@/utils/routes";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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

  const onSubmit = () => {};

  return (
    <Layout maxWidth="328px">
      <Title as="h2" css={{ marginBottom: "14px" }}>
        비밀번호 변경
      </Title>
      <InputPassword
        password={password}
        passwordState={passwordState}
        labelText="현재 비밀번호"
      />
      <Link to={PATH.MY_PASSWORD_UPDATE}>
        <SubmitButton
          type="submit"
          text="확인"
          isValid={isDirty && isValid}
          onSubmit={handleSubmit(onSubmit)}
        />
      </Link>
    </Layout>
  );
};

export default MyPwPage;
