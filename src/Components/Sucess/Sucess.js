import { Link, Navigate, useNavigate } from 'react-router-dom';
import React from 'react';

export default function Sucess({ body, setBody }) {
	let navigate = useNavigate();
	if (body.length === 0) {
		navigate('/');
		console.log('oi');
	}

	return (
		<>
			<div className='background'>
				<main>
					<h1 className='sucess'>Pedido feito com sucesso!</h1>

					<div className='selected-infos'>
						<h2>Filme e sessão</h2>
						<h3>{body?.title ?? ''}</h3>
						<h3>
							{body?.date ?? ''} - {body.hour}
						</h3>
					</div>
					<div className='selected-seats'>
						<h2>Ingressos</h2>
						{body?.compradores.map((item, index) => (
							<h3 key={index + item}>Assento - {item.idAssento}</h3>
						))}
					</div>
					<div className='final-buyer'>
						<h2>Comprador</h2>
						{body?.compradores.map((item, index) => (
							<>
								<div className='buyer-box'>
									<h3 key={index + item}>Nome - {item.palavra}</h3>
									<h3 key={index + item}>CPF - {item.cpf}</h3>
								</div>
							</>
						))}
					</div>
					<Link to='/'>
						<button className='reserve'>Home</button>
					</Link>
				</main>
			</div>
		</>
	);
}
