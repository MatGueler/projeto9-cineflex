import React from "react"

function IsAvaliable({seat,avaliable, SetAvaliable, cor, setCor, selected, setSelected}) {

    function Decision(){
        let verificar =0;
        selected.map(function(element){
            if(element===seat.name){
                verificar +=1;
            }
        })
        if(verificar===0){
            Change()
        }
        else{
            Remove()
        }
    }

    function Remove(){
        let u = selected.filter(function(element){
            if(element !== seat.name){
                return true
            }
        })
        setCor(!cor)
        setSelected(u)
    }

    function Change(){
        setCor(!cor)
        setSelected([...selected,seat.name])
    }
    

    {cor ? SetAvaliable('disponivel') : SetAvaliable('selecionado')}

    return (
        <h2 className={`chair ${avaliable}`} onClick={Decision}>{seat.name}</h2>
    )
}

export default function AddChairs({ index, seat, status, selected, setSelected}) {

    const[cor,setCor] = React.useState(true)
    const[avaliable,SetAvaliable] = React.useState('')
    return (
        <>
            {!status ? (<IsAvaliable seat={seat} avaliable={avaliable} SetAvaliable={SetAvaliable} cor={cor} setCor={setCor} selected={selected} setSelected={setSelected}/>): (<h2 className = "chair indisponivel" onClick={() => alert('Esse assento não está disponível')}>{seat.name}</h2>)}
        </>
    )
}