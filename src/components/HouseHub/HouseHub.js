import React from "react";
import { useState, useEffect } from "react";
import { cleaningHouse } from '../../util/cleaning'
import HouseForm from "../HouseForm/HouseForm";
import './HouseHub.css'

const HouseHub = () => {
  const [houseStats , setHouseStats] = useState([])
  const[CharacterDetails, setCharacterDetails] = useState([])
  const [error, setError] = useState('')

  const getHouseDeeds = async () => {
    const url1 = 'https://wizard-world-api.herokuapp.com/Houses'
    const url2 = 'https://hp-api.onrender.com/api/characters'
      setError('')

      try {
        const response1 = await fetch(url1)
        const response2 = await fetch(url2)
        const houseSpecs = await response1.json()
        const characterSpecs = await response2.json()
        const houseInfo = cleaningHouse(houseSpecs)
        setHouseStats(houseInfo)
        setCharacterDetails(characterSpecs)
      }catch(error){
        setError(error.message)
      }
    }

    useEffect (() => {
        getHouseDeeds()
    },[])

    return(
      <section>
        <HouseForm houses={houseStats}/>
      </section>
    )

}
export default HouseHub; 