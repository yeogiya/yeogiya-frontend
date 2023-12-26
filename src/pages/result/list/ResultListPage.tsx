import Layout from "@/components/@common/Layout";
import ResultTitle from "./components/ResultTitle";
import { useParams } from "react-router-dom";
import { useLocationSearch } from "@/features/hooks/queries/useLocationSearch";
import InfoItem from "@/components/InfoItem";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ResultListPage = () => {
  const [info, setInfo] = useState([]);

  const { searchID } = useParams();

  const { data: searchInfo } = useLocationSearch(searchID);

  useEffect(() => {
    if (searchInfo?.status === "OK") {
      setInfo(searchInfo.body.places);
    }
  }, [searchInfo]);

  return (
    <Layout maxWidth="60rem" paddingTop="1rem">
      <ResultTitle searchText={searchID} />
      <ItemLayout>
        {info && info.map((result, _) => <InfoItem key={_} data={result} />)}
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

export default ResultListPage;
