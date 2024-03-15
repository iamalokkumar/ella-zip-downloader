
import  { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export const RequiredAuth = () => {
    const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState) {
      return;
    }
    if (!authState?.isAuthenticated) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return <Loading />;
  }
  return <Outlet />;
}