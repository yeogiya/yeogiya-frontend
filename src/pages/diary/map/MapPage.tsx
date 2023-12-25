import { createDiary, diary } from "@/store/diarySlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/hooks/useAppDispatch";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import DefaultButton from "@/components/@common/DefaultButton";
import Layout from "@/components/@common/Layout";
import Map from "@/pages/diary/map/components/Map";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useMap } from "@/features/hooks/useMap";
import usePageNavigation from "@/features/hooks/usePageNavigation";

const MapPage = () => {
  const dispatch = useAppDispatch();
  const diaryState = useAppSelector(diary);
  const { pathname } = useLocation();
  const { searchDetailAddFromCoords } = useMap();
  const { navigate } = usePageNavigation();

  const handleSubmit = () => {
    dispatch(
      createDiary({
        isSubmitPos: true,
      })
    );

    // TODO: diaryState.latitude, diaryState.longitude
    const address = searchDetailAddFromCoords(
      diaryState.latitude,
      diaryState.longitude
    );

    const date = pathname.split("/").at(-1);
    navigate(`${PATH.DIARY_CREATE}/${date}`);
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
