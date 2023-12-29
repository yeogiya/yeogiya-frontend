import { useMap } from "@/features/hooks/useMap";
import Map from "@/pages/diary/map/components/Map";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useEffect } from "react";

interface ResultDetailContentProps {
  address?: string;
  localAddress?: string;
  businessHours?: string;
  phoneNumber?: string;
  parking?: string;
  menu?: string[];
}

const ResultDetailContent = ({
  address = "서울특별시 강남구 역삼동 78길 2",
  localAddress = "서울특별시 강남구 역삼동 123-12",
  businessHours = "매일 00:00 ~ 00:00",
  phoneNumber = "02 - 123 - 1234",
  parking = "주차, 발렛",
  menu = ["돼지 김치찌개", "참치 김치찌개"],
}: ResultDetailContentProps) => {
  const handleMapButton = () => {};

  return (
    <Container>
      <PlaceInfo>
        <TextLayout>
          <SubTitle>위치</SubTitle>
          <TextLayout column address>
            <Text>{address}</Text>
            <TextLayout address>
              <span>지번</span>
              {localAddress}
            </TextLayout>
          </TextLayout>
        </TextLayout>
        <TextLayout>
          <SubTitle>영업시간</SubTitle>
          <Text>{businessHours}</Text>
        </TextLayout>
        <TextLayout>
          <SubTitle>전화번호</SubTitle>
          <Text>{phoneNumber}</Text>
        </TextLayout>
        <TextLayout>
          <SubTitle>주차</SubTitle>
          <Text>{parking}</Text>
        </TextLayout>
        <TextLayout>
          <SubTitle>메뉴</SubTitle>
          <TextLayout column>
            {menu.map((text) => (
              <Text key={text}>{text}</Text>
            ))}
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
  height: 25.9375rem;
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
    padding: 0.125rem 0.5625rem;
    border-radius: 0.3125rem;
    border: 1px solid ${theme.color.black20};
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
