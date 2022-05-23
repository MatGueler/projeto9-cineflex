import styled from 'styled-components';

export default function Back({buttonBack}){
    return (
        <Button buttonBack={buttonBack}><ion-icon name="arrow-undo-outline"></ion-icon></Button>
    )
}

const Button = styled.button`
position: absolute;
top: 70px;
display: ${props => props.buttonBack};
justify-content: start;
border: 0;
font-size: 30px;
background-color: transparent;
margin: 20px;

`