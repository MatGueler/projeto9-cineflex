import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'

import InitialPage from "./Components/InitialPage/InitialPage";

import Sections from "./Components/Sections/Sections";
import Chairs from "./Components/Chairs/Chairs";
import Sucess from "./Components/Sucess/Sucess";

function App() {
    const [body,setBody]=React.useState([{}])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<Sections />} />
                <Route path="/assentos/:idSessao" element={<Chairs body={body} setBody={setBody}/>} />
                <Route path="/sucesso" element={<Sucess body={body} setBody={setBody}/>} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));