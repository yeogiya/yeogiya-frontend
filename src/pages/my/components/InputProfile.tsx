import ProfileIcon from "@/assets/images/ProfileIcon";
import styled from "@emotion/styled";
import { useRef } from "react";

const InputProfile = ({ updateImage, profile }) => {
  const profileInput = useRef(null);

  const handleButtonClick = () => {
    profileInput.current.click();
  };

  return (
    <ProfileWrapper>
      <ImgStyle>
        {profile ? <img src={profile} alt={profile} /> : <ProfileIcon />}
        <Profile
          ref={profileInput}
          type="file"
          accept="image/*"
          onChange={updateImage}
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
