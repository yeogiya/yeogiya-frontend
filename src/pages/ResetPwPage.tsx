import InputUser from "@/components/@common/InputUser";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import SubmitButton from "@/components/SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";

interface ResetPwProps {
  password: string;
  confirmPassword: string;
}

const ResetPwPage = () => {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<ResetPwProps>({ mode: "onChange" });

  const onSubmit: SubmitHandler<ResetPwProps> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title as="h1">비밀번호 재설정하기</Title>
        <InputUser labelText="변경할 비밀번호" type="text" name="password" />
        <InputUser
          labelText="비밀번호 확인"
          type="text"
          name="confirmPassword"
        />
        <SubmitButton
          type="submit"
          text="비밀번호 변경하기"
          isValid={isDirty && isValid}
        />
      </form>
    </Layout>
  );
};

export default ResetPwPage;
