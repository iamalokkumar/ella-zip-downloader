import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { LoginCallback } from "@okta/okta-react";

import { RequiredAuth } from "./RequiredAuth";
import Loading from "./Loading";
import Dashboard from "./screen/Dashboard";


export default function AppRouter() {
    return (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route
        path="login/callback"
        element={<LoginCallback loadingElement={<Loading />} />}
      />
       <Route path="/" element={<RequiredAuth />}>
       <Route path="" element={<Dashboard />} />
       </Route>
       </Routes>
    )
}