import React from 'react';

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
            <header>CINEFLEX</header>
            <div className="background">
                <main>
                    <h1>Seleciona um filme</h1>
                    {times.map((time, index) => (<AddDay key={index} time={time.date} hours={time.showtimes} day={time.weekday}/>))}
                    <button>Trocar</button>
                </main>
                <footer>
                    <img className='imagem-footer' src={infos.posterURL}/>
                    <h1>{infos.title}</h1>
                </footer>
            </div>

        </>
    )
}