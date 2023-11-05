import DefaultButton from "@/components/@common/DefaultButton";
import Layout from "@/components/@common/Layout";
import Map from "@/components/@common/Map";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

const MapPage = () => {
  return (
    <Layout paddingTop="0" paddingBottom="0">
      <Map width="60rem" height="51.87rem" />
      <ButtonWrapper>
        <DefaultButton
          background={theme.color.purple}
          text="위치 설정"
          css={{
            maxWidth: "45.5rem",
          }}
        />
      </ButtonWrapper>
    </Layout>
  );
};

export default MapPage;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  margin-bottom: 6.37rem;
`;
