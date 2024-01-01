import { USER_INFO } from "@/constants/userInfo";
import { useState } from "react";

export const useInfo = () => {
  const [nickname, setNickname] = useState(
    () => localStorage.getItem(USER_INFO.NICKNAME) || ""
  );
  const [profile, setProfile] = useState(
    () => localStorage.getItem(USER_INFO.PROFILE) || ""
  );

  const updateUserInfo = (nickname: string, profileImg: string) => {
    setNickname(() => nickname || "");
    setProfile(() => profileImg || "");
    localStorage.setItem(USER_INFO.NICKNAME, nickname);
    localStorage.setItem(USER_INFO.PROFILE, profileImg);
  };

  const removeUserInfo = () => {
    setNickname(() => "");
    setProfile(() => "");
    localStorage.removeItem(USER_INFO.NICKNAME);
    localStorage.removeItem(USER_INFO.PROFILE);
  };

  return {
    nickname,
    profile,
    updateUserInfo,
    removeUserInfo,
  };
};
