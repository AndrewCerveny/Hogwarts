import React from "react";
import './SpellCard.css'

function SpellCard({id,name,incantation,effect,light,type}) {
  return(
  <section className="card-body">
    <h2> Name: {name}</h2>
    <h3> Category: {type}</h3>
    <h3> Incantation: {incantation}</h3>
    <p> Effect: {effect}</p>
    <p> Wand color omit: {light}</p>
  </section>
  )
}

export default SpellCard; 

