import Layout from "@/components/@common/Layout";
import theme from "@/styles/theme";
import useMyForm from "@/features/hooks/useMyForm";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/components/SubmitButton";
import InputProfile from "./components/InputProfile";
import { PATH } from "@/utils/routes";
import LinkText from "@/components/@common/LinkText";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import { useEffect, useState } from "react";
import InputNickname from "@/components/InputNickname";
import InputEmail from "@/components/InputEmail";
import InputId from "@/components/InputId";
import { Form } from "react-router-dom";
import { useChangeUserInfo } from "@/features/hooks/queries/useChangeUserInfo";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import usePageNavigation from "@/features/hooks/usePageNavigation";

export interface MyPageProps {
  id: string;
  email: string;
  nickname: string;
}

const MyPage = () => {
  const { navigate } = usePageNavigation();
  const { data: userInfo } = useUserInfo();
  const [profile, setProfile] = useState<string>("");
  const [profileImg, setProfileImg] = useState<File>(null);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { control, setValue, handleSubmit } = useForm<MyPageProps>({
    mode: "onBlur",
  });

  const { nickname, nicknameState, id, idState, email, emailState } =
    useMyForm(control);

  const userInfoMutation = useChangeUserInfo();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<MyPageProps> = (submitData) => {
    userInfoMutation.mutate(
      {
        nickname: submitData.nickname,
        profileImg: profileImg,
      },
      {
        onSuccess: () => {
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
        <InputNickname
          nickname={nickname}
          nicknameState={nicknameState}
          setIsChanged={setIsChanged}
        />
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
