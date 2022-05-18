import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'

import InitialPage from "./Components/InitialPage/InitialPage";

import Sections from "./Components/Sections/Sections";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<Sections />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));