import React from "react";
import { Welcome, PublishRoutes, LetsGo, CreateAcc, ViewRoutes } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/letsGo" exact element={<LetsGo />} />
          <Route path="/create-account" exact element={<CreateAcc />} />
          <Route path="/publish-routes" exact element={<PublishRoutes />} />
          <Route path="/view-routes" exact element={<ViewRoutes />} />
        </Routes>
      </BrowserRouter>
      <Loader />
    </div>
  );
}

export default App;
