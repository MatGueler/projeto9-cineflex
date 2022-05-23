import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./Components/InitialPage/InitialPage";
import Sections from "./Components/Sections/Sections";
import Chairs from "./Components/Chairs/Chairs";
import Sucess from "./Components/Sucess/Sucess";
import Header from "./Components/Header/Header";
import Back from "./Components/Back/Back";
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'

function App() {
    const [body, setBody] = React.useState([{}])
    const [buttonBack,setButtonBack] = React.useState('none')
    return (
        <>
            <Header/>
            <Back buttonBack={buttonBack}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialPage/>} />
                    <Route path="/sessoes/:idFilme" element={<Sections setButtonBack={setButtonBack}/>} />
                    <Route path="/assentos/:idSessao" element={<Chairs body={body} setBody={setBody} />} />
                    <Route path="/sucesso" element={<Sucess body={body} setBody={setBody} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));

