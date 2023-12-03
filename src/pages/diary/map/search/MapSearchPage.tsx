import Layout from "@/components/@common/Layout";
import LocationSearch from "./components/LocationSearch";

const MapSearchPage = () => {
  return (
    <Layout maxWidth="var(--max-width)" paddingTop="0" paddingBottom="0">
      <LocationSearch />
    </Layout>
  );
};

export default MapSearchPage;
