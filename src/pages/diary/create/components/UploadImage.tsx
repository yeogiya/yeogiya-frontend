import { PlusIcon } from "@/assets";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

const UploadImage = () => {
  const fileInput = useRef(null);
  const [showImages, setShowImages] = useState([]);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const saveImgFile = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };
  return (
    <>
      <UploadImageStyle onClick={handleButtonClick}>
        <PlusIcon fill={`${theme.color.black35}`} />
        <Input
          ref={fileInput}
          multiple
          type="file"
          accept="image/*"
          onChange={saveImgFile}
        />
      </UploadImageStyle>
      {showImages?.map((image, id) => (
        <UploadImageStyle>
          <img src={image} key={id} alt={`${image}-${id}`} />
        </UploadImageStyle>
      ))}
    </>
  );
};
export default UploadImage;

const UploadImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 89px;
  height: 100%;
  min-height: 89px;
  border-radius: 8px;
  border: 1px dashed ${theme.color.black35};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: flex;
    max-width: 27px;
    max-height: 27px;
  }

  img {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 89px;
    min-height: 89px;
    margin-right: 10px;
  }
`;

const Input = styled.input`
  display: none;
`;
