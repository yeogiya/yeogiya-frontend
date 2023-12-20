import { Fragment } from "react";
import LocationSearchNavbar from "./pages/diary/map/search/components/LocationSearchNavbar";
import MapNavbar from "./pages/diary/map/components/MapNavbar";
import Navbar from "@/components/@common/Navbar";
import { Outlet } from "react-router-dom";
import PlaceSearchNavbar from "./pages/search/components/PlaceSearchNavbar";

interface AppProps {
  layout?: "default" | "diaryMap" | "locationSearch" | "placeSearch";
}

const App = ({ layout = "default" }: AppProps) => {
  switch (layout) {
    case "diaryMap":
      return (
        <Fragment>
          <MapNavbar />
          <Outlet />
        </Fragment>
      );
    case "locationSearch":
      return (
        <Fragment>
          <LocationSearchNavbar />
          <Outlet />
        </Fragment>
      );
    case "placeSearch":
      return (
        <Fragment>
          <PlaceSearchNavbar />
          <Outlet />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <Navbar />
          <Outlet />
        </Fragment>
      );
  }
};

export default App;
