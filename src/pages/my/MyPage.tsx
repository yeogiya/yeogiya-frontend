import Layout from "@/components/@common/Layout";
import theme from "@/styles/theme";
import useMyForm from "@/features/hooks/useMyForm";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/components/SubmitButton";
import { JoinProps } from "../join/JoinPage";
import InputProfile from "./components/InputProfile";
import { PATH } from "@/utils/routes";
import LinkText from "@/components/@common/LinkText";
import { useUserInfo } from "@/features/hooks/queries/useUserInfo";
import { FormEventHandler, useEffect, useState } from "react";
import InputNickname from "@/components/InputNickname";
import InputEmail from "@/components/InputEmail";
import InputId from "@/components/InputId";
import { Form } from "react-router-dom";
import {
  useChangeUserInfo,
  userInfoProps,
} from "@/features/hooks/queries/useChangeUserInfo";

export interface MyPageProps {
  id: string;
  email: string;
  nickname: string;
  profileImg: File | ArrayBuffer | string | null;
}

const MyPage = () => {
  const { data: userInfo } = useUserInfo();
  const [showProfileImg, setShowProfileImg] = useState<string>("");
  const [profile, setProfile] = useState<File | string>(null);
  const [infoData, setInfoData] = useState<
    userInfoProps & { profileImg: File | string | null }
  >({
    nickname: "",
    profileImg: null,
  });

  const {
    formState: { isDirty, isValid },
    control,
    setValue,
    handleSubmit,
  } = useForm<MyPageProps>({
    mode: "onBlur",
  });

  const {
    nickname,
    nicknameState,
    id,
    idState,
    email,
    emailState,
    // profileImg,
    // profileImgState,
  } = useMyForm(control);

  const userInfoMutation = useChangeUserInfo();

  const onSubmit: SubmitHandler<MyPageProps> = () => {
    setInfoData({
      nickname: nickname.value,
      profileImg: profile,
    });

    userInfoMutation.mutate(infoData);
  };

  const updateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (!file) return;
    const currentProfileImg = URL.createObjectURL(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        setInfoData((prev) => {
          return { ...prev, profileImg: file };
        });
        setProfile(reader.result as string);
      }
      setShowProfileImg(currentProfileImg);
    };

    // setIsValid(true);
  };

  useEffect(() => {
    if (userInfo) {
      setValue("nickname", userInfo.body.nickname);
      setValue("id", userInfo.body.id);
      setValue("email", userInfo.body.email);
      userInfo.body.profileImageUrl &&
        setShowProfileImg(userInfo.body.profileImageUrl);
    }
  }, [userInfo?.body]);

  return (
    <Form
      // onSubmit={onSubmit}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Layout
        maxWidth="328px"
        css={{ height: "100%", width: "100%" }}
        paddingTop="80px"
        backgroundColor={`${theme.color.white15}`}
      >
        <InputProfile
          updateImage={updateImage}
          profile={showProfileImg}
          // setProfile={setProfile}
          // profileImg={profileImg}
          // profileImgState={profileImgState}
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
          isValid={isDirty && isValid}
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
