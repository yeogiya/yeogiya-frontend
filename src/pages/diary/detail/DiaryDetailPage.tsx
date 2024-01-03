import Layout from "@/components/@common/Layout";
import styled from "@emotion/styled";
import DefaultButton from "@/components/@common/DefaultButton";
import theme from "@/styles/theme";
import { ContentsStyle, Location } from "../create/DiaryCreatePage";
import { StarIcon } from "@/assets";
import { useEffect, useState } from "react";
import { useDiaryDetail } from "@/features/hooks/queries/useDiaryDetail";
import { useParams } from "react-router-dom";
import { useDeleteDiary } from "@/features/hooks/queries/useDeleteDiary";

export interface DiaryDetailProps {
  status: string;
  body: {
    content: string;
    date: string;
    diaryId: number;
    diaryImages: string[];
    hashtags: string[];
    memberId: number;
    openYn: string;
    placeName: string;
    star: number;
  };
}

const DiaryDetailPage = () => {
  const params = useParams();
  const StarNumber = Array.from({ length: 5 }, (_, index) => index + 1);
  const [rating, setRating] = useState<number>();

  const diaryDetailData = useDiaryDetail(
    Number(params.diaryId)
  ) as DiaryDetailProps;

  const deleteDiary = useDeleteDiary(Number(params.diaryId));

  useEffect(() => {
    setRating(diaryDetailData?.body.star);
  }, [diaryDetailData]);

  return (
    <Layout maxWidth="800px" paddingTop="30px" paddingBottom="30px">
      <TitleLayout>
        <Location>{diaryDetailData?.body.placeName}</Location>
        <RatingLayout>
          {StarNumber.map((number) => (
            <StarIcon
              key={number}
              fill={number <= rating && theme.color.purple}
            />
          ))}
        </RatingLayout>
      </TitleLayout>
      <ContentsStyle>
        <DetailContents>
          <TagContents>
            {diaryDetailData?.body.hashtags.map((tag, idx) => (
              <div key={`${tag}-${idx}`}>{tag}</div>
            ))}
          </TagContents>
          <MainContents>{diaryDetailData?.body.content}</MainContents>
        </DetailContents>
        <Date>{diaryDetailData?.body.date}</Date>
      </ContentsStyle>
      <Image>
        {diaryDetailData?.body.diaryImages.map((image, idx) => (
          <img src={image} key={idx} />
        ))}
      </Image>
      <ButtonLayout>
        <DeleteButton
          text="삭제"
          color={theme.color.black89}
          onClick={() => deleteDiary.mutate({})}
        />
        <EditButton text="수정" />
      </ButtonLayout>
    </Layout>
  );
};

export default DiaryDetailPage;

const TitleLayout = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;

  svg {
    display: flex;
  }
`;

const RatingLayout = styled.div`
  display: flex;
`;

const DetailContents = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 300px;
`;

const TagContents = styled.div`
  display: flex;
  color: ${theme.color.purple};
  margin-bottom: 20px;
  gap: 10px;
`;

const MainContents = styled.div`
  color: ${theme.color.black90};
`;

const Date = styled.div`
  color: ${theme.color.black50};
  font-size: 0.75rem;
  margin-top: 20px;
`;

const Image = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  gap: 10px;
  margin-top: 12px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 22px;
`;

const DeleteButton = styled(DefaultButton)`
  display: inline-flex;
  max-width: 140px;
  border: 1px solid ${theme.color.black30};
`;
const EditButton = styled(DefaultButton)`
  background-color: ${theme.color.purple};
  display: inline-flex;
  max-width: 140px;
`;
