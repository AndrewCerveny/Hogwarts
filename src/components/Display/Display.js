import React from "react";
// import './Display.css'
import SpellCard from "../SpellCard/SpellCard";
import {useEffect, useState} from "react";
import cleanSpells from "../../util/cleaning";
import Form from "../Form/Form";

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
 
 const handleClick = (e, category) => {
  e.preventDefault()
  const assortedSpells = spells.filter((spell) => spell.type === category)
 setSpells(assortedSpells)
 }





  return(
    <section className="display-area">
      <section className="form-area">
        <Form spells={spells} selectClick={handleClick} />
      </section>
      <section className="spells-area">
     {allSpells}
      </section>   
  </section>
  )
}
export default Display;