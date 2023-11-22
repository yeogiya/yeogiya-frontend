import { AppDispatch, RootState } from "@/store/store";
import { DiaryState, diary, initialState } from "@/store/diarySlice";
import { MouseEvent, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/hooks/useAppDispatch";

import DefaultButton from "@/components/@common/DefaultButton";
import Layout from "@/components/@common/Layout";
import Map from "@/components/@common/Map";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useMap } from "@/features/hooks/useMap";

const MapPage = () => {
  const { position, handleClick, isClick } = useMap();
  const [currentPosition, setCurrentPosition] =
    useState<DiaryState>(initialState);
  const dispatch = useAppDispatch();
  const diary = useAppSelector((state) => state.diary);

  const handlePosition = () => {
    handleClick();
    console.log(isClick);
    setCurrentPosition(position);
    dispatch({
      type: "diary",
      payload: currentPosition,
    });
  };

  useEffect(() => {
    handlePosition;
  }, [position, currentPosition]);

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
          onClick={() => handlePosition}
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
