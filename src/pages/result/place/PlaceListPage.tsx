import Layout from "@/components/@common/Layout";
import PlaceSearchTitle from "./components/PlaceSearchTitle";
import { useParams } from "react-router-dom";
import { usePlaceSearch } from "@/features/hooks/queries/usePlaceSearch";
import InfoItem from "@/components/InfoItem";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const PlaceListPage = () => {
  const [info, setInfo] = useState([]);

  const { searchID } = useParams();

  const { data: searchInfo } = usePlaceSearch(searchID);

  useEffect(() => {
    if (searchInfo?.status === "OK") {
      setInfo(searchInfo.body.places);
    }
  }, [searchInfo]);

  return (
    <Layout maxWidth="60rem" paddingTop="1rem">
      <PlaceSearchTitle searchText={searchID} />
      <ItemLayout>
        {info &&
          info.map((result, _) => (
            <InfoItem
              key={_}
              type="place"
              placeName={result.placeName}
              address={result.address}
              imageUrl={result.photoReference}
              yeogiyaRating={result.yeogiyaRating}
              googlePlaceId={result.googlePlaceId}
              googleRating={result.googleRating}
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

export default PlaceListPage;
