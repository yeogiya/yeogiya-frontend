import DefaultButton from "@/components/@common/DefaultButton";
import Layout from "@/components/@common/Layout";
import Map from "@/components/@common/Map";
import { createDiary } from "@/store/diarySlice";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";

const MapPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      createDiary({
        isSubmitPos: true,
      })
    );
    // TODO: diaryState.latitude, diaryState.longitude
  };

  return (
    <Layout paddingTop="0" paddingBottom="0" maxWidth="960px">
      <Map width="60rem" height="100vh" />
      <ButtonWrapper>
        <DefaultButton
          background={theme.color.purple}
          type="button"
          text="위치 설정"
          css={{
            width: "100%",
            maxWidth: "45.5rem",
          }}
          onClick={handleSubmit}
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
  margin-bottom: 6.375rem;

  button {
    cursor: pointer;
  }
`;
