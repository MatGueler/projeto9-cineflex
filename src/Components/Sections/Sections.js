import AddSections from "../AddSections/AddSections";
import Chairs from "../Chairs/Chairs";
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Sections() {

    const { idFilme } = useParams();

    const [times, setTimes] = React.useState([])

    const [infos,setInfos]=React.useState([])

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then((resposta) => {
            setInfos(resposta.data)
            setTimes(resposta.data.days)
            console.log(resposta.data)
        });
    }, []);

    const [chair, setChair] = React.useState(true)
    return (
        <>
            {chair ? (<AddSections chair={chair} setChair={setChair} times={times} infos={infos}/>) : (<Chairs chair={chair} setChair={setChair} />)}
        </>
    )
}