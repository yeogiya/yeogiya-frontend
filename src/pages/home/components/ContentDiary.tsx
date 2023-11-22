import ContentLayout from "@/components/@common/ContentLayout";
import { DiaryImage } from "@/assets";
import { KoSecondIcon } from "@/assets/index";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

const ContentDiary = () => {
  return (
    <ContentWrapper>
      <ContentLayout
        layoutFlexDirection="row-reverse"
        layoutColumnGap="3.8rem"
        textIcon={<KoSecondIcon />}
        content={{
          img: <DiaryImage />,
          firstLine: "나만의 공간 경험을",
          secondLine: "일기로 기록할 수 있어요",
        }}
        text={{
          firstLine: "만족스러웠던 메뉴 행복했던 추억을 일기로",
          secondLine: "기록해 보세요",
        }}
      />
    </ContentWrapper>
  );
};

export default ContentDiary;

const ContentWrapper = styled.div`
  section {
    width: 99vw;
    background: ${theme.color.white5};

    > svg {
      width: 388px;
      height: 388px;
    }
  }
`;
