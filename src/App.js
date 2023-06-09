import React from "react";
import { Welcome, PublishRoutes, LetsGo, CreateAcc, ViewRoutes, CustomerHome } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/letsGo" exact element={<LetsGo />} />
          <Route path="/create-account" exact element={<CreateAcc />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/publish-routes" exact element={<PublishRoutes />} />
          <Route path="/view-routes/:collectorID" element={<ViewRoutes />} />
          <Route path="/home" exact element={<CustomerHome />} />
          <Route path="*" element={<Navigate to={'/home'} />} />
        </Routes>
      </BrowserRouter>
      <Loader />
    </div>
  );
}

export default App;
