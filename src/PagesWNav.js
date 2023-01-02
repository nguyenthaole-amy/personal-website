import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/NavBar/Nav";

function PagesWNav() {
    return (
        <React.Fragment>
            <Nav/>
            <Routes>
                <Route path="/home" element={<HomePage />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default PagesWNav;
