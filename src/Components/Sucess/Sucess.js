import { Link } from "react-router-dom"
import React from "react"

export default function Sucess({ body, setBody }) {

    const assentos = body.map(function (item) {
        return (item.ids)
    })

    const name = body[0].name

    const cpf = body[0].cpf

    const title = body[0].title

    const hour = body[0].hour

    const date = body[0].date

    const newAssentos = assentos[0]

    return (
        <>
            <div className="background">
                <main>
                    <h1 className="sucess">Pedido feito com sucesso!</h1>

                    <div className="selected-infos">
                        <h2>Filme e sessão</h2>
                        <h3>{title}</h3>
                        <h3>{date} - {hour}</h3>
                    </div>
                    <div className="selected-seats">
                        <h2>Ingressos</h2>
                        {newAssentos.map((item, index) => <h3 key={index}>Assento - {item}</h3>)}
                    </div>
                    <div className="final-buyer">
                        <h2>Comprador</h2>
                        <h3>Nome: {name}</h3>
                        <h3>CPF: {cpf}</h3>
                    </div>
                    <Link to='/'><button className='reserve'>Home</button></Link>

                </main>
            </div>

        </>
    )
}