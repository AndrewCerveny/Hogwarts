import React from "react";
import SpellCard from "../SpellCard/SpellCard";

const SpellArea = ({spells}) => {
  
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
 
 
  return (
    <section className='spells-displayed'>
      {/* <p>spells here </p> */}
      {allSpells}
    </section>
 )
}
export default SpellArea; 
