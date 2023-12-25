import Layout from "@/components/@common/Layout";
import ResultTitle from "./components/ResultTitle";
import { useParams } from "react-router-dom";
import { useLocationSearch } from "@/features/hooks/queries/useLocationSearch";
import ResultItem from "./components/ResultItem";

const ResultListPage = () => {
  const { searchID } = useParams();
  const res = useLocationSearch(searchID);

  return (
    <Layout maxWidth="60rem" paddingTop="1rem">
      <ResultTitle searchText={searchID} />
      <ResultItem result={res} />
    </Layout>
  );
};

export default ResultListPage;
