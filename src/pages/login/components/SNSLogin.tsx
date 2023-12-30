import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const SNSLogin = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("location>>>", location);
  }, []);

  return <>SNSLoginPage</>;
};

export default SNSLogin;
