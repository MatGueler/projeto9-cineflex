import React from 'react';

export default function Chairs({chair,setChair}){
    const[status,setStatus]=React.useState('disponivel')
    return (
        <>
            <header>CINEFLEX</header>
            <div className="background">
                <main>
                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="chairs-box">
                        <h2 className={`chair ${status}`} onClick={() => setStatus('selecionado')}>01</h2>
                        <h2 className="chair indisponivel">01</h2>
                        <h2 className={`chair disponivel`}>01</h2>
                    </div>
                    <button onClick={() => setStatus('disponivel')}>Trocar</button>
                </main>
                <footer>
                    <h1>Nome do filme</h1>
                </footer>
            </div>
        </>
    )
}