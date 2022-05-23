import AddMovies from "./AddMovies"
import Sections from "../Sections/Sections";
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';


function Movies() {

    const [items, setItems] = useState([]);

    const [idSel, setIdSel] = React.useState('1')

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then((resposta) => {
            setItems([...resposta.data])
        });
    }, []);

    return (
        <>
            <header>CINEFLEX</header>
            <div className="background">
                <main>
                    <h1>Selecione um filme</h1>
                    <div className="movies">
                        {items.length === 0 ? 'ESPERA AI' :
                            items.map((item, index) => (<AddMovies key={index} source={item.posterURL} title={item.title} id={item.id} idSel={idSel} setIdSel={setIdSel} />))
                        }
                    </div>
                </main>
            </div>
        </>
    )
}


export default function InitialPage() {

    const [sections, setSections] = React.useState(true)

    return (
        <>
            {sections ? (<Movies sections={sections} setSections={setSections} />) : (<Sections sections={sections} setSections={setSections} />)}
        </>
    )

}