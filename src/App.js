import React from "react";
import { Welcome, PublishRoutes, LetsGo, CreateAcc } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/letsGo" exact element={<LetsGo />} />
          <Route path="/create-account" exact element={<CreateAcc />} />
          <Route path="/publish-routes" exact element={<PublishRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
