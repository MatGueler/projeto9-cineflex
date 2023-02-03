import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AddHour({ index, hour }) {
	return (
		<Link to={`/assentos/${hour.id}`}>
			<>
				<Hour>{hour.name}</Hour>
			</>
		</Link>
	);
}

function AddDay({ index, time, hours, day, idSessao }) {
	return (
		<>
			<Section>
				<h2>
					{day} - {time}
				</h2>
				<Hours>
					{hours.map((hour, index) => (
						<AddHour key={index} hour={hour} idSessao={idSessao} />
					))}
				</Hours>
			</Section>
		</>
	);
}

export default function AddSections({ times, infos }) {
	return (
		<>
			<img className='background-movie' src={infos.posterURL} alt='' />
			<div className='background'>
				<main>
					<h1>Seleciona um Horário</h1>
					{times.map((time, index) => (
						<AddDay
							key={index}
							time={time.date}
							hours={time.showtimes}
							day={time.weekday}
						/>
					))}
				</main>

				<footer>
					<img src={infos.posterURL} alt='' />
					<div>
						<p>{infos.title}</p>
					</div>
				</footer>
			</div>
		</>
	);
}

const Section = styled.div`
	margin: 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Hours = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
`;

const Hour = styled.div`
	width: 80px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	margin: 0 20px 20px 20px;
	cursor: pointer;
	color: #ffffff;
	text-decoration: none;
	background-color: #e8833a;
`;
