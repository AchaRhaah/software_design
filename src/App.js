import React from "react";
import { Welcome, LetsGo, CreateAcc } from "./pages";
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
        </Routes>
      </BrowserRouter>
      <Loader />
    </div>
  );
}

export default App;
