import { useNavigate } from "react-router-dom";

const usePageNavigation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return { navigate, handleBack };
};

export default usePageNavigation;
