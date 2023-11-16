import Layout from "@/components/@common/Layout";
import TextArea from "./components/TextArea";
import Rating from "./components/Rating";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import InputTag from "./components/InputTag";
import UploadImage from "./components/UploadImage";
import Button from "@/components/@common/Button";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";

const DiaryCreatePage = () => {
  const [textCount, setTextCount] = useState<number>();

  const onTextCount = (e) => {
    const count = e.target.value?.length;

    setTextCount(count);
  };
  return (
    <Layout maxWidth="800px" css={{ height: "100%" }} paddingTop="30px">
      <TextGuide>
        <Location>{"마일드스톤커피"}</Location>에 대한 솔직한 일기 혹은 리뷰를
        적어주세요.
      </TextGuide>
      <ContentsStyle>
        <Rating />
        <TextArea
          name="contents"
          placeholder="20자 이상 적어주세요."
          onChange={onTextCount}
        />
      </ContentsStyle>
      <TextCount>{textCount ?? 0} / 1,000</TextCount>
      <InputTag />
      <UploadImage />
      <ButtonLayout>
        <CancelButton text="취소" />
        <SuccessButton text="완료" />
      </ButtonLayout>
    </Layout>
  );
};

export default DiaryCreatePage;

const ContentsStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 300px;
  flex-direction: column;
  border: 1px solid ${theme.color.black35};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 10px;
`;

const TextCount = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${theme.color.black50};
  font-size: 0.875rem;
  margin-bottom: 32px;
  font-family: ${theme.font.number};
  font-weight: 600;
`;

const Location = styled.span`
  display: flex;
  color: ${theme.color.purple};
  font-size: 1.75rem;
  font-weight: 700;
`;

const TextGuide = styled.div`
  display: flex;
  font-size: 1rem;
  align-items: baseline;
  margin-bottom: 1.25rem;
`;

const CancelButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.black30};
  color: ${theme.color.black89};
  max-width: 140px;
  max-height: 50px;
`;

const SuccessButton = styled(SubmitButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  min-height: 50px;
  margin: 0;
  padding: 0;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
