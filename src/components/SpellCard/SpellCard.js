import React from "react";
import './SpellCard.css'

function SpellCard({id,name,incantation,effect,light,type}) {
  return(
    <div className="card-body">
      <h2 className="sc-name"> Name: {name}</h2>
      <h3 className="sc-cat"> Category: {type}</h3>
      <h3 className="sc-incat"> Incantation: {incantation}</h3>
      <p className="sc-eff"> Effect: {effect}</p>
      <p className="sc-color"> Wand color omit: {light}</p>
    </div>
  )
}

export default SpellCard; 

