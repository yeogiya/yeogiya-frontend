import { Fragment } from "react";
import MapHeader from "./components/MapHeader";
import Navbar from "@/components/@common/Navbar";
import { Outlet } from "react-router-dom";

interface AppProps {
  layout?: "default" | "diaryHeader";
}

const App = ({ layout = "default" }: AppProps) => {
  if (layout === "diaryHeader") {
    return (
      <Fragment>
        <MapHeader />
        <Outlet />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default App;
