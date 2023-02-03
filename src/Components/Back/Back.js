import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Back({ buttonBack, routeBack }) {
	let navigate = useNavigate();
	return (
		<Button buttonBack={buttonBack} onClick={() => navigate(routeBack)}>
			<ion-icon name='arrow-undo-outline'></ion-icon>
		</Button>
	);
}

const Button = styled.button`
	position: fixed;
	top: 70px;
	display: ${(props) => props.buttonBack};
	justify-content: start;
	border: 0;
	font-size: 30px;
	background-color: transparent;
	margin: 20px;
	z-index: 2;
	cursor: pointer;
`;
