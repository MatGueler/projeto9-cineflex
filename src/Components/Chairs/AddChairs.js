import React from "react"

function Occuped({seat,avaliable, SetAvaliable, cor, setCor, selected, setSelected,idSeat,setIdSeat}) {

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

        let v = idSeat.filter(function(element){
            if(element !== seat.id){
                return true
            }
        })

        let u = selected.filter(function(element){
            if(element !== seat.name){
                return true
            }
        })
        setCor(!cor)
        setSelected(u)
        setIdSeat(v)
    }

    function Change(){
        setCor(!cor)
        setSelected([...selected,seat.name])
        setIdSeat([...idSeat,seat.id])
    }
    

    {cor ? SetAvaliable('disponivel') : SetAvaliable('selecionado')}

    return (
        <h2 className={`chair ${avaliable}`} onClick={Decision}>{seat.name}</h2>
    )
}

export default function AddChairs({ index, seat, status, selected, setSelected,idSeat,setIdSeat}) {

    const[cor,setCor] = React.useState(status)
    const[avaliable,SetAvaliable] = React.useState('')
    return (
        <>
            {(status) ? (<Occuped seat={seat} avaliable={avaliable} SetAvaliable={SetAvaliable} cor={cor} setCor={setCor} selected={selected} setSelected={setSelected} idSeat={idSeat} setIdSeat={setIdSeat}/>): (<h2 className = "chair indisponivel" onClick={() => alert('Esse assento não está disponível')}>{seat.name}</h2>)}
        </>
    )
}