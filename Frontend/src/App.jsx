import React from "react";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "./Routes/Index";
import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  const routes = useRoutes()
  return (
    <Routes>
      {routes.map(({ path, element: Element, isLayout }) => (
        <Route
          key={path}
          path={path}
          element={isLayout ? <Layout><Element /></Layout> : <Element />}
        />
      ))}
    </Routes>
  );
}

export default App;
