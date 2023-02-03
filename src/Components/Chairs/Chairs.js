import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AddChairs from './AddChairs';
import axios from 'axios';
import Back from '../Back/Back';

export default function Chairs({ body, setBody, buttonBack, setButtonBack }) {
	const [seats, setSeats] = React.useState([]);

	const [info, setInfo] = React.useState({});

	const [day, setDay] = React.useState({});

	const [object, setObject] = React.useState({});

	const { idSessao } = useParams();

	const [idSeat, setIdSeat] = React.useState([]);

	const [selected, setSelected] = React.useState([]);

	const [buyers, setBuyers] = React.useState([]);

	const [selectedSeats, setSelectedSeats] = useState([]);

	setButtonBack('flex');

	let navigate = useNavigate();

	const AddBuyer = (e, index, seat) => {
		buyers[index] = { idAssento: seat.id, palavra: e.target.value };

		setBuyers([...buyers]);
	};

	const AddCpfBuyer = (e, index, seat) => {
		buyers[index] = {
			...buyers[index],
			cpf: e.target.value,
			idAssento: seat.id,
		};

		setBuyers([...buyers]);
	};

	useEffect(() => {
		const requisicao = axios.get(
			`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
		);

		requisicao.then((resposta) => {
			setObject(resposta.data);
			setSeats(resposta.data.seats);
			setInfo(resposta.data.movie);
			setDay(resposta.data.day);
			console.log(resposta.data.movie);
		});
	}, []);

	function Mudar() {
		const promise = axios.post(
			'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
			{ ids: selectedSeats, compradores: buyers }
		);

		const valor = {
			ids: selectedSeats,
			compradores: buyers,
			title: info.title,
			hour: object.name,
			date: day.date,
		};

		promise.then((res) => {
			setBody(valor);
			navigate('/sucesso');
		});
	}

	function validateInfos() {
		if (selectedSeats.length !== buyers.length) {
			return alert('Preencha os dados corretamente!');
		}
		buyers.forEach((buyer) => {
			const cpf = (buyer?.cpf).replace(/[.-]/g, '');
			if (cpf.length !== 11) {
				return alert('Preencha os dados corretamente!');
			}
		});

		Mudar();
	}

	return (
		<>
			<div className='background'>
				<main>
					<Back buttonBack={buttonBack} routeBack={`/sessoes/${info.id}`} />
					<h1>Selecione o(s) assento(s)</h1>
					<div className='chairs-box'>
						{seats.map((seat, index) => (
							<AddChairs
								key={index}
								seat={seat}
								status={seat.isAvailable}
								selected={selected}
								setSelected={setSelected}
								idSeat={idSeat}
								setIdSeat={setIdSeat}
								selectedSeats={selectedSeats}
								setSelectedSeats={setSelectedSeats}
								setBuyers={setBuyers}
								buyers={buyers}
							/>
						))}
					</div>

					<div className='type-seats'>
						<div className='type-box'>
							<h2 className='chair disponivel'></h2>
							<h2> Disponível</h2>
						</div>
						<div className='type-box'>
							<h2 className='chair selecionado'></h2>
							<h2>Selecionado</h2>
						</div>
						<div className='type-box'>
							<h2 className='chair indisponivel'></h2>
							<h2>Indisponível</h2>
						</div>
					</div>

					{selected.length === 0
						? null
						: selected.map((seat, index) => (
								<>
									<div className='infos-buyer'>
										<div>
											<p>Assento {seat.name}</p>
											<h2>Nome do comprador:</h2>
											<input
												type='text'
												placeholder='Digite seu nome...'
												value={buyers[index]?.palavra ?? ''}
												onChange={(e) => AddBuyer(e, index, seat)}
												maxLength={14}
											/>
										</div>

										<div>
											<h2>CPF do comprador:</h2>
											<input
												type='text'
												placeholder='Digite seu CPF...'
												value={buyers[index]?.cpf ?? ''}
												onChange={(e) => AddCpfBuyer(e, index, seat)}
											/>
										</div>
									</div>
								</>
						  ))}

					{selected.length === 0 ? (
						<button
							className='reserve'
							onClick={() => alert('Selecione pelo menos um assento!')}>
							Reservar assento(s)
						</button>
					) : (
						// <Link to='/sucesso'>
						<button
							className='reserve'
							onClick={() => {
								validateInfos();
							}}>
							Reservar assento(s)
						</button>
						// </Link>
					)}
				</main>
				<footer>
					<img src={info.posterURL} alt='' />
					<div className='title-footer'>
						<p>{info.title}</p>
						<p>
							{day.weekday} - {object.name}
						</p>
					</div>
				</footer>
			</div>
		</>
	);
}
