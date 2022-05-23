import AddSections from "./AddSections";
import Chairs from "../Chairs/Chairs";
import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Sections({setButtonBack}) {

    const { idFilme } = useParams();

    const [times, setTimes] = React.useState([])

    const [infos,setInfos]=React.useState([])

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then((resposta) => {
            setInfos(resposta.data)
            setTimes(resposta.data.days)
        });
    }, []);

    setButtonBack('flex')

    return (
        <>
            <AddSections times={times} infos={infos}/>
        </>
    )
}