import { PlusIcon } from "@/assets";
import DeleteIcon from "@/assets/images/DeleteIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useRef, useState } from "react";

interface UploadImageProps {
  fileImages: File[];
  setFileImages: Dispatch<SetStateAction<File[]>>;
}

const UploadImage = ({ fileImages, setFileImages }: UploadImageProps) => {
  const fileInput = useRef(null);
  const [showImages, setShowImages] = useState([]);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageLists = e.target.files;

    const newImages = [...showImages];
    const newFileImages = [...fileImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      newImages.push(currentImageUrl);
      newFileImages.push(e.target.files?.item(i));
    }

    if (newImages.length > 10) {
      newImages.splice(0, newImages.length - 10);
      newFileImages.splice(0, newFileImages.length - 10);
    }
    setShowImages(newImages);
    setFileImages(newFileImages);
  };

  const handleDeleteImage = (deleteImage) => {
    setFileImages((prevFileImages) => {
      const newFileImages = prevFileImages.filter(
        (item, index) => showImages[index] !== deleteImage
      );

      return newFileImages;
    });

    setShowImages((prevShowImages) => {
      const newImages = prevShowImages.filter((item) => item !== deleteImage);

      return newImages;
    });
  };

  return (
    <>
      <UploadImageLayout>
        {showImages?.map((image, idx) => (
          <ImageStyle key={`${image}-${idx}`}>
            <Image>
              <img src={image} alt={`${image}-${idx}`} />
              <div
                className="hover_image"
                onClick={() => handleDeleteImage(image)}
              >
                <DeleteIcon />
              </div>
            </Image>
          </ImageStyle>
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
        </UploadImageWrapper>
        <Text>{showImages.length} / 5</Text>
      </UploadImageLayout>
    </>
  );
};
export default UploadImage;

const UploadImageLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
`;

const UploadImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: fit-content;
  width: 100%;
  color: ${theme.color.black50};
  font-weight: 600;
  font-size: 14px;
  font-family: ${theme.font.number};
`;

const ImageStyle = styled.ul`
  width: 100%;
  max-width: 89px;
  max-height: 89px;
  position: relative;
  border-radius: 8px;

  :hover {
    width: 100%;
    min-height: 89px;
    cursor: pointer;
    display: block;
  }

  :hover > li {
    background-color: ${theme.color.black50};
  }

  :hover > li > img {
    opacity: 0.8;
  }
`;

const Image = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  img {
    object-fit: cover;
    width: 100%;
    height: calc(100% - 78px);
    min-height: 89px;
    border-radius: 8px;
  }

  div.hover_image {
    display: none;
  }

  :hover > .hover_image {
    display: inline-block;
    position: absolute;
    top: 8px;
    right: 8px;
  }
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
