import React from 'react';

import { Link } from "react-router-dom";

function AddHour({ index, hour }) {
    return (
        <>
            <h3>{hour.name}</h3>
        </>
    )
}

function AddDay({ index, time, hours,day }) {
    return (
        <>
            <div className="section-box">
                <h2>{day} - {time}</h2>
                <div className="hours">
                    {hours.map((hour, index) => (<AddHour key={index} hour={hour} />))}
                </div>
            </div>
        </>
    )
}

export default function AddSections({ chair, setChair, times, infos }) {
    return (
        <>
            <Link to='/'><header>CINEFLEX</header></Link>
            <img className='background-movie' src={infos.posterURL}/>
            <div className="background">
                <main>
                    <h1>Seleciona um filme</h1>
                    {times.map((time, index) => (<AddDay key={index} time={time.date} hours={time.showtimes} day={time.weekday}/>))}
                    <button>Trocar</button>
                </main>
                
                <footer>
                    <img src={infos.posterURL}/>
                    <h1>{infos.title}</h1>
                </footer>
            </div>

        </>
    )
}