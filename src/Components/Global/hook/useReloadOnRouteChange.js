import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useReloadOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.location.href = location.pathname;
  }, [location.pathname]);
};

export default useReloadOnRouteChange;
