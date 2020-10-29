import React from 'react';

const Status = (inSession, onStage) => {
    console.log(inSession, onStage)
    if (inSession && onStage) {
        return (
            <p>on stage</p>
        )
    }

    if (inSession && !onStage) {
        return (
            <p>in session</p>
        )
    }

    return (
        <p>left stage</p>
    )
}

function Participant({key, p}) {
    console.log(p)
   
    return ( 
    <ul className="participants">
        {p.map(x => 
        <li key={key}>
        <p>{x.name}</p>
        <img className="avatar" src={x.avatar} alt={x.name}/>
         {Status(x.inSession, x.onStage)}
        </li>)}
        </ul>
    )
}

export default Participant;