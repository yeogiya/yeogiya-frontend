import { useLocationSearch } from "@/features/queries/useLocationSearch";
import { diary } from "@/store/diarySlice";
import { useAppSelector } from "@/features/hooks/useAppDispatch";
import { useState, useEffect } from "react";
import Layout from "@/components/@common/Layout";
import InfoItem from "@/components/InfoItem";
import styled from "@emotion/styled";

interface LocationListProps {
  keyword: string;
}

const LocationList = ({ keyword }: LocationListProps) => {
  const [info, setInfo] = useState<
    {
      kakaoId: number;
      name: string;
      address: string;
      lat: number;
      lng: number;
      yeogiyaRating: number;
      imageUrl: string;
    }[]
  >([]);
  const [search, setSearch] = useState({ page: 1, size: 15 });

  const diaryState = useAppSelector(diary);

  const { data: locationInfo } = useLocationSearch(
    keyword,
    diaryState.latitude,
    diaryState.longitude,
    search.page,
    search.size
  );

  useEffect(() => {
    if (locationInfo?.status === "OK") {
      setInfo(locationInfo.body.places);
    }
  }, [locationInfo]);

  return (
    <Layout>
      <ItemLayout>
        {info &&
          info.map((location, _) => (
            <InfoItem
              key={_}
              type="location"
              placeName={location.name}
              address={location.address}
              imageUrl={location.imageUrl}
              yeogiyaRating={location.yeogiyaRating}
              kakaoId={location.kakaoId}
              lat={location.lat}
              lng={location.lng}
            />
          ))}
      </ItemLayout>
    </Layout>
  );
};

const ItemLayout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 0.75rem;
`;

export default LocationList;
