import ProfileIcon from "@/assets/images/ProfileIcon";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

const InputProfile = ({ ...props }) => {
  const profileInput = useRef(null);
  const [showProfileImg, setShowProfileImg] = useState<string>("");

  const handleButtonClick = () => {
    profileInput.current.click();
  };

  const saveProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profileImg = e.target.files[0];

    const currentProfileImg = URL.createObjectURL(profileImg);
    setShowProfileImg(currentProfileImg);
  };

  return (
    <ProfileWrapper {...props}>
      <ImgStyle>
        {showProfileImg ? (
          <img src={showProfileImg} alt={showProfileImg} />
        ) : (
          <ProfileIcon />
        )}
        <Profile
          ref={profileInput}
          type="file"
          accept="image/*"
          onChange={saveProfileImg}
        />
      </ImgStyle>
      <label onClick={handleButtonClick}>사진 변경</label>
    </ProfileWrapper>
  );
};

export default InputProfile;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  label {
    cursor: pointer;
    font-size: 0.75rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  ${({ css }) => css && css}
`;

const ImgStyle = styled.div`
  width: 80px;
  height: 80px;
`;

const Profile = styled.input`
  display: none;
`;
