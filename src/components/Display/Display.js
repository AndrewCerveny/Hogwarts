import React from "react";
import './Display.css'
import SpellCard from "../SpellCard/SpellCard";

function Display({spells}){
  const allSpells = spells.map((spell) => 
    <section className="spell-card-wrapper" key={spell.id}>
      <SpellCard
        id={spell.id}
        name={spell.name}
        incantation={spell.incantation}
        effect={spell.effect}
        light={spell.light}
        type={spell.type}
      />
    </section>
  )
 

  return(
    <section className="display-area">
      {allSpells}
    </section>
  )
}
export default Display; 