import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="app-routes">
      <Routes>
        <Route path="/">
          <Layout />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
