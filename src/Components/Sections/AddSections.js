import React from 'react';

import { Link, useParams } from "react-router-dom";

function AddHour({ index, hour }) {
    return (
        <Link to={`/assentos/${hour.id}`}>
            <>
                <div className='hour'>
                    {hour.name}
                </div>
            </>
        </Link >
    )
}

function AddDay({ index, time, hours, day, idSessao }) {
    return (
        <>
            <div className="section-box">
                <h2>{day} - {time}</h2>
                <div className="hours">
                    {hours.map((hour, index) => (<AddHour key={index} hour={hour} idSessao={idSessao} />))}
                </div>
            </div>
        </>
    )
}

export default function AddSections({ times, infos }) {
    return (
        <>
            <Link to='/'><header>CINEFLEX</header></Link>
            <img className='background-movie' src={infos.posterURL} />
            <div className="background">
                <main>
                    <h1>Seleciona um Horário</h1>
                    {times.map((time, index) => (<AddDay key={index} time={time.date} hours={time.showtimes} day={time.weekday} />))}
                </main>

                <footer>
                    <img src={infos.posterURL} alt='' />
                    <div><p>{infos.title}</p></div>
                </footer>
            </div>

        </>
    )
}