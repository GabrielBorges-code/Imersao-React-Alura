import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page from "../pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}
