import React from "react";
// import './Display.css'
import SpellCard from "../SpellCard/SpellCard";
import {useEffect, useState} from "react";
import cleanSpells from "../../util/cleaning";

function Display() {

    const [spells , setSpells] = useState([])
    const [error, setError] = useState('')


    const getSpells = async () => {
        const url = 'https://wizard-world-api.herokuapp.com/Spells'
        setError('')

        try {
            const response = await fetch(url)
            const spells = await response.json()
            const alteredSpells = cleanSpells(spells)
            setSpells(alteredSpells)
        }catch(error){
            setError(error.message)
        }
    }

    useEffect (() => {
        getSpells()
    },[])

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
    {/*{allSpells}*/}

  return(
    <section className="display-area">
      {allSpells}
        <div> display this </div>
    </section>
  )
}
export default Display;