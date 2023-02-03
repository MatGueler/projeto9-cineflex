import React from 'react';

function Occuped({
	seat,
	avaliable,
	SetAvaliable,
	cor,
	setCor,
	selected,
	setSelected,
	idSeat,
	setIdSeat,
	selectedSeats,
	setSelectedSeats,
	setBuyers,
	buyers,
}) {
	function Decision() {
		let verificar = 0;
		selected.map(function (element) {
			if (element.name === seat.name) {
				verificar += 1;
			}
		});
		if (verificar === 0) {
			Change();
		} else {
			Remove();
		}
	}

	function Remove() {
		const confirm = window.confirm(
			'Tem certeza que deseja desmarcar esse assento'
		);
		if (confirm) {
			let onlySeats = [];
			let v = idSeat.filter(function (element) {
				if (element !== seat.id) {
					return true;
				}
			});

			let u = selected.filter(function (element, index) {
				if (element.name !== seat.name) {
					onlySeats.push(element.id);
					return true;
				}
			});

			let newBuyers = buyers.filter((buyer) => buyer.idAssento !== seat.id);

			setBuyers(newBuyers);
			setCor(!cor);
			setSelected(u);
			setSelectedSeats(onlySeats);
			setIdSeat(v);
		}
	}

	function Change() {
		setCor(!cor);
		setSelectedSeats([...selectedSeats, seat.id]);
		setSelected([...selected, seat]);
		setIdSeat([...idSeat, seat.id]);
	}

	{
		cor ? SetAvaliable('disponivel') : SetAvaliable('selecionado');
	}

	return (
		<h2 className={`chair ${avaliable}`} onClick={Decision}>
			{seat.name}
		</h2>
	);
}

export default function AddChairs({
	index,
	seat,
	status,
	selected,
	setSelected,
	idSeat,
	setIdSeat,
	selectedSeats,
	setSelectedSeats,
	setBuyers,
	buyers,
}) {
	const [cor, setCor] = React.useState(status);
	const [avaliable, SetAvaliable] = React.useState('');
	return (
		<>
			{status ? (
				<Occuped
					seat={seat}
					avaliable={avaliable}
					SetAvaliable={SetAvaliable}
					cor={cor}
					setCor={setCor}
					selected={selected}
					setSelected={setSelected}
					idSeat={idSeat}
					setIdSeat={setIdSeat}
					selectedSeats={selectedSeats}
					setSelectedSeats={setSelectedSeats}
					setBuyers={setBuyers}
					buyers={buyers}
				/>
			) : (
				<h2
					className='chair indisponivel'
					onClick={() => alert('Esse assento não está disponível')}>
					{seat.name}
				</h2>
			)}
		</>
	);
}
