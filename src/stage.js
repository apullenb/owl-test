import React from 'react'; 

export default function Stage({p}) {
    console.log(p);
        return (
        <div className="stage"> 
            {p.map(x => 
            <div class="stage-individual-box">
            <p>{x.name}</p>
            <img src={x.avatar} alt={x.name}/>
            </div>
          )}
        </div>
    )
}