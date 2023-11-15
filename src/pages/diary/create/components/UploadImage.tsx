import { PlusIcon } from "@/assets";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

const UploadImage = ({ inputRef, onUploadImage }) => {
  return (
    <UploadImageStyle>
      <PlusIcon fill={`${theme.color.black35}`} />
      <Input
        type="file"
        accept="image/*"
        // ref={inputRef}
        // onChange={onUploadImage}
      />
    </UploadImageStyle>
  );
};
export default UploadImage;

const UploadImageStyle = styled.div`
  display: flex;
  width: 100%;
  max-width: 89px;
  height: 100%;
  min-height: 89px;
  border-radius: 8px;
  border: 1px dashed ${theme.color.black35};
  align-items: center;
  justify-content: center;

  svg {
    display: flex;
    max-width: 27px;
    max-height: 27px;
  }
`;

const Input = styled.input`
  display: none;
`;
