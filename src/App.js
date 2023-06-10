import React from "react";
import { Welcome, LetsGo } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/letsGo" exact element={<LetsGo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
