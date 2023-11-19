import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

const InputTag = () => {
  const [hashtagValue, setHashtagValue] = useState<string>("");

  const handleHashTagInput = (e) => {
    let value: string = e.value;

    const regExp = /\#/g;

    if (regExp.test(e.value)) {
      value = e.value.substring(0, e.value.length - 1);
    }
  };

  return (
    <InputTagStyle
      placeholder="#해시태그를 입력해주세요 (최대 5개)"
      onKeyUp={handleHashTagInput}
      onKeyDown={handleHashTagInput}
      // value={hashtagValue}
    ></InputTagStyle>
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

  ::placeholder {
    color: ${theme.color.black35};
  }
`;
