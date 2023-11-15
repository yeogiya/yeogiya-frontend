import theme from "@/styles/theme";
import styled from "@emotion/styled";

const InputTag = () => {
  return (
    <InputTagStyle placeholder="#해시태그를 입력해주세요 (최대 5개)"></InputTagStyle>
  );
};

export default InputTag;

const InputTagStyle = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 50px;
  border-radius: 14px;
  border: 1px solid ${theme.color.black35};
  padding: 9px 20px;
  color: ${theme.color.purple};
  margin-bottom: 58px;
`;
