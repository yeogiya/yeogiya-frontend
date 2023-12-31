import Navbar from "@/components/@common/Navbar";
import { Fragment } from "react";
import Layout from "@/components/@common/Layout";

const NotFoundPage = () => {
  return (
    <Fragment>
      <Navbar type="default" />
      <Layout css={{ alignItems: "center" }}>
        <p>404 Page</p>
      </Layout>
    </Fragment>
  );
};

export default NotFoundPage;
