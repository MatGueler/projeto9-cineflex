import AddSections from './AddSections';
import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Back from '../Back/Back';

export default function Sections({ buttonBack, setButtonBack }) {
	const { idFilme } = useParams();

	const [times, setTimes] = React.useState([]);

	const [infos, setInfos] = React.useState([]);

	useEffect(() => {
		const requisicao = axios.get(
			`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
		);

		requisicao.then((resposta) => {
			setInfos(resposta.data);
			setTimes(resposta.data.days);
		});
	}, []);

	setButtonBack('flex');

	return (
		<>
			<Back buttonBack={buttonBack} routeBack='/' />
			<AddSections times={times} infos={infos} />
		</>
	);
}
