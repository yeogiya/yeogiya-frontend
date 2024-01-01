import Layout from "@/components/@common/Layout";
import styled from "@emotion/styled";
import DefaultButton from "@/components/@common/DefaultButton";
import theme from "@/styles/theme";
import { ContentsStyle, Location } from "../create/DiaryCreatePage";
import { StarIcon } from "@/assets";
import { useState } from "react";

const DiaryDetailPage = () => {
  const StarNumber = Array.from({ length: 5 }, (_, index) => index + 1);
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Layout maxWidth="800px" paddingTop="30px" paddingBottom="30px">
        <TitleLayout>
          <Location>마일스톤커피</Location>
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
              #역삼동맛집 #선릉역 맛집 #가로수길카페 #카페추천 #라떼맛집
            </TagContents>
            <MainContents>
              오늘은 마일드스톤 커피에서 친구들과 맛있는 시그니처 라떼를 마셨다.
              오늘은 마일드스톤 커피에서 친구들과 맛있는 시그니처 라떼를 마셨다.
              오늘은 마일드스톤 커피에서 친구들과 맛있는 시그니처 라떼를 마셨다.
              오늘은 마일드스톤 커피에서 친구들과 맛있는 시그니처 라떼를 마셨다.
              오늘은 마일드스톤 커피에서 친구들과 맛있는 시그니처 라떼를 마셨다.
              오늘은 마일드스톤 커피에서 친구들과 맛있는 시그니처 라떼를 마셨다.
            </MainContents>
          </DetailContents>
          <Date>2023-10-24</Date>
        </ContentsStyle>
        <Image>
          <img
            src={`https://source.unsplash.com/random/300x300/?programming`}
          />
          <img
            src={`https://source.unsplash.com/random/300x300/?programming`}
          />
          <img
            src={`https://source.unsplash.com/random/300x300/?programming`}
          />
          <img
            src={`https://source.unsplash.com/random/300x300/?programming`}
          />
          <img
            src={`https://source.unsplash.com/random/300x300/?programming`}
          />
        </Image>
        <ButtonLayout>
          <DeleteButton text="삭제" color={theme.color.black89} />
          <EditButton text="수정" />
        </ButtonLayout>
      </Layout>
    </>
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
  color: ${theme.color.purple};
  margin-bottom: 20px;
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
  max-width: 120px;
  max-height: 120px;
  gap: 10px;
  margin-top: 12px;

  img {
    object-fit: cover;
    width: 100%;
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
