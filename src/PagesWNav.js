import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "logo.png";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./NavBar/Nav";

function PagesWNav() {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                {/*<Route path="/" element={<LeadingPage />} />*/}
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesWNav;
