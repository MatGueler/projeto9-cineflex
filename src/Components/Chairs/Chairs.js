import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddChairs from './AddChairs/AddChairs';
import axios from 'axios';
import Sucess from '../Sucess/Sucess';

export default function Chairs({ body, setBody }) {

    const [seats, setSeats] = React.useState([])

    const [info, setInfo] = React.useState({})

    const [day, setDay] = React.useState({})

    const [object, setObject] = React.useState({})

    const { idSessao } = useParams()

    const [idSeat, setIdSeat] = React.useState([])

    const [selected, setSelected] = React.useState([])

    const [choose, setChoose] = React.useState(true)

    const [buyer, setBuyer] = React.useState('')

    const [cpf, setCpf] = React.useState('')

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then((resposta) => {
            setObject(resposta.data)
            setSeats(resposta.data.seats)
            setInfo(resposta.data.movie)
            setDay(resposta.data.day)
        });
    }, []);

    const post = {
        ids: idSeat,
        name: buyer,
        cpf: cpf
    }

    const valor = {
        ids: idSeat,
        name: buyer,
        cpf: cpf,
        title: info.title,
        hour: object.name,
        date: day.date
    }

    function Mudar() {

        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', post)

        promise.then((res) => { console.log(res.data) })

        let novo = body.map(e => {
            return valor
        })
        setBody([...novo])
    }

    return (
        <>
            <Link to='/'><header>CINEFLEX</header></Link>
            <div className="background">
                <main>
                    <h1 >Selecione o(s) assento(s)</h1>
                    <div className="chairs-box">
                        {seats.map((seat, index) => (<AddChairs key={index} seat={seat} status={seat.isAvailable} selected={selected} setSelected={setSelected} idSeat={idSeat} setIdSeat={setIdSeat} />))}
                    </div>

                    <div className="type-seats">
                        <div className='type-box'>
                            <h2 className="chair disponivel"></h2>
                            <h2> Disponível</h2>
                        </div>
                        <div className='type-box'>
                            <h2 className="chair selecionado"></h2>
                            <h2>Selecionado</h2>
                        </div>
                        <div className='type-box'>
                            <h2 className="chair indisponivel"></h2>
                            <h2>Indisponível</h2>
                        </div>
                    </div>

                    <div className='infos-buyer'>

                        <div>
                            <h2>Nome do comprador:</h2>
                            <input type='text' placeholder='Digite seu nome...' value={buyer} onChange={(e) => setBuyer(e.target.value)} />
                        </div>

                        <div>
                            <h2>CPF do comprador:</h2>
                            <input type='text' placeholder='Digite seu CPF...' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        </div>
                    </div>

                    <Link to='/sucesso'><button className='reserve' onClick={Mudar}>Reservar assento(s)</button></Link>
                </main>
                <footer>
                    <img src={info.posterURL} alt='' />
                    <div className='title-footer'><p>{info.title}</p>
                        <p>{day.weekday} - {object.name}</p></div>
                </footer>
            </div>
        </>
    )
}