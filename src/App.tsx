import { Fragment } from "react";
import LocationSearchNavbar from "./pages/diary/map/search/components/LocationSearchNavbar";
import MapNavbar from "./pages/diary/map/components/MapNavbar";
import Navbar from "@/components/@common/Navbar";
import { Outlet } from "react-router-dom";
import ProtectRoute from "./utils/ProtectRouter";

interface AppProps {
  layout?: "default" | "diaryMap" | "locationSearch" | "placeSearch" | "login";
}

const App = ({ layout = "default" }: AppProps) => {
  switch (layout) {
    case "diaryMap":
      return (
        <Fragment>
          <MapNavbar />
          <ProtectRoute />
        </Fragment>
      );
    case "locationSearch":
      return (
        <Fragment>
          <LocationSearchNavbar />
          <ProtectRoute />
        </Fragment>
      );
    case "placeSearch":
      return (
        <Fragment>
          <Navbar type="placeSearch" />
          <Outlet />
        </Fragment>
      );
    case "login":
      return (
        <Fragment>
          <Navbar type="default" />
          <ProtectRoute />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <Navbar type="default" />
          <Outlet />
        </Fragment>
      );
  }
};

export default App;
