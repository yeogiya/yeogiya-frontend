import { useMap } from "@/features/hooks/useMap";
import Map from "@/pages/diary/map/components/Map";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Fragment, useEffect, useState } from "react";
import { SEARCH_DETAIL_NAV, SearchDetailNavType } from "@/constants/menus";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import { createDiary } from "@/store/diarySlice";

interface ResultDetailContentProps {
  activeNav: SearchDetailNavType;
  data: {
    lat: number;
    lng: number;
    google: object;
    kakao: object;
    naver: object;
  };
}

const ResultDetailContent = ({ data, activeNav }: ResultDetailContentProps) => {
  const dispatch = useAppDispatch();

  const handleMapButton = () => {};

  useEffect(() => {
    dispatch(createDiary({ latitude: data?.lat, longitude: data?.lng }));
  }, [data]);

  return (
    <Container>
      <PlaceInfo>
        <TextLayout>
          <SubTitle>위치</SubTitle>
          <TextLayout column address>
            {data?.[activeNav.type]?.roadAddress && (
              <Text>{data?.[activeNav.type]?.roadAddress}</Text>
            )}
            <TextLayout address css={{ alignItems: "center" }}>
              {data?.[activeNav.type]?.address && (
                <Fragment>
                  <span>지번</span>
                  <p>{data?.[activeNav.type]?.address}</p>
                </Fragment>
              )}
            </TextLayout>
          </TextLayout>
        </TextLayout>
        <TextLayout>
          <SubTitle>영업시간</SubTitle>
          <TextLayout column>
            {data?.[activeNav.type]?.operatingHours?.map((text) => (
              <Text key={text}>{text}</Text>
            ))}
          </TextLayout>
        </TextLayout>
        <TextLayout>
          <SubTitle>전화번호</SubTitle>
          <Text>{data?.[activeNav.type]?.phone}</Text>
        </TextLayout>
        <TextLayout>
          <SubTitle>주차</SubTitle>
          {/* <Text>{parking}</Text> */}
        </TextLayout>
        <TextLayout>
          <SubTitle>메뉴</SubTitle>
          <TextLayout column>
            {/* {menu.map((text) => (
              <Text key={text}>{text}</Text>
            ))} */}
          </TextLayout>
        </TextLayout>
      </PlaceInfo>
      <MapWrapper>
        <Map width="26.125rem" height="27rem" />
        <MapButton type="button" onClick={handleMapButton}>
          길 찾기
        </MapButton>
      </MapWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 1.875rem;
  display: flex;
  column-gap: 1.25rem;
`;

const PlaceInfo = styled.div`
  width: 32.625rem;
  min-height: 25.9375rem;
  border-radius: 0.875rem;
  border: 1px solid ${theme.color.black35};
  display: flex;
  flex-direction: column;
  row-gap: 1.875rem;
  padding: 1.25rem;
`;

const TextLayout = styled.div<{ column?: boolean; address?: boolean }>`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  row-gap: ${({ column, address }) =>
    (address && "0.75rem") || (column && "1.25rem")};
  column-gap: ${({ address }) => address && "0.5rem"};
  color: ${({ address }) => address && theme.color.black50};
  font-size: ${({ address }) => address && "0.875rem"};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 1.25rem;
    /* padding: 0.125rem 0.5625rem; */
    border-radius: 0.3125rem;
    border: 1px solid ${theme.color.black20};
    margin-top: 0.2rem;
  }
`;

const SubTitle = styled.p`
  color: ${theme.color.black89};
  font-size: 1rem;
  font-weight: 400;
  width: 8.125rem;
`;

const Text = styled.p`
  color: ${theme.color.black89};
  font-size: 1rem;
  font-weight: 400;
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.125rem;
  height: 25.9375rem;

  section {
    border-radius: 10px 10px 0 0;
  }
`;

const MapButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  background: ${theme.color.purple};
  color: ${theme.color.white};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
`;

export default ResultDetailContent;
