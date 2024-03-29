import Layout from "@/components/@common/Layout";
import theme from "@/styles/theme";
import useMyForm from "@/features/hooks/useMyForm";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/components/SubmitButton";
import InputProfile from "./components/InputProfile";
import { PATH } from "@/utils/routes";
import LinkText from "@/components/@common/LinkText";
import { useUserInfo } from "@/features/queries/useUserInfo";
import { useEffect, useState } from "react";
import InputNickname from "@/components/InputNickname";
import InputEmail from "@/components/InputEmail";
import InputId from "@/components/InputId";
import { Form } from "react-router-dom";
import { useChangeUserInfo } from "@/features/queries/useChangeUserInfo";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useInfo } from "@/features/hooks/useInfo";
import { users } from "@/constants/queryKey";
import { useQueryClient } from "@tanstack/react-query";

export interface MyPageProps {
  id: string;
  email: string;
  nickname: string;
}

const MyPage = () => {
  const { navigate } = usePageNavigation();
  const queryClient = useQueryClient();
  const { updateUserInfo } = useInfo();
  const [profile, setProfile] = useState<string>("");
  const [profileImg, setProfileImg] = useState<File>(null);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const { data: userInfo } = useUserInfo({
    queryKey: users.info,
    enabled: isChanged,
  });

  const { control, setValue, handleSubmit } = useForm<MyPageProps>({
    mode: "onChange",
  });

  const { nickname, nicknameState, id, idState, email, emailState } = useMyForm(
    setIsChanged,
    control
  );

  const userInfoMutation = useChangeUserInfo();

  const onSubmit: SubmitHandler<MyPageProps> = (submitData) => {
    userInfoMutation.mutate(
      {
        nickname: submitData.nickname,
        profileImg: profileImg,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: users.info });
          updateUserInfo(submitData.nickname, profile);
          navigate(PATH.HOME);
        },
      }
    );
  };

  const updateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (!file) return;
    const currentProfileImg = URL.createObjectURL(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        setProfileImg(file);
      }
      setProfile(currentProfileImg);
      setIsChanged(true);
    };
  };

  useEffect(() => {
    if (userInfo) {
      setValue("nickname", userInfo.body.nickname);
      setValue("id", userInfo.body.id);
      setValue("email", userInfo.body.email);
      userInfo.body.profileImageUrl &&
        setProfile(userInfo.body.profileImageUrl);
    }
  }, [userInfo?.body]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Layout
        maxWidth="328px"
        css={{ height: "100%", width: "100%" }}
        paddingTop="80px"
        backgroundColor={`${theme.color.white15}`}
      >
        <InputProfile
          updateImage={updateImage}
          profile={profile}
          css={{ marginBottom: "8px" }}
        />
        <InputNickname nickname={nickname} nicknameState={nicknameState} />
        <InputEmail email={email} emailState={emailState} disabled />
        <InputId
          id={id}
          idState={idState}
          css={{ marginTop: "24px" }}
          disabled
        />
        <SubmitButton
          type="submit"
          text="완료"
          isValid={isChanged}
          css={{ marginTop: "24px" }}
        />
        <LinkText
          to={PATH.MY_PASSWORD}
          text="비밀번호 변경"
          fontSize={1}
          color={theme.color.black}
          css={{ marginTop: "24px" }}
        />
        <LinkText
          to={PATH.MY_WITHDRAWAL}
          text="회원탈퇴"
          fontSize={1}
          css={{ marginTop: "24px" }}
        />
      </Layout>
    </Form>
  );
};

export default MyPage;
