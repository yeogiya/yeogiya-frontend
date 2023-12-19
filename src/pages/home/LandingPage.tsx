import ContentDiary from "./components/ContentDiary";
import ContentHeader from "./components/ContentHeader";
import ContentPlace from "./components/ContentPlace";
import ContentSearch from "./components/ContentSearch";
import DefaultButton from "@/components/@common/DefaultButton";
import Layout from "@/components/@common/Layout";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { PATH } from "@/utils/routes";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Layout paddingTop="1rem" css={{ alignItems: "center" }}>
      <ContentHeader />
      <ContentPlace />
      <ContentDiary />
      <ContentSearch />
      <Link to={PATH.JOIN}>
        <Button type="button" text="회원가입 하기" />
      </Link>
    </Layout>
  );
};

export default LandingPage;

const Button = styled(DefaultButton)`
  font-size: 1rem;
  font-weight: 500;
  background-color: ${theme.color.purple};
  padding: 0.87rem 3.06rem;
  width: 12rem;
`;
