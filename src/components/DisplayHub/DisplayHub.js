import React from "react";
import {useEffect, useState} from "react";
import cleanSpells from "../../util/cleaning";
import Form from "../Form/Form";
import SpellArea from "../SpellsArea/SpellsArea";

function DisplayHub() {

    const [spells , setSpells] = useState([])
    const [spellCategory, setSpellCategory] = useState([])
    const [desiredSearch, setDesiredSearch] = useState([])
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

  
    const handleClick = (e, category) => {
    e.preventDefault()
   const assortedSpells = spells.filter((spell) => spell.type === category)
    setSpellCategory(assortedSpells)
  }

  const clearOut = () => {
    setSpellCategory([])
  }


  


  return(
    <section className="display-area">
      <section className="form-area">
        <Form spells={spells} selectClick={handleClick} clearOut={clearOut} />
      </section>
      <section className="spells-containment">
        {!spellCategory.length 
        ? <SpellArea spells={spells}/> 
        : <SpellArea spells={spellCategory} />
        }
      </section>   
  </section>
  )
}
export default DisplayHub;