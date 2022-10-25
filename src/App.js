import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "logo.png";
import LeadingPage from "./pages/LeadingPage/LeadingPage";
import HomePage from "./pages/HomePage/HomePage";
import PagesWNav from "./PagesWNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<LeadingPage />} />*/}
        <Route path="*" element={<PagesWNav />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
