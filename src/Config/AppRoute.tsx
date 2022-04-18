import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import ROUTES from "./Routes";

function AppRoute() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.url} element={<Dashboard component={route.component} />} />
        ))}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default AppRoute;
