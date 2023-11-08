import ContentLayout from "@/components/@common/ContentLayout";
import KoThirdIcon from "@/assets/images/KoThirdIcon";
import { SearchImage } from "@/assets/index";
import styled from "@emotion/styled";

const ContentSearch = () => {
  return (
    <ContentWrapper>
      <ContentLayout
        textIcon={<KoThirdIcon />}
        content={{
          img: <SearchImage />,
          firstLine: "좋은 경험을 만들 장소",
          secondLine: "여기야에서 검색해보세요!",
        }}
        text={{
          firstLine: "어떤 곳을 가면 좋을지 다양한 플랫폼에 흩어진 정보를",
          secondLine: "여기야에서 모아서 보여드려요",
        }}
      />
    </ContentWrapper>
  );
};

export default ContentSearch;

const ContentWrapper = styled.div`
  section {
    padding-bottom: 0;

    > svg {
      width: 388px;
      height: 388px;
    }
  }
`;
