import Button from "@/components/@common/Button";
import DatePicker from "./components/DatePicker";
import InputTag from "./components/InputTag";
import Layout from "@/components/@common/Layout";
import Rating from "./components/Rating";
import SubmitButton from "@/components/SubmitButton";
import TextArea from "./components/TextArea";
import ToggleButton from "./components/ToggleButton";
import UploadImage from "./components/UploadImage";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { useCreateDiary } from "@/features/hooks/queries/useCreateDiary";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { PATH } from "@/utils/routes";

const DiaryCreatePage = () => {
  const { pathname } = useLocation();
  const { navigate } = usePageNavigation();
  const [textCount, setTextCount] = useState<number>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [tagValue, setTagValue] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const createDate = pathname.split("/").at(-1);
  const [selectedDate, setSelectedDate] = useState<string>(createDate);
  const [fileImages, setFileImages] = useState<File[]>([]);
  const [contents, setContents] = useState<string>("");

  const createDiary = useCreateDiary();

  const onTextCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);

    const count = e.target.value?.length;
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    setTextCount(Number(count.toString().replace(regexp, ",")));
  };

  useEffect(() => {
    // TODO: 해시태그 validation 제거
    textCount >= 20 && tagValue.length >= 1
      ? setIsValid(true)
      : setIsValid(false);
  }, [textCount, tagValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const newStar = clicked.filter((v) => v === true).length;

    createDiary.mutate(
      {
        diaryContent: {
          fileImages,
          tagValue,
          selectedDate,
          star: newStar,
          isActive,
          contents,
        },
      },
      {
        onSuccess: () => navigate(PATH.DIARY_LIST),
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Layout maxWidth="800px" paddingTop="30px" paddingBottom="30px">
        <TextGuide>
          <Location>{"마일드스톤커피"}</Location>에 대한 솔직한 일기 혹은 리뷰를
          적어주세요.
        </TextGuide>
        <TextDate>
          <DatePickerDate onClick={() => setShowDatePicker(!showDatePicker)}>
            {dayjs(selectedDate).format("YYYY년 MM월 DD일")}
          </DatePickerDate>
          {showDatePicker && (
            <DatePicker
              handleDatePicker={setShowDatePicker}
              handleClickedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          )}
        </TextDate>
        <ContentsStyle>
          <Rating clicked={clicked} setClicked={setClicked} />
          <TextArea
            name="content"
            placeholder="20자 이상 적어주세요."
            onChange={onTextCount}
          />
        </ContentsStyle>
        <TextCount>{textCount ?? 0} / 1,000</TextCount>
        <InputTag tagValue={tagValue} setTagValue={setTagValue} />
        <UploadImage fileImages={fileImages} setFileImages={setFileImages} />
        <ShareStyle>
          <p>공개 여부</p>
          <ToggleButton isActive={isActive} setIsActive={setIsActive} />
        </ShareStyle>
        <ButtonLayout>
          <CancelButton text="취소" />
          <SuccessButton type="submit" isValid={isValid} text="완료" />
        </ButtonLayout>
      </Layout>
    </Form>
  );
};

export default DiaryCreatePage;

export const ContentsStyle = styled.div`
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

export const TextCount = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${theme.color.black50};
  font-size: 0.875rem;
  margin-bottom: 32px;
  font-family: ${theme.font.number};
  font-weight: 600;
`;

const ShareStyle = styled.div`
  color: ${theme.color.black89};
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;

  p {
    margin-right: 24px;
  }
`;

export const Location = styled.span`
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

const TextDate = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
`;

const DatePickerDate = styled.div`
  display: flex;
  padding: 9px 20px;
  border: 1px solid ${theme.color.black10};
  border-radius: 8px;
  width: fit-content;
  font-size: 14px;
  cursor: pointer;
`;

export const CancelButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.black30};
  color: ${theme.color.black89};
  max-width: 140px;
  max-height: 50px;
`;

export const SuccessButton = styled(SubmitButton)`
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
