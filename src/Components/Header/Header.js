import styled from 'styled-components';

export default function Header(){
    return (
        <Topo>CINEFLEX</Topo>
    )
}

const Topo = styled.header`
    width: 100%;
    height: 70px;
    font-size: 34px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E8833A;
    border: solid 1px #9EADBA;
    background-color: #C3CFD9;
    z-index: 1;
`