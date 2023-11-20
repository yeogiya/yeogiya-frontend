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
      <UploadImageLayout>
        {showImages?.map((image, id) => (
          <Image src={image} key={`${image}-${id}`} alt={`${image}-${id}`} />
        ))}
        <UploadImageWrapper>
          {showImages.length < 5 && (
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
            </>
          )}
          <Text>{showImages.length} / 5</Text>
        </UploadImageWrapper>
      </UploadImageLayout>
    </>
  );
};
export default UploadImage;

const UploadImageLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 40px;
`;

const UploadImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div`
  margin-left: 50px;
  margin-top: 10px;
  color: ${theme.color.black50};
  font-weight: 600;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: calc(100% - 78px);
  max-width: 89px;
  min-height: 89px;
  border-radius: 8px;
`;

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
`;

const Input = styled.input`
  display: none;
`;
